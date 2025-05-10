import CtaSection from "@/app/components/cta/cta-section"
import TextureBg from "@/app/components/texture-bg"
import { ImageStack } from "@/app/components/image-stack"
import { DumbbellIcon, ExamIcon } from "@mdm/ui";
import Link from "next/link";

const images = [
  {
    name: 'MathSprint contest',
    src: '/past-edition/mathsprint_1.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/past-edition/mathsprint_2.webp'
  },
]

export default function MathSprintPage() {

  return (
    <TextureBg className="bg-[#fff9f3]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-10 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='font-pally text-[#FF4925]'>Test de séléction</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>La sélection</p>
            <h1 className='font-bold text-3xl'>Comment se passera la sélection ?</h1>
            <p>À la suite de votre candidature, vous serez invités à passer un test de sélection qui se déroulera sur la plateforme <span className="font-bold">Evalmee</span> le matin du dimanche <span className="font-bold">25 mai</span>.</p>
            <p>Ce test prendra la forme d&apos;un <span className="font-bold">questionnaire à choix multiples (QCM)</span> et portera sur divers concepts mathématiques.</p>
            <p>Il nous permettra d&apos;évaluer votre logique, votre capacité à résoudre des problèmes complexes et, plus généralement, votre niveau en mathématiques.</p>
            <p>Après ce test, les candidats ayant obtenu les meilleures notes seront convoqués pour des <span className="font-bold">entretiens individuels</span> en ligne. Ces entretiens constitueront une seconde phase de sélection permettant d&apos;évaluer plus en profondeur leurs compétences et leur adéquation avec nos attentes.</p>
          </div>

          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>Le syllabus</p>
            <h1 className='font-bold text-3xl'>Préparation au test</h1>
            
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              Le programme des cours concernés vous sera transmis très prochainement afin de vous permettre de vous préparer dans les meilleures conditions.
            </div>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link href=''>
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 bg-gray-200 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-not-allowed"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold text-gray-400">Syllabus</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Disponible prochainement</div>
              </Link>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
    </TextureBg>
  )
}