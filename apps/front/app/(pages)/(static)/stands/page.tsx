import CtaSection from "@/app/components/cta/cta-section"
import TextureBg from "@/app/components/texture-bg"
import { AwardIcon, BoardGamesIcon, LightbulbIcon, Separator, StarShineIcon } from "@mdm/ui"

export default function StandsPage() {

  return (
    <TextureBg>
      <div className="flex flex-col items-center w-full lg:w-3/4 px-5 lg:px-0 space-y-14 mb-20">
        {/* TITLE */}
        <div className="space-y-4">
          <h1 className="text-center text-4xl font-bold drop-shadow-sm">
            <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>
              Stands
            </span>
          </h1>

          <div
            className="text-xl text-center"
          >
            À travers des stands interactifs et éducatifs, venez plonger dans le monde fascinant des mathématiques,<br/>
            ou même partager votre passion en animant un stand.
          </div>
        </div>

        {/* VISITORS SECTION */}
        <div className="text-left">
          <h2 className="text-3xl font-bold">Pour le public</h2>
          <Separator className="my-4 bg-[#1C55FF]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                  <StarShineIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold text-2xl'>Découvrez des concepts fascinants</h1>
              <p className="text-center text-xl">Chaque stand aborde un thème mathématique unique.</p>
            </div>

            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                  <BoardGamesIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold text-2xl'>Participez activement</h1>
              <p className="text-center text-xl">Engagez-vous dans des activités pratiques, des démonstrations en direct ou des jeux stimulants proposés par les animateurs.</p>
            </div>

            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                  <LightbulbIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold text-2xl'>Explorez les applications des maths</h1>
              <p className="text-center text-xl">De l&apos;intelligence artificielle aux solutions pour le développement du Maroc.</p>
            </div>

            <div className="w-full space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
              <div className="flex justify-center">
                <div className="w-fit p-[10px] bg-[#1C55FF] rounded-full">
                  <AwardIcon className="h-8 w-8"/>
                </div>
              </div>

              <h1 className='text-center font-bold text-2xl'>Votez pour votre stand préféré</h1>
              <p className="text-center text-xl">Prenez part à l&apos;évaluation en désignant le stand qui vous aura le plus impressionné</p>
            </div>
          </div>
        </div>

        {/* ANIMATORS SECTION */}
        <div className="text-left w-full">
          <h2 className="text-3xl font-bold">Pour les animateurs</h2>
          <Separator className="my-4 bg-[#1C55FF]" />

          <div>
            Si vous êtes:
            <ol className="list-decimal ml-6">
              <li className="marker:text-[#1C55FF] marker:text-2xl">Membre d&apos;un club, d&apos;une association ou représentant d&apos;une entreprise passionnée par les mathématiques</li>
              <li className="marker:text-[#1C55FF] marker:text-2xl">Vous souhaitez partager vos idées innovantes et vulgariser des concepts mathématiques auprès d&apos;un public diversifié</li>
            </ol>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-center mt-8 text-gray-800">
              MDM vous offre une opportunité exceptionnelle pour animer votre propre stand mathématique
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 -my-4 text-lg">
          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold text-[#1C55FF]">Rendez-le immersif et interactif</h2>
            <p>Utilisez des démonstrations en direct, des expériences ou des jeux pour expliquer un concept mathématique de manière captivante</p>
          </div>

          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold text-[#1C55FF]">Inspirez-vous des applications réelles</h2>
            <p>Reliez votre présentation à des exemples concrets ou des problématiques liées au développement du Maroc, comme l&apos;optimisation des ressources, la gestion des données ou les modèles de prévision économique.</p>
          </div>

          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold text-[#1C55FF]">Mettez en scène vos explications</h2>
            <p>Servez-vous d&apos;éléments visuels (maquettes, affiches, écrans interactifs).</p>
          </div>

          <div className="text-center space-y-4 p-8 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100">
            <h2 className="text-2xl font-bold text-[#1C55FF]">Le vote du public présent</h2>
            <p>
              Chaque participant pourra voter pour le stand qui l&apos;a le plus marqué.<br/>
              Un <span className="font-bold">prix sera décerné au meilleur stand</span>
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <CtaSection />
      </div>
    </TextureBg>
  )
}