import Link from "next/link";
import CtaButton from '../cta/cta-button';
import { Button } from "@mdm/ui";

const FourthSection = () => {
  return (
    <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-12 px-2 space-y-6'>
      <h1 className='text-3xl text-center font-bold font-neco'>
        How to participate ?
      </h1>

      <div
        className="flex flex-col space-y-10 md:flex-row md:space-y-0 w-full lg:w-3/4 my-4"
      >
        <div className='w-full text-center'>
          <span className="inline-block border border-black px-4 py-2 rounded-full text-2xl">
            1
          </span>

          <div className='text-center p-6 text-lg font-semibold'>
            Submit your application
          </div>

          <div className='text-center p-6'>
            You have to fill and submit your application before  <span className='font-bold'>June 4th</span>
          </div>

          <CtaButton label="Application Form"/>
        </div>

        <div className='w-full text-center'>
          <span className="inline-block border border-black px-4 py-2 rounded-full text-2xl">
            2
          </span>

          <div className='text-center p-6 text-lg font-semibold'>
            Pass the Selection Test
          </div>

          <div className='text-center p-6'>
            After <span className='font-bold'>June 4th</span>, participants with complete applications will be required to take a selection test.
          </div>

          <Link href="selection">
            <Button className='w-fit bg-transparent text-black border border-black hover:text-white'>
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FourthSection
