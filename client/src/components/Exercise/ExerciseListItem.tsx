import React from 'react';
import { ListItem, ListItemText, Box, Typography } from '@mui/material';
import { SkillTreeNodeProps } from '../SkillTreeNode';
import { useTheme } from '@mui/material/styles';

interface ExerciseListItemProps {
  exercise: SkillTreeNodeProps;
  onClick: (exercise: SkillTreeNodeProps) => void;
}

const ExerciseListItem: React.FC<ExerciseListItemProps> = ({ exercise, onClick }) => {
  const theme = useTheme();

  // Funktion zur Umwandlung der Schwierigkeit in Text und Farbe
  const getDifficultyLabelAndColor = (difficulty: number) => {
    if (difficulty <= 2) return { label: 'Very Easy', color: theme.palette.success.main };
    if (difficulty <= 4) return { label: 'Easy', color: theme.palette.info.main };
    if (difficulty <= 6) return { label: 'Medium', color: theme.palette.warning.main };
    if (difficulty <= 8) return { label: 'Hard', color: theme.palette.error.main };
    return { label: 'Very Hard', color: theme.palette.error.dark };
  };

  const { label, color } = getDifficultyLabelAndColor(exercise.difficulty);

  return (
    <div
      style={{
        borderBottom: '1px solid #ddd',
        marginBottom: '8px',
        padding: '10px 0',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <ListItem onClick={() => onClick(exercise)} component="div" sx={{ alignItems: 'flex-start' }}>
        {/* Bild der Übung oder der Anfangsbuchstabe bei fehlendem Bild */}
        <Box
          sx={{
            width: 60,
            height: 60,
            marginRight: 2,
            backgroundColor: exercise.image ? 'transparent' : theme.palette.grey[300], // Fallback-Hintergrund bei fehlendem Bild
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden', // Damit das Bild nicht überläuft
          }}
        >
          {exercise.image ? (
            <img
              src={exercise.image}
              alt={exercise.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ) : (
            <Typography
              variant="h6" // Statt h5 verwenden wir h6, um Konflikte zu vermeiden
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 'bold',
                textTransform: 'uppercase', // Anfangsbuchstabe als Großbuchstabe
              }}
            >
              {exercise.name.charAt(0)} {/* Nur der erste Buchstabe des Namens */}
            </Typography>
          )}
        </Box>

        <ListItemText
          primary={
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500, // Weniger fett
                color: theme.palette.text.primary,
              }}
            >
              {exercise.name}
            </Typography>
          }
          secondary={
            <>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary, // Leicht grau für "Difficulty:"
                }}
              >
                Difficulty:{' '}
                <span style={{ color: color, fontWeight: 600 }}>{label}</span>
              </Typography>
            </>
          }
        />
      </ListItem>
    </div>
  );
};

export default ExerciseListItem;
