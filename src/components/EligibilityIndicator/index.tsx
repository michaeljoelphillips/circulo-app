import { Check, Clear } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';

type EligibilityIndicatorProps = {
  status: 'ELIGIBLE' | 'INELIGIBLE';
};

const EligibilityIndicator: React.FC<EligibilityIndicatorProps> = ({ status }) => {
  const isEligible = status === 'ELIGIBLE';
  const Icon = isEligible ? Check : Clear;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        borderRadius: '50px',
        backgroundColor: isEligible ? 'green' : 'red',
        margin: '10px',
      }}
    >
      <Icon
        sx={{
          color: 'white',
        }}
      />
    </Box>
  );
};

export default EligibilityIndicator;
