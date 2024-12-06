import React from 'react';
import { Dialog, DialogTitle, DialogContent, Button, IconButton, Typography, Divider, useTheme, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ExerciseDialogProps {
  open: boolean;
  onClose: () => void;
  selectedExercise: any;
}

const ExerciseDialog: React.FC<ExerciseDialogProps> = ({ open, onClose, selectedExercise }) => {
  const theme = useTheme(); // Hole das aktuelle Thema (Light/Dark Mode)

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '16px',
          padding: '20px',
          backgroundColor: theme.palette.background.paper, // Dynamische Hintergrundfarbe basierend auf dem Thema
          position: 'relative', // Positionierung des Dialogs relativ für den Schließen-Button
        },
      }}
    >
      {/* Schließen-Button ganz oben rechts */}
      <IconButton
        edge="start"
        color="inherit"
        onClick={onClose}
        aria-label="close"
        sx={{
          position: 'absolute', // Der Button wird absolut über allem platziert
          top: 0, // Direkt an den oberen Rand
          right: 0, // Direkt an den rechten Rand
          color: theme.palette.text.primary,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Bedingte Anzeige des Bilds */}
      {selectedExercise?.data?.image && (
        <Box
          sx={{
            width: '100%',
            height: '250px',
            overflow: 'hidden',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            marginBottom: '20px',
            background: `url(${selectedExercise?.data?.image}) no-repeat center center`,
            backgroundSize: 'cover',
          }}
        />
      )}

      {/* DialogTitle */}
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: selectedExercise?.data?.image ? '0' : '20px', // Wenn ein Bild vorhanden ist, keine zusätzliche Verschiebung
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
          {selectedExercise?.data?.name}
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
          <strong>Description:</strong> {selectedExercise?.data?.description}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
          <strong>Difficulty:</strong> {selectedExercise?.data?.difficulty} {renderDifficultyLabel(selectedExercise?.data?.difficulty)}
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
          <strong>Prerequisites:</strong>
        </Typography>
        <ul style={{ marginLeft: '20px', color: theme.palette.text.secondary }}>
          {selectedExercise?.data?.prerequisites && Array.isArray(selectedExercise?.data?.prerequisites) && selectedExercise.data.prerequisites.length > 0 ? (
            selectedExercise?.data?.prerequisites.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))
          ) : (
            <li>No prerequisites available</li>
          )}
        </ul>

        <Divider sx={{ marginY: 2 }} />

        <Button
          variant="contained"
          color="primary"
          href={selectedExercise?.data?.youtubeLink}
          target="_blank"
          sx={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: theme.palette.warning.main, // Dynamische Buttonfarbe basierend auf dem Thema
            '&:hover': {
              backgroundColor: theme.palette.warning.main, // Hover Effekt für den Button
            },
            fontWeight: 'bold',
            textTransform: 'none',
          }}
        >
          Watch YouTube Tutorial
        </Button>
      </DialogContent>
    </Dialog>
  );
};

// Hilfsfunktion zur Darstellung des Schwierigkeitsgrads als Textlabel
const renderDifficultyLabel = (difficulty: number) => {
  let label = '';
  let color = '#D3D3D3'; // Standardfarbe

  switch (difficulty) {
    case 1:
    case 2:
      label = 'Very Easy';
      color = '#4CAF50'; // Grün
      break;
    case 3:
    case 4:
      label = 'Easy';
      color = '#8BC34A'; // Hellgrün
      break;
    case 5:
    case 6:
      label = 'Medium';
      color = '#FFC107'; // Gelb
      break;
    case 7:
    case 8:
      label = 'Hard';
      color = '#FF5722'; // Orange
      break;
    case 9:
    case 10:
      label = 'Very Hard';
      color = '#F44336'; // Rot
      break;
    default:
      label = 'Unknown';
  }

  return (
    <Typography
      component="span"
      sx={{
        color,
        fontWeight: 'bold',
        marginLeft: '10px',
      }}
    >
      {label}
    </Typography>
  );
};

export default ExerciseDialog;
