import Link from "next/link";
import { AnimatedTooltip } from '@/app/components/animated-tooltip';
import { brandDesign, organizingCommittee, webDevelopment } from "@/app/(pages)/(static)/organizing-team/data";

const FourthSection = () => {
  const members = [...organizingCommittee, ...brandDesign, ...webDevelopment]
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, 9)
    .map((member, index) => ({id: index, image: member?.imageSrc, name: member?.name}))

  return (
    <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-12 px-2 space-y-6'>
      <h1 className='text-3xl font-bold font-pally text-[#FF4925] bg-[#fff9f3] px-14 py-6 rounded-full'>
        Qui sommes-nous ?
      </h1>

      <div className='max-w-screen-md text-center my-6 xl:p-0'>
        Nous sommes avant tout des gens passionnés par la science, et unis par l'envie de partager et de former les leaders de demain.
        Notre vision est celle d'un Maroc où chaque jeune a l'opportunité de réaliser son plein potentiel grâce à une éducation de qualité
      </div>

      {/* <div 
        className="relative overflow-hidden flex flex-col justify-center"  
      >
        <ImageSlider
          images={getSlideshowImages()}
          direction="left"
          speed="normal"
          className='grayscale-[20%]'
        />
      </div> */}

      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={members} />
      </div>

      <Link
        href='organizing-team'
      >
        <button
          className="p-[3px] relative text-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C55FF] to-cyan-600 rounded-lg" />
          <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
            Découvrir l&apos;équipe organisatrice
          </div>
        </button>
      </Link>
    </div>
  )
}

export default FourthSection
