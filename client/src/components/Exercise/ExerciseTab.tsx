import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { List, Box, Typography, useTheme } from '@mui/material';
import { skillTreeData } from '../../data/skillTreeData';
import { useNavigate } from 'react-router-dom';
import ExerciseDialog from './ExerciseDialog';
import ExerciseTabTop from './ExerciseTabTop';
import ExerciseListItem from './ExerciseListItem'; // Importiere die neue Komponente
import { SkillTreeNodeProps } from '../SkillTreeNode';

const ExercisesTab: React.FC = () => {
  const { id } = useParams();
  const [selectedExercise, setSelectedExercise] = useState<SkillTreeNodeProps | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const theme = useTheme();
  const location = useLocation();
  const passedExercise = location.state?.selectedExercise as SkillTreeNodeProps;

  useEffect(() => {
    if (passedExercise) {
      setSelectedExercise(passedExercise);
      setOpenDialog(true);
    } else if (id) {
      const exercise = skillTreeData.find((exercise) => exercise.id === id);
      if (exercise) {
        setSelectedExercise(exercise);
        setOpenDialog(true);
      } else {
        console.error('Keine Übung gefunden für die ID:', id);
      }
    } else {
      console.error('Weder Übung aus dem Zustand noch ID in der URL vorhanden');
    }
  }, [id, passedExercise]);

  const handleClick = (exercise: SkillTreeNodeProps) => {
    const exerciseWithData = { ...exercise, data: exercise };
    navigate('/exercises', { state: { selectedExercise: exerciseWithData } });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredExercises = skillTreeData
    .filter((exercise) => exercise.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const groupedExercises = alphabet.map((letter) => {
    return {
      letter,
      exercises: filteredExercises.filter((exercise) =>
        exercise.name.toUpperCase().startsWith(letter)
      ),
    };
  });

  return (
    <div className="p-4" style={{ display: 'flex' }}>
      {/* Links: Übungen */}
      <Box sx={{ flexGrow: 1, marginRight: 2 }}>
        <ExerciseTabTop searchQuery={searchQuery} onSearchChange={handleSearchChange} />

        <List>
          {groupedExercises.map((group) => (
            <Box key={group.letter} id={`section-${group.letter}`}>
              {group.exercises.length > 0 && (
                <Typography variant="h6" sx={{ marginTop: 2, color: theme.palette.text.primary }}>
                  {group.letter}
                </Typography>
              )}
              {group.exercises.map((exercise) => (
                <ExerciseListItem key={exercise.id} exercise={exercise} onClick={handleClick} />
              ))}
            </Box>
          ))}
        </List>
      </Box>

      {/* Rechts: Alphabetische Navigation */}
      <Box
        sx={{
          position: 'fixed',
          right: '4px',
          top: '80px',
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {alphabet.map((letter) => (
          <Box
            key={letter}
            sx={{
              padding: '1px 0',
              cursor: 'pointer',
              textAlign: 'center',
              color: theme.palette.warning.main,
              fontSize: '8px', // Optional: Schriftgröße anpassen
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }}
            onClick={() => {
              const section = document.getElementById(`section-${letter}`);
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              } else {
                const nextSection = groupedExercises.find((group) => group.exercises.length > 0 && group.letter > letter);
                if (nextSection) {
                  document.getElementById(`section-${nextSection.letter}`)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: '12px', whiteSpace: 'nowrap' }} // Entfernt die Drehung und passt die Schriftgröße an
            >
              {letter}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Exercise Dialog */}
      <ExerciseDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        selectedExercise={selectedExercise}
      />
    </div>
  );
};

export default ExercisesTab;
