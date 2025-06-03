import CtaSection from "@/app/components/cta/cta-section"
import ConferencesSection from "./conferences-section"
import TextureBg from "@/app/components/texture-bg"

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
    <TextureBg className="bg-[#fff9f3]">
      <div className="w-full flex flex-col items-center max-w-sm md:max-w-screen-2xl px-5 xl:px-0 space-y-20 mb-20">
        <h1 className="text-center text-4xl font-bold drop-shadow-sm">
          <span className='bg-gradient-to-br from-sky-600 to-[#1C55FF] inline-block text-transparent bg-clip-text'>Conférences</span>
        </h1>

        <ConferencesSection />

        <CtaSection />
      </div>
    </TextureBg>
  )
}