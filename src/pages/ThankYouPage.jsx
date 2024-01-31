import React from 'react';
import { Typography, Paper } from '@mui/material';

const ThankYouPage = ({ formData }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', borderRadius: '25px' }}>
      <Typography variant="h5" gutterBottom>
        Thank you for your response!
      </Typography>
      <Typography variant="body1">
        Here are the details you provided:
      </Typography>
      <ul>
        {Object.entries(formData).map(([field, value]) => (
          <li key={field}>
            <strong>{field}:</strong> {value}
          </li>
        ))}
      </ul>
    </Paper>
  );
};

export default ThankYouPage;
