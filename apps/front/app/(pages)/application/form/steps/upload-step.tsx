import { motion } from 'framer-motion'
import { ControllerRenderProps, UseFormReturn } from 'react-hook-form'
import { Separator } from "@mdm/ui"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import Link from 'next/link';
import { FileInput } from '../components/file-input';

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const UploadStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number,
}) => {
  const initFileInput = (field: ControllerRenderProps, id: string) => {
    if (field?.value && field?.value.length) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(field?.value[0]);
      setTimeout(() => {
        const fileInputElement = document.querySelector(`#${id}`) as HTMLInputElement;
        fileInputElement.files = dataTransfer.files;
      }, 300)
    }
  }

  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Uploads
      </h2>

      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Fournissez les documents personnels de l&apos;élève
        <Separator className='mt-4 bg-[#0284C7]'/>
      </p>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
        {/* CNIE */}
        <FormField
          control={form.control}
          name="fileCnie"
          render={({ field }) => {
            initFileInput(field, "fileCnie")

            return (
              <FormItem>
                <FormLabel>Justificatif d&apos;identité du participant avec photo (carte d&apos;identité, passeport, carte d&apos;élève...) <RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileCnie" />
                </FormControl>
                <FormDescription>
                  <span className="text-blue-500">Remarque</span>: Le document doit de préference être la CNIE ou le passeport. Sinon, vous pouvez envoyer tout document contenant les informations de l&apos;élève avec sa photo; ou bien son acte de naissance accompagné de sa photo dans le même PDF.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* School Certificate */}
        <FormField
          control={form.control}
          name="fileSchoolCertificate"
          render={({ field }) => {
            initFileInput(field, "fileSchoolCertificate")

            return (
              <FormItem>
                <FormLabel>Certificat de scolarité pour l’année 2024-2025<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileSchoolCertificate" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* GRADES */}
        <FormField
          control={form.control}
          name="fileGrades"
          render={({ field }) => {
            initFileInput(field, "fileGrades")

            return (
              <FormItem>
                <FormLabel>Bulletin du premier semestre 2024-2025 (avec les notes du contrôle continu)<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileGrades" />
                </FormControl>
                <FormDescription>
                  <span className="text-blue-500">Remarque</span>: votre bulletin sera utilisé pour vérifier les notes que vous avez fournies précédemment.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* PARENTAL AUTHORIZATION */}
        <FormField
          control={form.control}
          name="fileParentalAuthorization"
          render={({ field }) => {
            initFileInput(field, "fileParentalAuthorization")

            return (
              <FormItem>
                <FormLabel>Autorisation parentale signée et légalisée par le tuteur légal (<Link className="text-blue-500 underline" href='#' target="_blank">fichier</Link>)<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileParentalAuthorization" />
                </FormControl>
                <FormDescription>
                    <span className="text-blue-500">Remarque</span>: il faut l&apos;imprimer, la signer à la main, la légaliser, puis la scanner; La légalisation est obligatoire.<span className="font-bold">la légalisation est obligatoire</span>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        {/* REGULATIONS */}
        <FormField
          control={form.control}
          name="fileRegulations"
          render={({ field }) => {
            initFileInput(field, "fileRegulations")

            return (
              <FormItem>
                <FormLabel>Règlement signé par l&apos;élève et le tuteur légal(<Link className="text-blue-500 underline" href='#' target="_blank">fichier</Link>)<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileRegulations" />
                </FormControl>
                <FormDescription>
                    <span className="text-blue-500">Remarque</span>: il faut l&apos;imprimer, la signer à la main, puis la scanner; Pas besoin de légaliser. <span className="font-bold">la légalisation est obligatoire</span>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>
    </motion.div>
  )
}