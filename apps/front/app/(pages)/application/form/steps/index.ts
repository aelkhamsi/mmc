type Step = {
  id: string,
  name: string,
  getValidationFields: (formState?: any) => string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: 'Informations Personnelles',
    getValidationFields: (_) => (['firstName', 'lastName', 'dateOfBirth', 'identityCardNumber', 'city', 'region', 'phoneNumber', 'emergencyContactFullName', 'emergencyContactPhoneNumber', 'emergencyContactRelationship'])
  },
  {
    id: 'Étape 2',
    name: 'Éducation',
    getValidationFields: (_) => ['educationLevel', 'universityType', 'universityName', 'educationField']
  },
  {
    id: 'Étape 3',
    name: 'Motivations',
    getValidationFields: (formState) => {
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
    getValidationFields: (formState) => {
      const isFileUploaded = (key: string) => !!formState?.[`${key}Url`]
      return [
        !isFileUploaded('fileCnie') ? 'fileCnie' : '',
        !isFileUploaded('fileSchoolCertificate') ? 'fileSchoolCertificate' : '',
        !isFileUploaded('fileGrades') ? 'fileGrades' : '',
        !isFileUploaded('fileRegulations') ? 'fileRegulations' : '',
      ]
    }
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

