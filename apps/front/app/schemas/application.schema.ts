import { isValidPhoneNumber } from "react-phone-number-input";
import { ZodSchema, z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png','image/jpeg','image/jpg', 'image/png','image/webp', 'application/pdf'];
const zodFileValidation = z.any()
  .refine(files => files?.length == 1, 'Ce fichier est obligatoire.')
  .refine(files => files ? ACCEPTED_FILE_TYPES.includes(files[0]?.type) : true, { message: 'Please choose PNG, JPEG or PDF format files only' })
  .refine(files => files ? files[0]?.size <= MAX_UPLOAD_SIZE : true, 'File size must be less than 3MB')

export const applicationSchema: ZodSchema = z.object({
  /* Personal Informations */
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  dateOfBirth: z.date({ required_error: "La date de naissance est obligatoire." }),
  identityCardNumber: z.string().optional(),
  studentNumber: z.string().min(1).max(50),
  city: z.string().min(1).max(50),
  region: z.string().nonempty("Choisissez une option"),
  phoneNumber: z.string().refine(isValidPhoneNumber, { message: "Numéro de téléphone invalide" }),

  guardianFullName: z.string().min(1).max(50),
  guardianPhoneNumber: z.string().refine(isValidPhoneNumber, { message: "Numéro de téléphone invalide" }),
  relationshipWithGuardian: z.string().min(1).max(50),
  healthInformations: z.string().optional().refine((val) => {
    if (val) {
      return val.split(' ').length <= 100
    }
    return true;
  } , { message: "Maximum 100 mots"}),

  /* Education */
  educationLevel: z.string().nonempty("Choisissez une option"),
  highschool: z.string().min(1).max(50),
  averageGrade: z.string().min(1).max(50),
  ranking: z.string().min(1).max(50),
  mathAverageGrade: z.string().min(1).max(50),
  mathRanking: z.string().min(1).max(50),

  /* Motivation */
  motivations: z.string().min(1).refine(async text => text.split(' ').length <= 300, { message: "Maximum 300 mots", }),
  hasPreviousMathMarocParticipations: z.enum(["yes", "no"], { message: "Choisissez une option" }),
  previousMathMarocParticipations: z.string().optional(),
  hasPreviousExperiences: z.enum(["yes", "no"], { message: "Choisissez une option" }),
  previousExperiences: z.string().optional(),
  comments: z.string().optional().refine((val) => {
    if (val) {
      return val.split(' ').length <= 100
    }
    return true;
  } , { message: "Maximum 100 mots"}),

  /* Uploads */
  
  fileCnieUrl: zodFileValidation,
  fileSchoolCertificateUrl: zodFileValidation,
  fileGradesUrl: zodFileValidation,
  fileRegulationsUrl: zodFileValidation,
  fileParentalAuthorizationUrl: zodFileValidation,


  /* Terms of agreement */
  termsAgreement: z.boolean().default(false).refine(value => value === true, { message: "Vous devez accepter les Conditions Générales."}),
})

export const applicationDefaultValues = {
  /* Personal Informations */
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  identityCardNumber: '',
  studentNumber: '', 
  city: '',
  region: '',
  phoneNumber: '',

  guardianFullName: '',
  guardianPhoneNumber: '',
  relationshipWithGuardian: '', 
  healthInformations: '', 

  /* Education */
  educationField: '',
  highschool: '',
  averageGrade: '', 
  ranking: '',
  mathAverageGrade: '',
  mathRanking: '',

  /* Motivation */
  motivations: '',
  hasPreviousMathMarocParticipations: '',
  previousMathMarocParticipations: '', 
  hasPreviousExperiences: '',
  previousExperiences: '',
  comments: '',

  /* Uploads */
  
  fileCnieUrl: undefined,
  fileSchoolCertificateUrl: undefined, 
  fileGradesUrl: undefined,
  fileRegulationsUrl: undefined,
  fileParentalAuthorizationUrl: undefined,


  /* Terms of agreement */
  termsAgreement: false,
}