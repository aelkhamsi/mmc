import { Card } from '@/app/components/card';
import CtaButton from '../cta/cta-button';

const ThirdSection = () => {
  return (
    <>
      {/* Transition border */}
      <div className="relative w-full flex justify-between -mt-11 h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#000102]"></div>
        <div className="flex justify-between mx-auto w-full px-[1.6rem] sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 0,0 100,100" fill="#000102" />
            <polygon points="100,0 0,0 100,100" fill="#FFFFFF" />
          </svg>

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,0 0,100" fill="#FFFFFF" />
            <polygon points="100,100 100,0 0,100" fill="#000102" />
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#000102]"></div>
      </div>

      {/* Content */}
      <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-14 bg-[#000102] text-white space-y-10'>
        <h1 className='text-3xl text-center font-bold font-neco'>
          Comment y participer ?
        </h1>

        <div
          className="flex flex-col space-y-10 md:flex-row md:space-y-0 w-full lg:w-3/4 my-4"
        >
          <div className='w-full text-center'>
            <span className="inline-block border border-white px-4 py-2 rounded-full text-2xl">
              1
            </span>

            <div className='text-center p-6 text-lg'>
              Remplir le formulaire d&apos;inscription
            </div>

            <div className='text-center p-6'>
              Vous devez remplir le formulaire d&apos;inscription suivant avant le <span className='font-bold'>23 mai 2025</span>
            </div>

            <CtaButton label="Formulaire d'inscription"/>
          </div>

          <div className='w-full text-center'>
            <span className="inline-block border border-white px-4 py-2 rounded-full text-2xl">
              2
            </span>

            <div className='text-center p-6 text-lg'>
              Passer le test de sélection
            </div>

            <div className='text-center p-6'>
              Après le <span className='font-bold'>23 mai 2025</span>, les personnes inscrites seront contactées par mail pour passer un test de sélection
            </div>

            <Card href='selection'>
              Test de sélection
            </Card>
          </div>
        </div>
      </div>

      {/* Transition border */}
      <div className="relative w-full flex justify-between h-11">
        <div className="mr-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#000102] z-10"></div>
        <div className="flex justify-between mx-auto w-full px-[1.6rem] sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 100,0 0,100" fill="#000102" /> 
            <polygon points="100,100 100,0 0,100" fill="#FFF" />
          </svg>
          
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,100 0,0 100,100" fill="#FFF" />
            <polygon points="100,0 0,0 100,100" fill="#000102" />
          </svg>
        </div>
        <div className="ml-[calc(-1*(theme(spacing.8)-theme(spacing[1.5])))] h-11 flex-auto bg-[#000102]"></div>
      </div>
    </>
  )
}

export default ThirdSection
