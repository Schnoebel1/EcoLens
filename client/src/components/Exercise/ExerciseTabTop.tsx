import React from 'react';
import { TextField, Box, InputAdornment, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ExerciseTabTopProps {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ExerciseTabTop: React.FC<ExerciseTabTopProps> = ({ searchQuery, onSearchChange }) => {
  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search"
        InputProps={{
          style: {
            borderRadius: '25px',
            paddingLeft: '20px',
          },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: theme.palette.text.primary }} />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: '25px',
            backgroundColor: theme.palette.background.paper,
          },
          '& .MuiInputBase-input': {
            padding: '10px',
            color: theme.palette.text.primary,
          },
        }}
      />
    </Box>
  );
};

export default ExerciseTabTop;
