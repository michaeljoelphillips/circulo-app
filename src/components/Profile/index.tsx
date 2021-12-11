import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Patient } from '../../types';
import { Check } from '@mui/icons-material';
import EligibilityIndicator from '../EligibilityIndicator';

type PatientProfileProps = {
  patient: Patient;
};

const Profile: React.FC<PatientProfileProps> = ({ patient }) => {
  const isEligible = patient.benefitsEligibility === 'ELIGIBLE';

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Box>
          <Typography variant="h3">{ patient.firstName } { patient.lastName }</Typography>
          <Typography variant="subtitle2">{ patient.ssn }</Typography>
        </Box>

        <EligibilityIndicator status={patient.benefitsEligibility} />

        <Box>
          <Typography>
            { patient.firstName } is {!isEligible && 'not'} eligible for veteran benefits
          </Typography>
        </Box>

      </CardContent>
    </Card>
  );
};

export default Profile;
