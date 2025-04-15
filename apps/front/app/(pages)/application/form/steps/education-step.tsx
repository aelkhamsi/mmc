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


const educationLevels = [
  {label: "Tronc commun", value:"tronc-commun"},
  {label: "3AC", value:"3ac"},
  {label: "2AC", value:"2ac"},
  {label: "1AC", value:"1ac"},
]

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const EducationStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number,
}) => {
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
                      {educationLevels.map(level =>
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
      </div>
    </motion.div>
  )
}