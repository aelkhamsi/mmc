import React, { ReactNode } from 'react'

const ConferenceCard = ({
  fullName,
  pictureUrl,
  children,
}:{
  fullName: string,
  pictureUrl: string,
  children: ReactNode
}) => {
  return (
    <div className="flex flex-col space-y-4 h-3/4 w-3/4 md:h-1/4 md:w-1/4">
      <img
        src={pictureUrl}
      />

      <div className='flex flex-col mb-4 md:mb-0'>
        <div className='text-2xl font-semibold'>{fullName}</div>
        {children}        
      </div>
    </div>
  )
}

const ConferencesSection = () => {
  return (
    <div
      className="rounded-lg animate-fade-up opacity-0"
      style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
    >
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:justify-around md:items-start py-4">
        <ConferenceCard
          fullName='Omar MOUCHTAKI'
          pictureUrl='/conferences/omar_mouchtaki.jpeg'
        >
          <ul className="list-disc font-light">
            <li>Assistant Professor, NYU Stern – Operations, Technology & Statistics</li>
            <li>Graduate of École Polytechnique</li>
            <li>Ph.D. in Operations Research, Columbia University</li>
            <li>Co-founder of Math&Maroc</li>
            <li><span className='font-medium'>Research: </span> Data-driven decision-making, pricing, inventory, assortment</li>
          </ul>
        </ConferenceCard>

        <ConferenceCard
          fullName='Mohammed ABOUZAID'
          pictureUrl='/conferences/mohammed_abouzaid.jpg'
        >
          <ul className="list-disc font-light">
            <li>Professor of Mathematics – Stanford University</li>
            <li>Specialist in Symplectic Geometry & Topology</li>
            <li>Invited Speaker – International Congress of Mathematicians (2014)</li>
            <li>New Horizons in Mathematics Prize (2017)</li>
            <li>Former Clay Research Fellow</li>
          </ul>
        </ConferenceCard>

        <ConferenceCard
          fullName='Nader MASMOUDI'
          pictureUrl='/conferences/nader_masmoudi.jpg'
        >
          <ul className="list-disc font-light">
            <li>Professor of Mathematics – NYU Courant Institute & NYU Abu Dhabi</li>
            <li>First Arab & African Gold Medalist at the IMO (1992)</li>
            <li>ENS Ulm Graduate</li>
            <li>Invited Speaker – International Congress of Mathematicians (2018)</li>
            <li>Specialist in nonlinear PDEs & fluid dynamics</li>
          </ul>
        </ConferenceCard>
      </div>
    </div>
  )
}

export default ConferencesSection
