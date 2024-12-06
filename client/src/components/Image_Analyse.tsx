import React, { useState, useRef } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';

const Image_Analyse: React.FC = () => {
  const theme = useTheme();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null); // Reference to the video element
  const [stream, setStream] = useState<MediaStream | null>(null); // To hold the media stream

  const openCamera = async () => {
    try {
      // Request camera access
      const userMediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      // Set the stream to the state and attach it to the video element
      if (videoRef.current) {
        videoRef.current.srcObject = userMediaStream;
      }

      setStream(userMediaStream);
      setIsCameraOpen(true);
    } catch (error) {
      console.error('Error accessing camera: ', error);
      alert('Could not access camera.');
    }
  };

  const closeCamera = () => {
    if (stream) {
      // Stop all video tracks to release the camera
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      setIsCameraOpen(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Fresh Page
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: theme.spacing(4) }}>
        This is a new blank page ready for your ideas.
      </Typography>

      {!isCameraOpen ? (
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'none',
            padding: theme.spacing(1.5, 4),
          }}
          onClick={openCamera} // Open the camera on button click
        >
          Explore
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            textTransform: 'none',
            padding: theme.spacing(1.5, 4),
          }}
          onClick={closeCamera} // Close the camera
        >
          Close Camera
        </Button>
      )}

      {/* Show the video stream when the camera is open */}
      {isCameraOpen && (
        <Box
          sx={{
            marginTop: theme.spacing(4),
            width: '100%',
            maxWidth: '500px',
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: 3,
            padding: theme.spacing(1),
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              width: '100%',
              borderRadius: '8px',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Image_Analyse;
