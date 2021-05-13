from flask import Flask
import os
from flask_cors import CORS
from images import api_images
from accidentes import api_accidente
from danos_edificios import dano_edificios
from contratos_empleados import contratos_empleados

app = Flask(__name__)

app.config["CLIENT_IMAGES"] = "./images"  # files folder
app.register_blueprint(api_images, url_prefix='/flask')
app.register_blueprint(api_accidente, url_prefix='/flask')
app.register_blueprint(dano_edificios, url_prefix='/flask')
app.register_blueprint(contratos_empleados, url_prefix='/flask')


CORS(app, resources={r"/*": {"origins": "*"}})

# MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE


@app.before_first_request
def create_folder_images():
    if os.path.exists(os.getcwd() + "/images") != True:
        os.makedirs(os.getcwd() + "/images")

# MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder_accidentes():
    if os.path.exists(os.getcwd() + "/imagenes-accidentes") != True:
        os.makedirs(os.getcwd() + "/imagenes-accidentes")


# MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder_dano_edificios():
    if os.path.exists(os.getcwd() + "/imagenes-daños-edificios") != True:
        os.makedirs(os.getcwd() + "/imagenes-daños-edificios")

# MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder_dano_edificios():
    if os.path.exists(os.getcwd() + "/archivos-contratos") != True:
        os.makedirs(os.getcwd() + "/archivos-contratos")


@app.route('/')
def index():
    return "¡Hello!"


if __name__ == "__main__":
    app.run(debug=True, port=5000, threaded=True, host="0.0.0.0")
