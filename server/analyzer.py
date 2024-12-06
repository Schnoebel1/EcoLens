from flask import Flask, request, jsonify
from phi3_vision import analyze_image  # Hypothetische Bibliothek
from ollama import Ollama  # Ollama Integration (API-Client)

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image = request.files['image']
    image_path = 'uploaded_image.jpg'
    image.save(image_path)

    # Phi3 Vision Analyse durchführen
    analysis_text = analyze_image(image_path)

    # Ollama Analyse durchführen
    llm = Ollama()
    response = llm.ask(analysis_text)

    return jsonify({"analysis": response})

if __name__ == '__main__':
    app.run(debug=True)
