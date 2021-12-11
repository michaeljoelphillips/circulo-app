import NewPatientForm from '../../components/NewPatientForm';
import Profile from '../../components/Profile';
import React, { useEffect, useState } from 'react';
import { Patient } from '../../types';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { findPatient } from '../../graphql/queries';

const PatientPage: React.FC = () => {
  const location = useLocation();
  const [patient, setPatient] = useState<Patient | null>(null);

  const id = location?.state?.id;
  const { loading, data } = useQuery(findPatient, {
    variables: { id },
    skip: !id,
  });

  useEffect(() => {
    if (loading || !data) {
      return;
    }

    setPatient(data.patient);
  }, [loading, data]);

  if (loading) {
    return null;
  }

  if (!patient) {
    return (
      <NewPatientForm ssn={id} onSubmit={setPatient} />
    );
  }

  return (
    <Profile patient={patient} />
  );
};

export default PatientPage;
