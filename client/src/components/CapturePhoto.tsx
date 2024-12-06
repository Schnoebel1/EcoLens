import React, { useRef, useState } from 'react';
import ReactWebcam from 'react-webcam';
import { Button, Box, Typography } from '@mui/material';

const CapturePhoto: React.FC = () => {
  const webcamRef = useRef<any>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const capture = () => {
    // Nimm ein Foto und setze es in den State
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc); // Setzt das aufgenommene Bild
  };

  const resetCapture = () => {
    // Setze das aufgenommene Bild zurück
    setCapturedImage(null);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Capture a Photo</Typography>

      {/* Webcam anzeigen */}
      <ReactWebcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="100%"
      />

      {/* Button zum Aufnehmen des Fotos */}
      <Button
        variant="contained"
        color="primary"
        onClick={capture}
        sx={{ marginTop: 2 }}
      >
        Capture
      </Button>

      {/* Zeige das aufgenommene Bild an */}
      {capturedImage && (
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6">Captured Image:</Typography>
          <img src={capturedImage} alt="Captured" width="100%" />
          {/* Button zum Zurücksetzen der Aufnahme */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={resetCapture}
            sx={{ marginTop: 2 }}
          >
            Take Another Photo
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CapturePhoto;
