type Step = {
  id: string,
  name: string,
  fields: string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: 'Informations Personnelles',
    fields: ['firstName', 'lastName', 'dateOfBirth', 'identityCardNumber', 'studentNumber', 'city', 'region', 'phoneNumber', 'guardianFullName', 'guardianPhoneNumber', 'relationshipWithGuardian', 'healthInformations']
  },
  {
    id: 'Étape 2',
    name: 'Éducation',
    fields: ['educationLevel', 'highschool', 'averageGrade', 'ranking', 'mathAverageGrade', 'mathRanking']
  },
  {
    id: 'Étape 3',
    name: 'Motivations',
    fields: ['motivations', 'hasPreviousMathMarocParticipations', 'previousMathMarocParticipations', 'hasPreviousExperiences', 'previousExperiences', 'comments']
  },
  {
    id: 'Étape 4',
    name: 'Uploads',
    fields: ['fileCnieUrl', 'fileSchoolCertificateUrl', 'fileGradesUrl', 'fileRegulationsUrl', 'fileParentalAuthorizationUrl']
  },
  { id: 'Étape 5', 
    name: 'Validation',
    fields: ['termsAgreement']
  }
];

export { PersonalInformationStep } from './personal-information-step'
export { EducationStep } from './education-step'
export { MotivationStep } from "./motivation-step"
export { UploadStep } from './upload-step'
export { ValidationStep } from './validation-step'

