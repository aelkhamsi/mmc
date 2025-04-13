import { isOverEighteen } from '@mdm/utils';
import { ActivityChoiceValues } from './activity-choice-step';

type Step = {
  id: string,
  name: string,
  getFields: (formState: any) => string[],
}

export const steps: Step[] = [
  {
    id: 'Étape 1',
    name: 'Informations Personnelles',
    getFields: (formState: any) => {
      const dob = formState?.dateOfBirth
      const isAdult = isOverEighteen(dob)
      return [
        ...(!isAdult ? ['guardianFullName', 'guardianPhoneNumber', 'relationshipWithGuardian'] : []),
        ...(isAdult ? ['identityCardNumber'] : []),
        ...['firstName', 'lastName', 'dateOfBirth', 'city', 'region', 'phoneNumber']
      ]
    }
  },
  {
    id: 'Étape 2',
    name: "Choix des activités",
    getFields: () => ['activityChoices'],
  },
  {
    id: 'Étape 3',
    name: 'Éducation',
    getFields: (formState: any) => {
      const isMathSprint = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.MATH_SPRINT) ? true : false
      const isBestMathVideo = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.BEST_MATH_VIDEO) ? true : false

      return [
        ...(isMathSprint ? ['averageGrade', 'ranking', 'mathAverageGrade', 'mathRanking', 'numberOfStudentsInClass'] : []),
        ...(isMathSprint || isBestMathVideo ? ['educationLevel', 'educationField', 'highschool'] : [])
      ]
    }
  },
  {
    id: 'Étape 4',
    name: 'Motivations',
    getFields: (formState: any) => {
      const isMathSprint = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.MATH_SPRINT) ? true : false
      const isBestMathVideo = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.BEST_MATH_VIDEO) ? true : false
      const isStand = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.STAND) ? true : false

      return [
        ...(isMathSprint ? ['hasPreviouslyParticipated', 'previousCompetitions'] : []), 
        ...(isBestMathVideo ? ['videoTitle', 'videoLink', 'videoSubject', 'videoMotivations', 'videoRessources'] : []),
        ...(isStand ? ['standSubjectTitle', 'standSubjectDetails', 'standMembers'] : []),
        ...(isMathSprint || isBestMathVideo || isStand ? ['motivations', 'comments'] : []),
      ]
    }
  },
  {
    id: 'Étape 5',
    name: 'Uploads',
    getFields: (formState: any) => {
      const isMathSprint = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.MATH_SPRINT) ? true : false
      const isBestMathVideo = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.BEST_MATH_VIDEO) ? true : false
      const isStand = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.STAND) ? true : false
      const isVisitor = formState?.activityChoices?.find((choice: string) => choice === ActivityChoiceValues.VISITOR) ? true : false
      const isAdult = isOverEighteen(formState?.dateOfBirth)
      const isFileUploaded = (key: string) => !!formState?.[`${key}Url`]

      const mathSprintFields = isMathSprint ? [
        !isFileUploaded('fileCnie') ? 'fileCnie' : '',
        !isFileUploaded('fileGrades') ? 'fileGrades' : '', 
        ...(!isAdult ? [!isFileUploaded('fileParentalAuthorization') ? 'fileParentalAuthorization' : ''] : [])
      ] : []
      
      const bestMathVideoFields = isBestMathVideo ? [
        !isFileUploaded('fileCnie') ? 'fileCnie' : '', 
        ...(!isAdult ? [!isFileUploaded('fileParentalAuthorization') ? 'fileParentalAuthorization' : ''] : [])
      ] : []

      const standFields = isStand ? [
        !isFileUploaded('fileMembersCnie') ? 'fileMembersCnie' : ''
      ] : []

      const visitorFields = isVisitor ? [
        ...(!isAdult ? [!isFileUploaded('fileParentalAuthorization') ? 'fileParentalAuthorization' : ''] : [])
      ] : []

      return [
        ...mathSprintFields,
        ...bestMathVideoFields,
        ...standFields,
        ...visitorFields,
      ]
    }
  },
  { id: 'Étape 6', 
    name: 'Validation',
    getFields: () => ['termsAgreement']
  }
];

export { PersonalInformationStep } from './personal-information-step'
export { EducationStep } from './education-step'
export { MotivationStep } from "./motivation-step"
export { UploadStep } from './upload-step'
export { ValidationStep } from './validation-step'

