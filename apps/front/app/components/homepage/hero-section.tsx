import React from 'react'
import TextureBg from '../texture-bg'
import Link from 'next/link'
import Image from 'next/image'
import CtaButton from '../cta/cta-button'
import FaqButton from '../cta/faq-button'
import { BookIcon, CalendarMDMIcon, LocationIcon } from '@mdm/ui'

const HeroSection = () => {
  return (
    <TextureBg 
      className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d38e31]/[.3] via-[#F8CC9D]/[.0] to-cyan-200/[.3]'
    > 
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center max-w-2xl space-y-8">
        {/* Logo */}
        <div 
          className="animate-fade-up opacity-0 z-10 p-4 md:p-0"
          style={{ animationDelay: "0.20s", animationFillMode: "forwards" }}
        >
          <Image
            src="/summercamp.png"
            alt="MDM logo"
            width='300'
            height='150'
          />
        </div>

        <div className='space-y-2'>
          <h1
            className="animate-fade-up opacity-0 text-center font-display text-4xl font-bold tracking-[0.05em] text-wrap:balance md:text-5xl md:leading-[3rem]"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <span className='bg-gradient-to-b from-[#462660] to-[#292660] inline-block text-transparent bg-clip-text'>
              Une semaine en immersion dans l&apos;univers des mathématiques
            </span>
          </h1>
        </div>

        <div className='flex flex-col items-start space-y-2 gap-x-8 md:flex-row md:justify-center md:space-y-0'>
          <div className='flex items-center justify-center w-auto md:w-1/3 space-x-2'>
            <CalendarMDMIcon className='h-12'/>
            <div className="text-sm font-semibold text-[#272162]">du 20 au 27 juillet 2025</div>
          </div>

          <div className='flex items-center justify-center w-auto md:w-1/3 space-x-2'>
            <BookIcon className='h-12' />
            <div className="text-sm font-semibold text-[#272162]">Élèves du Collège ou Tronc Commun</div>
          </div>

          <div className='flex items-center justify-center w-auto md:w-1/3 space-x-2'>
            <LocationIcon className='h-12' />
            <div className="text-sm font-semibold text-[#272162] text-center">Lycée Méditerranéen (LYMED), Martil</div>
          </div>
        </div>

        <div
          className="mx-auto flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.30s", animationFillMode: "forwards" }}
        >
          <CtaButton />
          <FaqButton />
        </div>

        <div
          className="flex flex-col items-center justify-between w-full space-y-4 md:flex-row md:space-y-0 animate-fade-up opacity-0 "
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          <div className='flex items-center space-x-4'>
            <p className='text-sm text-gray-500'>
              Organized by
            </p>

            <Link className="h-[3.5rem] flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d38e31]/[.15] via-transparent to-transparent" href="/partners">
              <Image
                src="/mm.png"
                alt="Math&Maroc Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-10 w-auto filter grayscale brightness-100 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
              />
            </Link>
          </div>
            
          <div className="flex space-x-8 items-center">
            <p className='text-sm text-gray-500'>
              Trusted by
            </p>
            
            <Link className="h-[3.5rem] flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d38e31]/[.15] via-transparent to-transparent" href="/partners">
              <Image
                src="/adria_official_partner.png"
                alt="Adria Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-12 w-auto filter grayscale brightness-50 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
              />
            </Link>

            <Link className="h-[3.5rem] flex items-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d38e31]/[.15] via-transparent to-transparent" href="/partners">
              <Image
                src="/lymed.png"
                alt="LYMED Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="h-11 w-auto filter grayscale brightness-70 contrast-125 hover:grayscale-0 hover:brightness-100 hover:contrast-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </TextureBg>
  )
}

export default HeroSection
