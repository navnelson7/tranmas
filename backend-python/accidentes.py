from flask import Blueprint, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from bson.objectid import ObjectId
from flask_cors import cross_origin


api_accidente = Blueprint('api_accidente', __name__)

PATH_IMAGE = "/imagenes-accidentes/"
PATH_IMAGE_ACCIDENTE = "./imagenes-accidentes"


@api_accidente.errorhandler(400)
def not_found(error=str):
    response = jsonify({
        "message": error,
        "status": 400
    })
    response.status_code = 400
    return response


@api_accidente.route('/upload/mutiple/accidentes', methods=["POST"])
def upload_image_accidente():
    if request.method == 'POST':
        files = request.files.getlist("files")
        array_images = []
        for filess in files:
            print(filess)
        for file in files:
            try:
                filename = secure_filename(file.filename)
                working_directory = os.getcwd()
                # Guardamos la imagen con un id unico
                filename_finally = f'{ObjectId()}{os.path.splitext(filename)[1]}'
                file.save(working_directory + PATH_IMAGE + filename_finally)
                array_images.append(filename_finally)
            except FileNotFoundError:
                return jsonify({
                    "message": "Error, folder does not exist",
                    "upload": False,
                })
        return jsonify({
            "message": "success",
            "upload": True,
            "images": array_images
        })


@api_accidente.route('/imagenes/accidentes/<string:filename>')
def get_images_accidentes(filename):
    image_name = str(filename)
    return send_from_directory(directory=os.path.join(PATH_IMAGE_ACCIDENTE), filename=image_name, as_attachment=False)


# REMOVE IMAGES
@api_accidente.route('/delete/image/accidente', methods=['POST'])
def remove_images_accidente():
    filename = request.form['filename']
    try:
        os.remove(os.getcwd() + PATH_IMAGE + filename)
    except OSError:
        return jsonify({
            "message": "Error, file does not exist",
        })
    return jsonify({
        "message": "success",
        "status": 200,
    })
