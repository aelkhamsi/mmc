import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import { Input, Separator } from "@mdm/ui"
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@mdm/ui"
import { useActivityChoice } from '../../hooks/use-activity-choices'

const educationLevelsPrimary = [
  {label: "CE6", value:"ce6"},
  {label: "CE5", value:"ce5"},
  {label: "CE4", value:"ce4"},
  {label: "CE3", value:"ce3"},
  {label: "CE2", value:"ce2"},
  {label: "CE1", value:"ce1"},
]
const educationLevelsSecondary = [
  {label: "3AC", value:"3ac"},
  {label: "2AC", value:"2ac"},
  {label: "1AC", value:"1ac"},
]
const educationLevelsHighschool = [
  {label: "2ème année Bac", value:"2bac"},
  {label: "1ère année Bac", value:"1bac"},
  {label: "Tronc commun", value:"tronc-commun"},
]

const educationFields = [
  {label: "TC sciences", value:"tc-sciences"},
  {label: "TC technologique", value:"tc-technologique"},
  {label: "1BAC Sciences Economiques et Gestion", value:"1bac-sciences-economiques-et-gestion"},
  {label: "1BAC Arts Appliqués", value:"1bac-arts-appliques"},
  {label: "1BAC Sciences Expérimentales", value:"1bac-sciences-experimentales"},
  {label: "1BAC Sciences Mathématiques", value:"1bac-sciences-mathematiques"},
  {label: "1BAC Sciences et Technologies Electriques", value:"1bac-sciences-et-technologies-electriques"},
  {label: "1BAC Sciences et Technologies Mécaniques", value:"1bac-sciences-et-technologies-mecaniques"},
  {label: "2BAC Sciences Economiques", value:"2bac-sciences-economiques"},
  {label: "2BAC Sciences de Gestion et Comptabilité", value:"2bac-sciences-de-gestion-et-comptabilite"},
  {label: "2BAC Arts Appliqués", value:"2bac-arts-appliques "},
  {label: "2BAC Sciences de la Vie et de la Terre", value:"2bac-sciences-de-la-vie-et-de-la-terre"},
  {label: "2BAC Sciences Physique Chimie", value:"2bac-sciences-physique-chimie"},
  {label: "2BAC Sciences Agronomiques", value:"2bac-sciences-agronomiques"},
  {label: "2BAC Sciences Mathématiques A", value:"2bac-sciences-mathematiques-a"},
  {label: "2BAC Sciences Mathématiques B", value:"2bac-sciences-mathematiques-b"},
  {label: "2BAC Sciences et Technologies Electrique", value:"2bac-sciences-et-technologies-electrique"},
  {label: "2BAC Sciences et Technologies Mécanique", value:"2bac-sciences-et-technologies-mecanique"},
  {label: "Autre", value:"autre"},
]

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const EducationStep = ({
  form,
  delta,
  applicationStatus
}:{
  form: UseFormReturn,
  delta: number,
  applicationStatus: string
}) => {
  const {
    isMathSprint,
    isBestMathVideo,
  } = useActivityChoice(form, applicationStatus);

  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Éducation
      </h2>
      <Separator className='my-6 bg-[#0284C7]'/>

      {(isMathSprint || isBestMathVideo) && (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
          {/* Education Level */}
          <FormField
            control={form.control}
            name="educationLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Niveau d&apos;étude <RequiredAsterisk /></FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      <SelectGroup>
                        <SelectLabel>Lycée <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                        {educationLevelsHighschool.map(level =>
                          <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                        )}
                        <SelectLabel>Collège <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                        {educationLevelsSecondary.map(level =>
                          <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                        )}
                        <SelectLabel>Primaire <Separator className='mt-2 bg-gray-300' /></SelectLabel>
                        {educationLevelsPrimary.map(level =>
                          <SelectItem key={level.value} value={level.value}>{level.label}</SelectItem>
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select> 
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Education Field */}
          <FormField
            control={form.control}
            name="educationField"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Filière d&apos;étude<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an option" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      <SelectGroup>
                        <SelectLabel>Filière</SelectLabel>
                        {educationFields.map(field =>
                          <SelectItem key={field.value} value={field.value}>{field.label}</SelectItem>
                        )}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Highschool */}
          <FormField
            control={form.control}
            name="highschool"
            render={({ field }) => (
              <FormItem>
                <FormLabel>École / Établissement<RequiredAsterisk /></FormLabel>
                <FormControl>
                  <Input placeholder="Highschool" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      )}

      {isMathSprint && (
        <>
          <h2 className='text-base font-semibold leading-7 text-[#0284C7] mt-6'>
            Notes
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Fournir les notes du <span className='font-semibold'>premier semestre de l&apos;année scolaire courante 2024/2025</span>
            <Separator className='mt-4 bg-[#0284C7]'/>
          </p>

          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between'>
            {/* Guardian Full Name */}
            <FormField
              control={form.control}
              name="averageGrade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Moyenne générale<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre moyenne générale" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name="ranking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Classement général<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre classement général" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name="mathAverageGrade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Moyenne de mathématiques<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre moyenne de mathématiques" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name="mathRanking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Classement en mathématiques<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre classement en mathématiques" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    
            <FormField
              control={form.control}
              name="numberOfStudentsInClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre d&apos;élèves dans la classe<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le nombre d&apos;élèves dans votre classe" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </>
      )}
    </motion.div>
  )
}