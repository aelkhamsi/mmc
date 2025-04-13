import { motion } from 'framer-motion'
import { useFieldArray, UseFormReturn } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@mdm/ui"
import { Input } from '@mdm/ui'
import { Button } from '@mdm/ui'
import { Separator, Textarea } from "@mdm/ui"
import { RadioGroup, RadioGroupItem } from '@mdm/ui';
import { useActivityChoice } from 'app/(pages)/application/hooks/use-activity-choices';

const RequiredAsterisk = () => <span className="text-red-500"> * </span>;

export const MotivationStep = ({
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
    isStand
  } = useActivityChoice(form, applicationStatus);
  
  const { fields, append } = useFieldArray({
    name: "standMembers",
    control: form.control,
  })

  // urls: z
  //   .array(
  //     z.object({
  //       value: z.string().url({ message: "Please enter a valid URL." }),
  //     })
  //   )
  //   .optional(),

  // urls: [
  //   { value: "https://shadcn.com" },
  //   { value: "http://twitter.com/shadcn" },
  // ],

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

      {/* MATH SPRINT */}
      {isMathSprint && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            <span className='text-2xl'>🏁</span> Math Sprint
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
            {/* Has Previously Participated */}
            <FormField
              control={form.control}
              name="hasPreviouslyParticipated"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Avez-vous déjà participé à des compétitions (Olympiades, concours nationaux...)  <RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
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

            {/* Previous Participations */}
            <FormField
              control={form.control}
              name="previousCompetitions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Si oui, veuillez spécifier lesquelles et le résultat obtenu.</FormLabel>
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
          </div>
        </>
      )}

      {/* BEST MATH VIDEO */}
      {isBestMathVideo && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            <span className='text-2xl'>📽️</span> Best Math Video
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
            {/* Video Title */}
            <FormField
              control={form.control}
              name="videoTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre de la vidéo<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le titre de la vidéo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Video Link */}
            <FormField
              control={form.control}
              name="videoLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lien de la vidéo<RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le lien vers la vidéo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Video Subject */}
            <FormField
              control={form.control}
              name="videoSubject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parlez-nous brièvement du sujet que vous allez aborder <RequiredAsterisk /></FormLabel>
                  <FormControl>
                  <Textarea
                    placeholder="Max 300 mots"
                    className="resize-none"
                    {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Video Motivations */}
            <FormField
              control={form.control}
              name="videoMotivations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pourquoi avez-vous choisi ce sujet? <RequiredAsterisk /></FormLabel>
                  <FormControl>
                  <Textarea
                    placeholder="Max 300 mots"
                    className="resize-none"
                    {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Video Ressources */}
            <FormField
              control={form.control}
              name="videoRessources"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Citez les ressources que vous avez utilisées {'('}sites web, articles, logiciels, IA...{')'} <RequiredAsterisk /></FormLabel>
                  <FormControl>
                  <Textarea
                    placeholder="Max 300 mots"
                    className="resize-none"
                    {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </>
      )}

      {/* STAND */}
      {isStand && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            <span className='text-2xl'>🎤</span> Stand
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 justify-between'>
            {/* Stand Subject Title */}
            <FormField
              control={form.control}
              name="standSubjectTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quel est votre sujet? <RequiredAsterisk /></FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez le titre de votre sujet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Stand Subject Details */}
            <FormField
              control={form.control}
              name="standSubjectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Détaillez votre sujet <RequiredAsterisk /></FormLabel>
                  <FormControl>
                  <Textarea
                    placeholder="Max 300 mots"
                    className="resize-none"
                    {...field}
                  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Stand Members */}
            <div>
              <div className='mb-2'>
                <FormLabel>
                  Membres de l&apos;équipe
                </FormLabel>
                <FormDescription>
                  Ajouter les noms et prénoms de tous les membres de votre équipe
                </FormDescription>
              </div>
              
              {fields.map((field, index) => (
                  <div className='mb-2'>
                    <FormField
                      control={form.control}
                      key={field.id}
                      name={`standMembers.${index}`}
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
              ))}
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => append("")}
              >
                Ajouter un membre
              </Button>
            </div>
          </div>
        </>
      )}

      {/* MOTIVATIONS */}
      {(isMathSprint || isBestMathVideo || isStand) && (
        <>
          <h2 className='mt-6 text-sm font-semibold leading-5 text-black'>
            <span className='text-2xl'>🚀</span> Motivations
          </h2>
          <Separator className='mt-1 bg-black'/>

          <div className='mt-6 grid grid-cols-1 gap-4 justify-between'>
            {/* Motivations */}
            <FormField
              control={form.control}
              name="motivations"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parlez-nous de vos motivations à participer à cet événement <RequiredAsterisk /></FormLabel>
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
        </>
      )}
    </motion.div>
  )
}