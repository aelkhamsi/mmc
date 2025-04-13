import CtaSection from "@/app/components/cta/cta-section"
import DivCircuitBg from "@/app/components/div-circuit-bg"
import { ImageStack } from "@/app/components/image-stack"

const images = [
  {
    name: 'MathSprint contest',
    src: '/past-edition/mdm_1.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/past-edition/mdm_2.webp'
  },
]

export default function ConferencesPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-xl px-5 xl:px-0 space-y-20 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>Conférences</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <h1 className='font-bold text-3xl'>Des conférences pour nourrir les esprits mathématiques curieux</h1>
            <p className="text-lg">Plongez dans l'univers des mathématiques à travers une série de conférences captivantes animées par des experts renommés du domaine.</p>
            <p className="text-lg">Ces interventions offriront des perspectives inédites, des discussions profondes et des éclairages sur des sujets mathématiques variés, allant des théories classiques aux dernières avancées</p>
          </div>

          <div className="w-full -z-[6]">
            <ImageStack
              images={images}
              autoplay={true}
            />
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}