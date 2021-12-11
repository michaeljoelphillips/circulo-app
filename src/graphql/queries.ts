import { gql } from '@apollo/client';

export const findPatient = gql`
  query FindPatient($id: String!) {
    patient(id: $id) {
      ssn
      firstName
      lastName
      birthDate
      benefitsEligibility
    }
  }
`;

export const addPatient = gql`
  mutation AddPatient($patient: AddPatientInput!) {
    addPatient(input: $patient) {
      ssn
      firstName
      lastName
      birthDate
      benefitsEligibility
    }
  }
`;
