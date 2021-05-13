from flask import Blueprint, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from bson.objectid import ObjectId


contratos_empleados = Blueprint('contratos_empleados', __name__)

PATH_CONTRATO = "/archivos-contratos/"
PATH_FILE_CONTRATO = "./archivos-contratos"


@contratos_empleados.errorhandler(400)
def not_found(error=str):
    response = jsonify({
        "message": error,
        "status": 400
    })
    response.status_code = 400
    return response


@contratos_empleados.route('/upload/contrato/empleado', methods=["POST"])
def upload_image_contrato():
    if request.method == 'POST':
        # SI EL USUARIO NO MANDA EL ARCHIVO
        if 'file' not in request.files:
            return not_found(error="Image not found") 

        file = request.files['file']       
        print(file)

        if file.filename == '':
            return not_found(error="Select a file")

        filename = secure_filename(file.filename)
        filename_finally = f'{ObjectId()}{filename}'
        try:
            file.save(os.getcwd() + PATH_CONTRATO + filename_finally)

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


# DOWNLOAD FILE
@contratos_empleados.route('/download/contrato/empleado/<string:filename>')
def download_contrato(filename):
    image_name = str(filename)
    return send_from_directory(directory=os.path.join(PATH_FILE_CONTRATO), filename=image_name, as_attachment=True)


# REMOVE IMAGES
@contratos_empleados.route('/delete/contarto/empleado', methods=['POST'])
def remove_Contrato():
    filename = request.form['filename']
    try:
        os.remove(os.getcwd() + PATH_CONTRATO + filename)
    except OSError:
        return jsonify({
            "message": "Error, file does not exist",
        })
    return jsonify({
        "message": "success",
        "status": 200,
    })
