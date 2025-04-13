import DivCircuitBg from "@/app/components/div-circuit-bg"
import { GlitterIcon, LightbulbIcon, PlayButtonIcon, StarShineIcon } from "@mdm/ui"
import CtaSection from "@/app/components/cta/cta-section"
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import CtaButton from "./vote/cta-button"

export default function BestMathVideoPage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="flex flex-col items-center w-full lg:w-3/4 px-5 lg:px-0 space-y-14 mb-20">
        <div className="space-y-8">
          <h1 className="text-center text-4xl font-bold drop-shadow-sm">
            <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>
              Best Mathematical Video
            </span>
          </h1>

          <div
            className="w-full flex flex-col text-center gap-4 lg:flex-row lg:justify-center lg:items-center lg:gap-8 text-xl"
          >
            <div>Le vote public est ouvert:</div>
            <div>
              <CtaButton
                className='py-4 px-12'
                label="Page de vote"
                href='/best-math-video/vote'
                target='_self'
              />
            </div>
          </div>

          <div
            className="w-full lg-w-3/4 text-xl text-center"
          >
            Les mathématiques sont partout autour de nous, souvent cachées dans les subtilités de la vie quotidienne. <br/> 
            Si vous êtes étudiants en <span className="font-bold">primaire, collège ou lycée</span>, nous vous invitons à devenir notre guide à travers ce monde captivant!
          </div>
        </div>
        
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 text-base"
        >
          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <PlayButtonIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Partagez votre passion</h1>
            <p className="text-center text-lg">Réalisez de <span className="font-bold text-[#557fff]">manière individuelle</span> une vidéo originale de <span className="font-bold text-[#557fff]">3 à 4 minutes maximum</span> où vous expliquerez un concept mathématique de votre choix.</p>
          </div>

          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <StarShineIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Choisissez un sujet fascinant</h1>
            <p className="text-center text-lg">Une notion de géométrie, une formule algébrique, une démonstration créative. Soyez imaginatifs et rendez ce concept accessible pour le public</p>
          </div>

          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <LightbulbIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Illustrez vos concepts</h1>
            
            <p className="text-center text-lg">
              Utilisez des exemples concrets, des animations, des illustrations ou des histoires pour rendre votre explication vivante et mémorable.
            </p>
          </div>

          <div className="w-full space-y-4 p-10 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <div className="flex justify-center">
              <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                <GlitterIcon className="h-8 w-8"/>
              </div>
            </div>

            <h1 className='text-center font-bold text-2xl'>Soyez créatifs</h1>
            <p className="text-center text-lg">
              Laissez libre court à votre créativité!
              Il s&apos;agit de vulgariser un concept mathématique de manière ludique et intéressante, pas de donner un cours.</p>
          </div>
        </div>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8 text-base"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>Consignes</p>
            <h2 className='font-bold text-3xl'>Quelques consignes</h2>
            <p>
              <ul className="list-disc ml-4 text-lg">
                <li>
                  Les langues autorisées sont la <span className="font-bold text-[#1C55FF]">Darija marocaine</span>, l&apos;<span className="font-bold text-[#1C55FF]">arabe</span>, le <span className="font-bold text-[#1C55FF]">français</span> et l&apos;<span className="font-bold text-[#1C55FF]">anglais</span>. Nous ne mesurons pas votre maîtrise de la langue, ainsi nous vous encourageons à utiliser la langue où vous êtes le plus à l&apos;aise.
                </li>
                <li>Toute vulgarisation simple de l&apos;histoire du concept seule <span className="font-bold">ne sera pas acceptée</span>. Nous vous invitons à expliquer les concepts par des démonstrations bien faites.</li>
                <li>La vidéo doit être uploadée en premier lieu sur youtube avec un titre sous la forme: <span className="font-bold">{"<Titre de la vidéo> | <Nom prénom> #MDM"}</span>, ensuite le lien doit être renseigné dans le formulaire d&apos;inscription.</li>
                <li>Les vidéos présélectionnées par notre jury seront soumises à un <span className="font-bold">vote public</span>.</li>
                <li>L&apos;usage de l&apos;IA en cas de besoin doit être modéré.</li>
              </ul>
            </p>
          </div>

          <div className="w-full flex flex-col space-y-4 xl:justify-between p-4">
            <div className="space-y-4">
              <p className='font-bold text-sm text-[#1C55FF]'>L&apos;évaluation</p>
              <h2 className='font-bold text-3xl'>Quels sont les critères d&apos;évaluation ?</h2>
              <p>
                <ul className="list-disc ml-4 text-lg">
                  <li>Exactitude du contenu mathématique</li>
                  <li>Clarté et fluidité</li>
                  <li>Présentation</li>
                  <li>Créativité</li>
                  <li>Engagement et interactivité</li>
                  <li>Élimination directe suite à l&apos;usage excessif d&apos;IA</li>
                </ul>
              </p>
            </div>

            <div className="space-y-4">
              <p className='font-bold text-sm text-[#1C55FF]'>Ressources</p>
              <div className="flex space-x-4 items-center">
                <h2 className='font-bold text-3xl'>Ressources et liens utiles</h2>
                <Link 
                  href='https://drive.google.com/file/d/1NQTSKHSDq14uSFtG-6naHjCdZ6vOW8K1/view?usp=sharing'
                  target="_blank" 
                  className="flex space-x-4 text-blue-500 hover:underline">
                  Lien <ExternalLink />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-3/4 space-y-6">
          <div className="text-7xl text-center">🏆</div>
          <div className="text-3xl font-bold text-center lg:w-3/4">
            Des récompenses attendent les vidéos les plus instructives et interactives !
          </div>
          <div className="text-xl text-center">
            Le visionnage des vidéos sélectionnées, l&apos;annonce des gagnants et la remise des prix auront lieu pendant la journée marocaine des mathématiques.<br/>
            Nous nous réjouissons de découvrir et d&apos;apprendre à vos côtés les merveilles des mathématiques!
          </div>
        </div>

        <CtaSection />
      </div>
    </DivCircuitBg>
  )
}