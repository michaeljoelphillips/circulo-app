import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SSN_REGEX = /^\d{3}-?\d{2}-?\d{4}$/;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [ssn, setSSN] = useState<string>('');

  const isInputValid = () => {
    return SSN_REGEX.test(ssn);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSSN(event.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/patient', {
      state: { id: ssn }
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <TextField
        id="ssn"
        error={!isInputValid() && ssn.length > 0}
        label="Patient SSN"
        variant="outlined"
        onChange={handleChange}
        sx={{
          marginRight: '10px',
        }}
      />

      <Button
        disabled={!isInputValid()}
        variant="contained"
        onClick={handleClick}
      >
        Search
      </Button>
    </Box>
  );
};

export default HomePage;
