from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from PIL import Image
import typing
from flask_cors import CORS
from bson.objectid import ObjectId


app = Flask(__name__)
CORS(app)
app.config["CLIENT_IMAGES"] = "./images"  # files folder

#CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder():
    if os.path.exists(os.getcwd() + "/images") != True:
        os.makedirs(os.getcwd() + "/images")

@app.route('/upload', methods=["POST"])
def upload_image():
    if request.method == 'POST':
        file = request.files['file']
        if file.filename == '':
             return jsonify({
                "message": "Select a file",
                "upload": False
            })
        filename = secure_filename(file.filename)
        filename_finally = ""
        try:
            file.save(os.path.join(app.config['CLIENT_IMAGES'], filename))
            filename = secure_filename(file.filename)
            image = Image.open(os.path.join(app.config['CLIENT_IMAGES'], filename), mode="r")
            image.thumbnail(image.size)

            # Guardamos la imagen con un id unico
            filename_finally = f'{ObjectId()}.{str(image.format).lower()}'
            image.save(os.path.join(app.config['CLIENT_IMAGES'], filename_finally), optimize=True, quality=95)

            # Eliminamos el archivo anterior
            if os.path.exists(os.path.join(app.config['CLIENT_IMAGES'], filename)):
                os.remove(os.path.join(app.config['CLIENT_IMAGES'], filename))

        except FileNotFoundError:
            return jsonify({
                "message": "Error, folder does not exist",
                "upload": False,
                "filename": ""
            })
        return jsonify({
            "message": "success",
            "upload": True,
            "filename": filename_finally
        })


@app.route('/images/<string:filename>')
def get_images(filename):
    image_name = str(filename)
    return send_from_directory(directory=os.path.join(app.config['CLIENT_IMAGES']), filename=image_name, as_attachment=False, )

@app.route('/')
def index():
    return "¡Hello!"

if __name__ == "__main__":
    app.run(debug=True, port=5000, threaded=True, host="0.0.0.0")
