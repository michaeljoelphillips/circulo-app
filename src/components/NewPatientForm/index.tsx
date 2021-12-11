import { useMutation } from '@apollo/client';
import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { addPatient, findPatient } from '../../graphql/queries';
import { Patient } from '../../types';

type NewPatientFormProps = {
  ssn: string | null;
  onSubmit: (patient: Patient) => void;
};

type PatientForm = {
  elements: {
    ssn: HTMLInputElement;
    firstName: HTMLInputElement;
    middleName: HTMLInputElement;
    lastName: HTMLInputElement;
    birthDate: HTMLInputElement;
  } & HTMLFormControlsCollection;
} & HTMLFormElement;

const NewPatientForm: React.FC<NewPatientFormProps> = ({ ssn, onSubmit }) => {
  const [mutation, { data }] = useMutation(addPatient, {
    refetchQueries: [
      findPatient,
    ],
  });

  useEffect(() => {
    if (!data?.addPatient) {
      return;
    }

    onSubmit(data.addPatient);
  }, [data, onSubmit]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<PatientForm>) => {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    mutation({
      variables: {
        patient: {
          ssn: elements.ssn.value,
          firstName: elements.firstName.value,
          middleName: elements.middleName.value,
          lastName: elements.lastName.value,
          birthDate: elements.birthDate.value,
        }
      },
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box>
        <Typography>More information is required to confirm veteran benefits</Typography>
      </Box>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '20px',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        onSubmit={handleSubmit}
      >
        <TextField required id="ssn" label="Social Security Number" variant="outlined" value={ssn}/>
        <TextField required id="firstName" label="First Name" variant="outlined" />
        <TextField required id="middleName" label="Middle Name" variant="outlined" />
        <TextField required id="lastName" label="Last Name" variant="outlined" />
        <TextField required InputLabelProps={{ shrink: true }} type="date" id="birthDate" label="Birth Date" variant="outlined" />

        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </Box>
  );
};

export default NewPatientForm;
