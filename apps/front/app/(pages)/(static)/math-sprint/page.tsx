import CtaSection from "@/app/components/cta/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"
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
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-10 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>Math Sprint</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-bold text-3xl'>Une compétition pour les esprits mathématiques affûtés</h1>
            
            <p className="text-lg">Math Sprint est une compétition individuelle destinée aux <span className="font-bold text-[#1C55FF]">collégiens</span> et <span className="font-bold text-[#1C55FF]">lycéens</span> passionnés de mathématiques.</p>
            
            <div>
              <p className="text-lg">Elle se déroule en <span className="text-[#1C55FF]">trois étapes</span>, avec des épreuves adaptées à chaque niveau:</p>
              <ul className="text-lg list-disc">
                <li>Une phase de sélection en ligne</li>
                <li>Une épreuve QCM d&apos;une heure lors de l'évenement MDM, avec des épreuves distinctes adaptées aux collégiens et aux lycéens</li>
                <li>Une épreuve finale à questions ouvertes réservée aux meilleurs de chaque catégorie</li>
              </ul>
            </div>
          </div>

          <div className="w-full -z-[6]">
            <ImageStack
              images={images}
              autoplay={true}
            />
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>La sélection</p>
            <h1 className='font-bold text-3xl'>Comment se passera la sélection ?</h1>
            <p className="text-lg">Avant de pouvoir participer à cette compétition, un test de sélection sera mené pour évaluer le niveau des potentiels participants</p>
            <p className="text-lg">Le test sera effectué sur une <span className="font-semibold text-gray-800">plateforme en ligne</span> sous la forme d'un QCM surveillé par caméra</p>
          </div>

          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>Le syllabus</p>
            <h1 className='font-bold text-3xl'>Quels sujets concernent l'épreuve ?</h1>
            
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Link href='https://drive.google.com/file/d/1oG592RsHhdLEnlkb1ibhtdFTMp8JGcfR/view?usp=sharing' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Syllabus Collège</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>

              <Link href='https://drive.google.com/file/d/1NEpyPsLgbNPHhAJM-IIoV2wlQ8st0kWT/view?usp=sharing' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Syllabus Lycée</span>
                    <ExamIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>

              <Link href='https://www.mathraining.be/' target="_blank">
                <div 
                  className="h-[8rem] w-[9rem] bg-white border-b-4 border-b-red-500 border-2 shadow-md flex justify-center items-center rounded-md hover:cursor-pointer"
                > 
                  <div className="flex flex-col items-center text-center">
                    <span className="font-bold">Entrainement</span>
                    <DumbbellIcon className="h-[4rem]"/>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}