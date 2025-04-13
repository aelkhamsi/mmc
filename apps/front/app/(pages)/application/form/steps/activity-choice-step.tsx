import { motion } from 'framer-motion'
import { UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@mdm/ui"
import { Separator } from '@mdm/ui'
import { Checkbox } from '@mdm/ui'

export enum ActivityChoiceValues {
  MATH_SPRINT = 'math_sprint',
  BEST_MATH_VIDEO = 'best_math_video',
  STAND = 'stand',
  VISITOR = 'visitor'
}

export const choices = [
  {
    value: ActivityChoiceValues.MATH_SPRINT,
    label: "🏁 Math Sprint",
    type: "Compétition",
    color: 'orange-700',
    target: 'Élèves collège/lycée',
    disabled: true,
  },
  {
    value: ActivityChoiceValues.BEST_MATH_VIDEO,
    label: "📽️ Best mathematical video",
    type: "Compétition",
    color: 'orange-700',
    target: 'Élèves primaire/collège/lycée',
    disabled: true,
  },
  {
    value: ActivityChoiceValues.STAND,
    label: "🎤 Présenter en Stand",
    type: "Organisation",
    color: 'blue-700',
    target: 'Étudiants universitaires',
    disabled: true,
  },
  {
    value: ActivityChoiceValues.VISITOR,
    label: "🏖️ Visiteur (conférences et stands)",
    type: "Visite",
    color: 'green-700',
    target: 'Ouvert pour tous',
    disabled: false,
  },
] as const

export const ActivityChoiceStep = ({
  delta,
  form,
  applicationStatus
}:{
  delta: number,
  form: UseFormReturn,
  applicationStatus: string
}) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className='text-base font-semibold leading-7 text-[#0284C7]'>
        Choix des activités
      </h2>
      <p className='mt-1 text-sm leading-6 text-gray-600'>
        Choisissez les activités/compétitions auxquelles vous voulez participer
        <Separator className='mt-4 mb-8 bg-[#0284C7]'/>
      </p>

      <FormField
        control={form.control}
        name="activityChoices"
        render={() => (
          <>
            <FormItem className='flex flex-wrap justify-center space-y-0 gap-x-4 '>
              {choices.map((choice) => (
                <FormField
                  key={choice.value}
                  control={form.control}
                  name="activityChoices"
                  render={({ field }) => {
                    const checked = !choice.disabled || applicationStatus === 'PENDING'
                      ? field.value?.includes(choice.value)
                      : false

                    return (
                      <FormItem
                        key={choice.value}
                        className="text-center"                        
                      >
                        <FormLabel className={`font-normal text-sm hover:cursor-pointer ${choice.disabled ? 'opacity-50' : ''}`}>
                          <div className={`text-left text-[11px] font-semibold text-${choice.color}`}>
                            {choice.type}
                          </div>
                          <div className={`flex items-center justify-center p-4 bg-gray-50 border-[1px] w-[10rem] h-[8rem] hover:border-blue-300`}>
                            {choice.label} {choice.disabled ? '(Inscription terminée)' : ''}
                          </div>
                          <div className='text-left text-xs text-gray-600'>
                            {choice.target}
                          </div>
                        </FormLabel>

                        <FormControl>
                          <Checkbox
                            checked={checked}
                            disabled={choice.disabled}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, choice.value])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== choice.value
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </FormItem>
            
            <FormMessage className='text-center mt-2 text-xs'/>
          </>
        )}
      />
    </motion.div>
  )
}