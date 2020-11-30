from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import typing
from flask_cors import CORS
from images import api_images


app = Flask(__name__)
CORS(app)
app.config["CLIENT_IMAGES"] = "./images"  # files folder
app.register_blueprint(api_images)

#MIDDLEWARE QUE CREA EL FOLDER IMAGES SI NO EXISTE
@app.before_first_request
def create_folder():
    if os.path.exists(os.getcwd() + "/images") != True:
        os.makedirs(os.getcwd() + "/images")

@app.route('/')
def index():
    return "¡Hello!"

if __name__ == "__main__":
    app.run(debug=True, port=5000, threaded=True, host="0.0.0.0")
