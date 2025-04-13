import { ReactNode } from "react"

const DivCircuitBg = ({
  children,
  className,
  classNameBgImage,
}:{
  children: ReactNode,
  className?: string,
  classNameBgImage?: string
}) => {
  return (
    <div className={`w-full flex flex-col justify-center items-center py-6 ${className}`}>

      {/* Background Image */}
      <div className={`absolute inset-0 overflow-hidden ${classNameBgImage}`}>
        <div className='absolute top-6 right-1/2 aspect-[969/887] w-[969px]'>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-lines@2xr.0351fb9a.png" />
          </picture>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp" />
          </picture>
        </div>
        
        <div className='absolute top-6 right-1/2 origin-right -scale-x-100 aspect-[969/887] w-[969px]'>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-lines@2xr.0351fb9a.png" />
          </picture>
          <picture>
            <img className='absolute inset-0 h-full w-full' src="https://clerk.com/_next/static/media/circuit-components@2xl.288e1b6c.webp" />
          </picture>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-24">
        {children}
      </div>
    </div> 
  )
}

export default DivCircuitBg
