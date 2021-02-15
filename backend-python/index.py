from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import typing
from flask_cors import CORS
from images import api_images
from accidentes import api_accidente

app = Flask(__name__)
app.config["CLIENT_IMAGES"] = "./images"  # files folder
app.register_blueprint(api_images)
app.register_blueprint(api_accidente)
CORS(app)

#MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder_images():
    if os.path.exists(os.getcwd() + "/images") != True:
        os.makedirs(os.getcwd() + "/images")

#MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder_accidentes():
    if os.path.exists(os.getcwd() + "/imagenes-accidentes") != True:
        os.makedirs(os.getcwd() + "/imagenes-accidentes")

@app.route('/')
def index():
    return "¡Hello!"

if __name__ == "__main__":
    app.run(debug=True, port=5000, threaded=True, host="0.0.0.0")
