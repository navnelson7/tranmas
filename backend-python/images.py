from flask import Blueprint, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from PIL import Image
import typing
from flask_cors import CORS
from bson.objectid import ObjectId

api_images = Blueprint('api_images', __name__)

PATH_IMAGE = "./images"


@api_images.errorhandler(400)
def not_found(error=str):
    response = jsonify({
        "message": error,
        "status": 400
        })
    response.status_code = 400
    return response

@api_images.route('/upload', methods=["POST"])
def upload_image():
    if request.method == 'POST':
        # SI EL USUARIO NO MANDA LA IMAGEN
        if 'file' not in request.files:
            print('jjee')
            return not_found(error="Image not found")

        file = request.files['file']       

        if file.filename == '':
            return not_found(error="Select a file")

        filename = secure_filename(file.filename)
        filename_finally = ""
        try:
            file.save(os.path.join(PATH_IMAGE, filename))
            filename = secure_filename(file.filename)
            image = Image.open(os.path.join(PATH_IMAGE, filename), mode="r")
            image.thumbnail(image.size)

            # Guardamos la imagen con un id unico
            filename_finally = f'{ObjectId()}.{str(image.format).lower()}'
            image.save(os.path.join(PATH_IMAGE, filename_finally), optimize=True, quality=95)

            # Eliminamos el archivo anterior
            if os.path.exists(os.path.join(PATH_IMAGE, filename)):
                os.remove(os.path.join(PATH_IMAGE, filename))

        except FileNotFoundError:
            return jsonify({
                "message": "Error, folder does not exist",
                "upload": False,
                "filename": ""
            })
        return jsonify({
            "message": "success",
            "upload": True,
            "status": 200,
            "filename": filename_finally
        })


@api_images.route('/images/<string:filename>')
def get_images(filename):
    image_name = str(filename)
    return send_from_directory(directory=os.path.join(PATH_IMAGE), filename=image_name, as_attachment=False, )