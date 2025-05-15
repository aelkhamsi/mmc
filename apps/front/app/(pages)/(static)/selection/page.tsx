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
          <span className='font-neco text-[#FF4925]'>Selection Test</span>
        </h1>

        <div
          className="flex flex-col w-full md:flex-row md:justify-between md:space-x-8"
        >
          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>The selection</p>
            <h1 className='font-bold text-3xl'>How will the selection process work ?</h1>
            <p>For the 2025 edition, the selection will take place after June 4th, the application deadline.</p>

            <h2 className="font-bold">Online test</h2>
            <p>Each candidate will take a 90-minute online test on the secure platform Evalmee. The questions will be entirely based on the official syllabus, available for download on this page.</p>
            <p>To ensure the integrity of the selection, the webcam must remain activated throughout; therefore, ensure you have a reliable computer, a stable internet connection, and a quiet, well-lit workspace.</p>
            <p>Final results will be communicated individually by email.</p>

          </div>

          <div className="w-full space-y-4 p-4">
            <p className='font-bold text-sm text-[#1C55FF]'>The syllabus</p>
            <h1 className='font-bold text-3xl'>Test preparation</h1>
            
            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              To help you thoroughly prepare for the test, we have provided a clear and detailed syllabus outlining precisely the topics to revise. You will also find some practice problems to gently familiarize yourself with the test format. Feel free to start reviewing them now. Happy preparation, and most importantly, enjoy practicing!
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
                <div className="text-xs text-gray-500 mt-1">Available soon</div>
              </Link>
            </div>
          </div>
        </div>

        <CtaSection />
      </div>
    </TextureBg>
  )
}