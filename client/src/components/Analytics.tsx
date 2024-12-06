import React from 'react';
import { Box, Typography, Button, useTheme, Grid, Paper } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics: React.FC = () => {
  const theme = useTheme(); // Access the theme

  // Updated chart data with material tracking
  const data = {
    labels: ['Wood', 'Metal', 'Plastic'],
    datasets: [
      {
        data: [30, 20, 50], // Wood 30%, Metal 20%, Plastic 50%
        backgroundColor: [
          theme.palette.success.main, // Green for wood
          theme.palette.primary.main, // Blue for metal
          theme.palette.warning.main, // Yellow for plastic
        ],
        borderColor: theme.palette.background.paper, // Border for each section
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(3),
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: theme.spacing(3) }}>
        Material Tracking
      </Typography>

      <Typography variant="body2" sx={{ color: theme.palette.text.secondary, marginBottom: theme.spacing(4), textAlign: 'center' }}>
        Monitor the materials you track and their sustainable impact.
      </Typography>

      {/* Chart Section */}
      <Box sx={{ width: 250, height: 250, marginBottom: theme.spacing(4) }}>
        <Doughnut data={data} options={{ responsive: true }} />
      </Box>

      {/* Metrics Section */}
      <Grid container spacing={2} sx={{ marginBottom: theme.spacing(4) }} justifyContent="center">
        <Grid item xs={4}>
          <Paper sx={{ padding: theme.spacing(2), textAlign: 'center', backgroundColor: theme.palette.background.paper, borderRadius: '12px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.success.main }}>
              30%
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Wood
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: theme.spacing(2), textAlign: 'center', backgroundColor: theme.palette.background.paper, borderRadius: '12px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              20%
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Metal
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: theme.spacing(2), textAlign: 'center', backgroundColor: theme.palette.background.paper, borderRadius: '12px' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: theme.palette.warning.main }}>
              50%
            </Typography>
            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
              Plastic
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: 'none',
          padding: theme.spacing(1.5, 4),
          borderRadius: theme.spacing(2),
          fontSize: '16px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        View Detailed Report
      </Button>
    </Box>
  );
};

export default Analytics;
