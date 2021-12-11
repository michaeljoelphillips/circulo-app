export type BenefitsStatus = 'ELIGIBLE' | 'INELIGIBLE';

export type Patient = {
  ssn: string;
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: string;
  benefitsEligibility: BenefitsStatus;
};
