import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import { Separator, Textarea } from "@mdm/ui"
import { RadioGroup, RadioGroupItem } from '@mdm/ui';

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const MotivationStep = ({
  form,
  delta,
}:{
  form: UseFormReturn,
  delta: number,
}) => {
  const [hasPreviousMathMarocParticipations, setHasPreviousMathMarocParticipations] = useState(false)
  const [hasPreviousExperiences, setHasPreviousExperiences] = useState(false)

  useEffect(() => {
    const formState = form.watch()
    setHasPreviousMathMarocParticipations(formState?.hasPreviousMathMarocParticipations === 'yes')
    setHasPreviousExperiences(formState?.hasPreviousExperiences === 'yes')
  }, [])

  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Motivations
      </h2>

      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Fournissez des informations à propos de vos participations passées et vos motivations.
        <Separator className='mt-4 bg-[#0284C7]'/>
      </p>

      <div className='mt-6 grid grid-cols-1 gap-4 justify-between'>
        {/* Motivations */}
        <FormField
          control={form.control}
          name="motivations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quelles sont vos motivations à participer au Summer Camp<RequiredAsterisk /></FormLabel>
              <FormControl>
              <Textarea
                placeholder="Maximum 300 mots"
                className="resize-none"
                {...field}
              />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
        {/* Has Previous Math&Maroc Participations */}
        <FormField
          control={form.control}
          name="hasPreviousMathMarocParticipations"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Avez-vous déjà participé à des activités de Math&Maroc?<RequiredAsterisk /></FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    setHasPreviousMathMarocParticipations(value === 'yes')
                    if (value === 'no') {
                      form.setValue('previousMathMarocParticipations', '')
                      form.clearErrors('previousMathMarocParticipations')
                    }
                    field.onChange(value)}
                  }
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Oui
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Non
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Previous Math&Maroc Participations */}
        {hasPreviousMathMarocParticipations && 
          <FormField
            control={form.control}
            name="previousMathMarocParticipations"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Veuillez spécifier lesquelles et le résultat obtenu<RequiredAsterisk /></FormLabel>
                <FormControl>
                <Textarea
                  placeholder="Parlez-nous de vos accomplissements"
                  className="resize-none"
                  {...field}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        }
      </div>

      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
        {/* Has Previous Experiences */}
        <FormField
          control={form.control}
          name="hasPreviousExperiences"
          render={({ field }) => (
            <FormItem className="space-y-3">
              
              <FormLabel>Avez-vous participé à d&apos;autres compétitions ou vécu des expériences pertinentes pour cette candidature?<RequiredAsterisk /></FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={(value) => {
                    setHasPreviousExperiences(value === 'yes')
                    if (value === 'no') {
                      form.setValue('previousExperiences', '')
                      form.clearErrors('previousExperiences')
                    }
                    field.onChange(value)}
                  }
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Oui
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Non
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Previous Experiences */}
        {hasPreviousExperiences && 
          <FormField
            control={form.control}
            name="previousExperiences"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Veuillez spécifier lesquelles et le résultat obtenu<RequiredAsterisk /></FormLabel>
                <FormControl>
                <Textarea
                  placeholder="Parlez-nous de vos accomplissements"
                  className="resize-none"
                  {...field}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        }
      </div>

      <div className='mt-6 grid grid-cols-1 gap-4 justify-between'>
        {/* Comments */}
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Remarques / Commentaires</FormLabel>
              <FormControl>
              <Textarea
                placeholder="Quelque chose à ajouter ?"
                className="resize-none"
                {...field}
              />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  )
}