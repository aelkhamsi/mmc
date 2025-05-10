import TextureBg from "@/app/components/texture-bg"
import PartnerCard from "./partner-card"

const organizers = [
  {
    key: 'math-and-maroc',
    label: 'Math&Maroc',
    imageHref: '/mm.png',
    imageHeight: '60px',
  },
]

const partners = [
  {
    key: 'adria',
    label: 'Adria ',
    imageHref: '/adria_official_partner.png',
    imageHeight: '90px',
  }
]

const hosts = [
  {
    key: 'lymed',
    label: 'LYMED',
    imageHref: '/lymed.png',
    imageHeight: '100px',
  }
]

const sponsors = [
  {
    key: 'evalmee',
    label: 'EVALMEE',
    imageHref: '/evalmee.png',
    imageHeight: '45px',
  },
  {
    key: 'evasan',
    label: 'EVASAN',
    imageHref: '/evasan.png',
    imageHeight: '45px',
  },
  {
    key: 'managem',
    label: 'MANAGEM',
    imageHref: '/managem.png',
    imageHeight: '90px',
  },
  {
    key: 'sidi_ali',
    label: 'SIDI ALI',
    imageHref: '/sidi_ali.png',
    imageHeight: '170px',
  },
]

export default function PartnersPage() {
  return (
    <TextureBg className="bg-[#fff9f3]">
      <div className="w-full max-w-sm md:max-w-7xl px-5 xl:px-0 mt-10 mb-20">
        <div className="space-y-6">
          <div>
            {/* ORGANISATEUR */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-pally text-[#FF4925]'>Organisateur</span>
              </h1>

              <div
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={organizers[0].key}
                  imageSrc={organizers[0].imageHref}
                  imageHeight={organizers[0].imageHeight}
                >
                  <div className="text-sm space-y-2">
                    <div><span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span> est une association à but non lucratif créée en 2016 par de jeunes Marocains souhaitant redonner à la collectivité.</div>
                    <div><span className="font-bold">Notre mission</span> est de promouvoir les mathématiques et les sciences au Maroc, et ainsi guider les jeunes vers l&apos;excellence.</div>
                    <div><span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span> organise <span className="font-bold">Summer Camp</span> depuis sa première édition en juillet 2024.</div>
                  </div>
                </PartnerCard>
              </div>
            </div>
          </div>

          <div className="flex justify-around flex-wrap">
            {/* PARTENAIRE OFFICIEL */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-pally text-[#FF4925]'>Partenaire Officiel</span>
              </h1>

              <div 
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={partners[0].key}
                  imageSrc={partners[0].imageHref}
                  imageHeight={partners[0].imageHeight}
                >
                  <div className="text-sm space-y-2">
                    <div><span className='mb-8 bg-gradient-to-br from-stone-500 to-[#FC5C00] text-transparent bg-clip-text font-semibold'>Adria Business and Technology</span> est un expert dans l&apos;édition et l&apos;intégration des logiciels destinés aux institutions financières.</div>
                    <div>Il s&apos;agit du <span className="font-semibold">partenaire officiel</span> de <span className='mb-8 bg-gradient-to-br from-sky-500 to-[#272162] text-transparent bg-clip-text font-semibold'>Math&Maroc</span>, qui a permis à la majorité de nos événements de voir le jour.</div>
                  </div>
                </PartnerCard>
              </div>
            </div>

            {/* En partenariat avec */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-pally text-[#FF4925]'>En partenariat avec</span>
              </h1>

              <div
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={hosts[0].key}
                  imageSrc={hosts[0].imageHref}
                  imageHeight={hosts[0].imageHeight}
                >
                  <div className="text-sm">
                    <div>Le <span className='mb-8 bg-gradient-to-br from-[#005598] to-sky-600 text-transparent bg-clip-text font-semibold'>Lycée Méditerranéen (LYMED)</span>, porté par la Fondation Tanger Med, s&apos;appuie fondamentalement sur la valeur d&apos;excellence, et a pour vocation de préparer les élèves marocains à fort potentiel aux concours d&apos;accès aux Grandes Écoles d&apos;Ingénieurs marocaines et françaises</div>
                  </div>
                </PartnerCard>
              </div>
            </div>
          </div>

          <div>
            {/* SPONSORS */}
            <div>
              <h1 
                className="animate-fade-up opacity-0 text-center text-3xl font-bold drop-shadow-sm"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <span className='font-pally text-[#FF4925]'>Sponsors</span>
              </h1>

              <div
                className="flex justify-around flex-wrap gap-6 p-8 rounded-lg animate-fade-up opacity-0"
                style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
              >
                <PartnerCard
                  key={sponsors[0].key}
                  imageSrc={sponsors[0].imageHref}
                  imageHeight={sponsors[0].imageHeight}
                >
                  <div><span className='mb-8 bg-gradient-to-br from-[#7cb9ff] to-[#3691FB] text-transparent bg-clip-text font-semibold'>Evalmee</span> est une plateforme d&apos;évaluation en ligne offrant des outils précis et personnalisés pour dévoiler et perfectionner les compétences. Découvrez une approche dynamique pour révéler le potentiel caché et atteindre l&apos;excellence professionnelle.</div>
                </PartnerCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TextureBg>
  )
}