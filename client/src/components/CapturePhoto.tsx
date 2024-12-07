import React, { useRef, useState } from 'react';
import ReactWebcam from 'react-webcam';
import { Button, Box, Typography, CircularProgress } from '@mui/material';

const CapturePhoto: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setAnalysisResult(null);
    setError(null);
  };

  // Handle camera access
  const handleCameraAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (err) {
      setError("Kamera konnte nicht geöffnet werden. Stellen Sie sicher, dass Sie die Berechtigungen erteilt haben.");
    }
  };

  // Handle image file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  React.useEffect(() => {
    handleCameraAccess();
  }, []);

  const uploadImage = async () => {
    if (!capturedImage) return;

    setUploading(true);

    // Hier schickst du das Bild an dein Backend
    const formData = new FormData();
    formData.append('image', capturedImage);

    try {
      const response = await fetch('https://dein-backend-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setAnalysisResult(result.analysis);  // Ergebnis der Analyse
      } else {
        throw new Error('Fehler beim Hochladen des Bildes');
      }
    } catch (error) {
      setError('Fehler beim Hochladen des Bildes');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Capture or Upload a Photo</Typography>

      {error && <Typography color="error" variant="body2">{error}</Typography>}

      {/* Webcam anzeigen */}
      <ReactWebcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
        videoConstraints={{
          facingMode: 'user',
        }}
      />

      {/* Foto aufnehmen */}
      <Button
        variant="contained"
        color="primary"
        onClick={capture}
        sx={{ marginTop: 2 }}
      >
        Capture
      </Button>

      {/* Datei hochladen */}
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Image
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </Box>

      {/* Zeige das aufgenommene oder hochgeladene Bild */}
      {capturedImage && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Captured/Uploaded Image:</Typography>
          <img src={capturedImage} alt="Captured" width="100%" />
          <Button
            variant="outlined"
            color="secondary"
            onClick={resetCapture}
            sx={{ marginTop: 2 }}
          >
            Take Another Photo or Upload Another Image
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={uploadImage}
            sx={{ marginTop: 2 }}
            disabled={uploading}
          >
            {uploading ? <CircularProgress size={24} color="inherit" /> : 'Upload & Analyze'}
          </Button>
        </Box>
      )}

      {analysisResult && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Analysis Result:</Typography>
          <Typography>{analysisResult}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CapturePhoto;
