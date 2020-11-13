from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from PIL import Image
import typing


app = Flask(__name__)
app.config["CLIENT_IMAGES"] = "./images"  # files folder

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
            image = Image.open(os.getcwd() + "/images" + "/" +  filename, mode="r")
            image.thumbnail(image.size)
            image.save(filename, optimize=True,quality=30)
        except FileNotFoundError:
            return jsonify({
                "message": "Error, folder does not exist",
                "upload": False
            })
        return jsonify({
                "message": "success",
                "upload": True
            })


if __name__ == "__main__":
    app.run(debug=True)
