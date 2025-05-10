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
                <FormLabel>CNIE (recto & verso) <RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileCnie" />
                </FormControl>
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

        {/* REGULATIONS */}
        <FormField
          control={form.control}
          name="fileRegulations"
          render={({ field }) => {
            initFileInput(field, "fileRegulations")

            return (
              <FormItem>
                <FormLabel>Règlement signé (<Link className="text-blue-500 underline" href='https://drive.google.com/file/d/14jqiEL7UmfPmz5ekbjpyowHtFUniETtq/view?usp=sharing' target="_blank">fichier</Link>)<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileRegulations" />
                </FormControl>
                <FormDescription>
                    <span className="text-blue-500">Remarque</span>: il faut l&apos;imprimer, la signer à la main, puis la scanner. <span className="font-bold">Pas besoin de légaliser</span>.
                </FormDescription>
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
                <FormLabel>Dernier bulletin obtenu<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <FileInput form={form} id="fileGrades" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />
      </div>
    </motion.div>
  )
}