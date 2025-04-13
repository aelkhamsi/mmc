import DivCircuitBg from "@/app/components/div-circuit-bg"
import { videos } from "./videos"
import CtaButton from "./cta-button"

export default function BestMathVideoVotePage() {

  return (
    <DivCircuitBg classNameBgImage="opacity-50 -z-[8]">
      <div className="flex flex-col items-center w-full lg:w-3/4 px-5 lg:px-0 space-y-14 mb-20">
        <div className="space-y-10">
          <h1 className="text-center text-4xl font-bold drop-shadow-sm">
            <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>
              Votez pour votre vidéo préférée!
            </span>
          </h1>

          <div
            className="w-full lg:text-xl flex justify-center"
          >
            <div className="lg:w-3/4 text-center space-y-4">
              <div>
                🗳️ Venez participer à la phase de <span className="font-bold">vote public</span> pour élire votre vidéo préférée parmi les 8 finalistes du concours <span className="font-bold">“Best Mathematical Video”</span>.
              </div>
              
              <div>
                📽️ Réalisées par des élèves du <span className="font-bold">primaire</span>, du <span className="font-bold">collège</span> et du <span className="font-bold">lycée</span>, ces vidéos mettent en lumière la beauté des mathématiques avec créativité.
              </div>
              
              <div>
                🏆 Un prix spécial sera décerné à la vidéo ayant obtenu le plus de votes. <br/>
                Le vote est ouvert jusqu&apos;au <span className="font-bold">15 Avril</span>. Un seul vote est autorisé par personne.
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-3 gap-4 text-base"
          >
            {videos.map(video => (
              <div 
                className="w-full flex flex-col justify-between space-y-4 px-6 py-4 bg-[#F9FAFB] rounded-3xl shadow-sm border-[1px] border-gray-100"
              >
                <div className="space-y-4">
                  <div className="text-center text-gray-600">
                    Vidéo {video.identifier}
                  </div>

                  <h1 className='text-center font-bold text-xl'>{video.title}</h1>
                </div>
                
                <iframe className="block w-full" width="400" height="162" src={video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-10">
            <CtaButton
              className='py-4 px-12'
              label="Lien de vote"
              href='https://docs.google.com/forms/d/e/1FAIpQLSeZ6gpxBz4N-3nfcIhVkGUyXZn83pccZ9xJBx_Xu3e3-0MFGg/viewform?usp=preview'
              target='_blank'
            />
          </div>

        </div>
      </div>
    </DivCircuitBg>
  )
}