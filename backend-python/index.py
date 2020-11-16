from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from PIL import Image
import typing


app = Flask(__name__)
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
            return 'Select a file'
        filename = secure_filename(file.filename)
        try:
            file.save(os.path.join(app.config['CLIENT_IMAGES'], filename))
            filename = secure_filename(file.filename)
            image = Image.open(os.getcwd() + "/images" +
                               "/" + filename, mode="r")
            image.thumbnail(image.size)
            image.save(filename, optimize=True, quality=95)
        except FileNotFoundError:
            return jsonify({
                "message": "Error, folder does not exist",
                "upload": False
            })
        return jsonify({
            "message": "success",
            "upload": True
        })


@app.route('/images/<string:filename>')
def get_images(filename):
    image_name = str(filename)
    return send_from_directory(directory=os.path.join(app.config['CLIENT_IMAGES']), filename=image_name, as_attachment=False, )

if __name__ == "__main__":
    app.run(debug=True, port=5000, threaded=True, host="0.0.0.0")
