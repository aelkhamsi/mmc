import { z } from 'zod'
import { applicationSchema } from "@/app/schemas/application.schema"
import { computeSHA256, generateFileName, getUploadFolderName } from '@/app/lib/utils';
import { User } from '@mdm/types';
import { getSignedURL, uploadFile } from '@/app/api/MediaApi';
import { putApplication } from '@/app/api/ApplicationApi';

export const useFileUpload = () => {
  const getFiles = (
    formData: z.infer<typeof applicationSchema>
  ) => {
    const { fileCnie, fileSchoolCertificate, fileGrades, fileRegulations, fileParentalAuthorization } = formData;
    const uploadFileNames = ['cnie', 'members_cnie', 'grades', 'parental_authorization']
      .map(name => `${name}_${generateFileName()}`)
    const files = [fileCnie, fileSchoolCertificate, fileGrades, fileRegulations, fileParentalAuthorization]
      .map((files, index) => {
        if (files && files.length) {
          return new File(
            [files[0]], 
            uploadFileNames[index] + '.' + files[0]?.name.split('.').pop(),
            { type: files[0]?.type },
          )
        }
        
        return undefined
      })
    
    return files
  }

  const uploadFiles = async (
    files: (File|undefined)[], 
    user: User|undefined
  ) => {
    const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);

    for (const file of files) {
      if (file) {
        const checksum = await computeSHA256(file);
        const signedURLResponse = await getSignedURL(`upload_mmc_2025/${uploadFolderName}/${file.name}`, file.type, file.size, checksum) as any;
        await uploadFile(signedURLResponse?.url, file) as any;
      }
    }
  }

  const updateApplicationFiles = async (
    formData: z.infer<typeof applicationSchema>, 
    files: (File|undefined)[], 
    user: User|undefined
  ) => {
    const uploadFolderName = getUploadFolderName(user?.firstName, user?.lastName);

    await putApplication(formData?.id, {
      fileCnieUrl: files[0] ? `upload_mmc_2025/${uploadFolderName}/${files[0].name}` : (formData?.fileCnieUrl ?? null),
      fileSchoolCertificateUrl: files[1] ? `upload_mmc_2025/${uploadFolderName}/${files[1].name}` : (formData?.fileSchoolCertificate ?? null),
      fileGradesUrl: files[2] ? `upload_mmc_2025/${uploadFolderName}/${files[2].name}` : (formData?.fileGradesUrl ?? null),
      fileRegulationsUrl: files[3] ? `upload_mmc_2025/${uploadFolderName}/${files[3].name}` : (formData?.fileRegulationsUrl ?? null),
      fileParentalAuthorizationUrl: files[4] ? `upload_mmc_2025/${uploadFolderName}/${files[4].name}` : (formData?.fileParentalAuthorizationUrl ?? null),
    }) as any
  }

  return {
    getFiles,
    uploadFiles,
    updateApplicationFiles,
  }
}
