type Step = {
  id: string,
  name: string,
  getValidationFields: (formState?: any) => string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: 'Informations Personnelles',
    getValidationFields: (_) => (['firstName', 'lastName', 'dateOfBirth', 'identityCardNumber', 'studentNumber', 'city', 'region', 'phoneNumber', 'guardianFullName', 'guardianPhoneNumber', 'relationshipWithGuardian', 'healthInformations'])
  },
  {
    id: 'Étape 2',
    name: 'Éducation',
    getValidationFields: (_) => ['educationLevel', 'highschool', 'averageGrade', 'ranking', 'mathAverageGrade', 'mathRanking']
  },
  {
    id: 'Étape 3',
    name: 'Motivations',
    getValidationFields: (formState) => {
      console.log('formState', formState)
      const hasPreviousMathMarocParticipations = formState?.hasPreviousMathMarocParticipations === 'yes'
      const hasPreviousExperiences = formState?.hasPreviousExperiences === 'yes'

      return [
        'motivations', 
        'hasPreviousMathMarocParticipations', 
        ...(hasPreviousMathMarocParticipations ? ['previousMathMarocParticipations'] : []),
        'hasPreviousExperiences',
        ...(hasPreviousExperiences ? ['previousExperiences'] : []),
        'comments'
      ]
    }
  },
  {
    id: 'Étape 4',
    name: 'Uploads',
    getValidationFields: (_) => ['fileCnieUrl', 'fileSchoolCertificateUrl', 'fileGradesUrl', 'fileRegulationsUrl', 'fileParentalAuthorizationUrl']
  },
  { id: 'Étape 5', 
    name: 'Validation',
    getValidationFields: (_) => ['termsAgreement']
  }
];

export { PersonalInformationStep } from './personal-information-step'
export { EducationStep } from './education-step'
export { MotivationStep } from "./motivation-step"
export { UploadStep } from './upload-step'
export { ValidationStep } from './validation-step'

