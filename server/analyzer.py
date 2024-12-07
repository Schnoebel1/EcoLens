from flask import Flask, request, jsonify
from PIL import Image
from transformers import AutoModelForCausalLM, AutoProcessor  # Für Phi-3-Vision
from langchain_ollama import OllamaLLM  # Python-Paket für Ollama

app = Flask(__name__)

# Lade das Phi-3-Vision Modell und den Processor
PHI3_MODEL_ID = "microsoft/Phi-3-vision-128k-instruct"
phi3_processor = AutoProcessor.from_pretrained(PHI3_MODEL_ID, trust_remote_code =True)
phi3_model = AutoModelForCausalLM.from_pretrained(PHI3_MODEL_ID, trust_remote_code =True, _attn_implementation = 'eager')

# Ollama-Client initialisieren
llm = OllamaLLM(model="llama3.1:8b")

def analyze_image_with_phi3(image_path):
    """
    Analyse eines Bildes mit dem Phi-3-Vision Modell.
    """
    # Bild laden
    image = Image.open(image_path).convert("RGB")

    # Bild verarbeiten
    inputs = phi3_processor(images=image, text="Analyze this image.", return_tensors="pt")
    outputs = phi3_model.generate(**inputs)

    # Ausgabe des Modells dekodieren
    analysis_text = phi3_processor.decode(outputs[0], skip_special_tokens=True)
    return analysis_text

def analyze_text_with_ollama(text):
    """
    Analyse eines Textes mit Ollama.
    """
    prompt=f"Analyze the following description in detail: {text}"

    response = llm(prompt=prompt)
    return response["content"]

@app.route('/upload', methods=['POST'])
def upload_image():
    """
    Endpunkt zum Hochladen und Analysieren eines Bildes.
    """
    if 'image' not in request.files:
        return jsonify({"error": "No image provided"}), 400

    # Bild speichern
    image = request.files['image']
    image_path = 'uploaded_image.jpg'
    image.save(image_path)

    try:
        # Phi-3-Vision Analyse
        phi3_analysis = analyze_image_with_phi3(image_path)

        # Ollama Analyse
        llm_analysis = analyze_text_with_ollama(phi3_analysis)

        return jsonify({
            "phi3_analysis": phi3_analysis,
            "llm_analysis": llm_analysis
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
