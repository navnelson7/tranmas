from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os

api_accidente = Blueprint('api_accidente', __name__)

PATH_IMAGE = "/imagenes-accidentes/"

@api_accidente.route('/upload/mutiple/accidentes', methods=["POST"])
def upload_image():
    if request.method == 'POST':
        files = request.files.getlist("files")
        for file in files:
            filename = secure_filename(file.filename)
            try:
                working_directory = os.getcwd()
                file.save(working_directory + PATH_IMAGE + filename)
            except FileNotFoundError :
                return jsonify({
                "message": "Error, folder does not exist",
                "upload": False,
            })
        return jsonify({
                "message": "success",
                "upload": False,
            })