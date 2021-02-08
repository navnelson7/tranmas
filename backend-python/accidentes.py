from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from bson.objectid import ObjectId


api_accidente = Blueprint('api_accidente', __name__)

PATH_IMAGE = "/imagenes-accidentes/"


@api_accidente.route('/upload/mutiple/accidentes', methods=["POST"])
def upload_image():
    if request.method == 'POST':
        files = request.files.getlist("files")
        array_images = []
        for file in files:
            filename = secure_filename(file.filename)
            try:
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
