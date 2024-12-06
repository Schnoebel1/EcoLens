import React, { useRef, useState } from 'react';
import ReactWebcam from 'react-webcam';
import { Button, Box, Typography, CircularProgress } from '@mui/material';

const CapturePhoto: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const resetCapture = () => {
    setCapturedImage(null);
    setAnalysisResult(null);
  };

  // Handle camera access
  const handleCameraAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (err) {
      setError("Kamera konnte nicht geöffnet werden. Stellen Sie sicher, dass Sie die Berechtigungen erteilt haben.");
    }
  };

  React.useEffect(() => {
    handleCameraAccess();
  }, []);

  // Upload Bild an Backend für Analyse
  const uploadImage = async () => {
    if (!capturedImage) return;

    setIsUploading(true);
    try {
      const response = await fetch('https://your-backend-url.com/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: capturedImage }),
      });
      const data = await response.json();
      setAnalysisResult(data.analysis);
    } catch (error) {
      setError('Fehler beim Hochladen des Bildes.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Capture a Photo</Typography>

      {error && <Typography color="error" variant="body2">{error}</Typography>}

      <ReactWebcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={capture}
        sx={{ marginTop: 2 }}
      >
        Capture
      </Button>

      {capturedImage && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Captured Image:</Typography>
          <img src={capturedImage} alt="Captured" width="100%" />
          <Button
            variant="outlined"
            color="secondary"
            onClick={resetCapture}
            sx={{ marginTop: 2 }}
          >
            Take Another Photo
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={uploadImage}
            sx={{ marginTop: 2 }}
            disabled={isUploading}
          >
            {isUploading ? <CircularProgress size={24} /> : 'Upload and Analyze'}
          </Button>
        </Box>
      )}

      {analysisResult && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h5">Analysis Result:</Typography>
          <Typography variant="body1">{analysisResult}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default CapturePhoto;
