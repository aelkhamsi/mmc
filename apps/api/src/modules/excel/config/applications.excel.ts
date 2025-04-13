import { educationFields, educationLevels, regionLabels } from '../labels';

export const rowFactory = (applications: any[], configService) => {
  const awsBucketName = configService.get('AWS_BUCKET_NAME');
  const awsBucketRegion = configService.get('AWS_BUCKET_REGION');

  return applications.map((application: any) => ({
    id: application?.id,
    firstName: application?.user?.firstName,
    lastName: application?.user?.lastName,
    email: application?.user?.email,
    dateOfBirth: new Date(application?.dateOfBirth),
    identityCardNumber: application?.identityCardNumber,
    city: application?.city,
    region: regionLabels[application?.region],
    phoneNumber: application?.phoneNumber,
    guardianFullName: application?.guardianFullName,
    guardianPhoneNumber: application?.guardianPhoneNumber,
    relationshipWithGuardian: application?.relationshipWithGuardian,

    activityChoices:
      application?.activityChoices != '""'
        ? JSON.parse(application?.activityChoices)?.join(';')
        : '',

    educationLevel: educationLevels.find(
      (level) => level.value == application?.educationLevel,
    )?.label,
    educationField: educationFields.find(
      (field) => field.value == application?.educationField,
    )?.label,
    highschool: application?.highschool,
    averageGrade: application?.averageGrade,
    mathAverageGrade: application?.mathAverageGrade,
    ranking: application?.ranking,
    mathRanking: application?.mathRanking,
    numberOfStudentsInClass: application?.numberOfStudentsInClass,

    hasPreviouslyParticipated: application?.hasPreviouslyParticipated,
    previousCompetitions: application?.previousCompetitions,
    videoTitle: application?.videoTitle,
    videoLink: application?.videoLink,
    videoSubject: application?.videoSubject,
    videoMotivations: application?.videoMotivations,
    videoRessources: application?.videoRessources,
    standSubjectTitle: application?.standSubjectTitle,
    standSubjectDetails: application?.standSubjectDetails,
    standMembers:
      application?.standMembers != '""'
        ? JSON.parse(application?.standMembers)?.join(';')
        : '',
    motivations: application?.motivations,
    comments: application?.comments,

    fileCnie: {
      text: application?.fileCnieUrl ? 'link' : ' ',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.fileCnieUrl}`,
    },
    fileMembersCnie: {
      text: application?.fileMembersCnieUrl ? 'link' : ' ',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.fileMembersCnieUrl}`,
    },
    fileGrades: {
      text: application?.fileGradesUrl ? 'link' : ' ',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.fileGradesUrl}`,
    },
    fileParentalAuthorization: {
      text: application?.fileParentalAuthorizationUrl ? 'link' : ' ',
      hyperlink: `https://${awsBucketName}.s3.${awsBucketRegion}.amazonaws.com/${application?.fileParentalAuthorizationUrl}`,
    },

    status: application?.status?.status,
  }));
};
