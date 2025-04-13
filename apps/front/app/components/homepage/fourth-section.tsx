import Link from "next/link";
import { AnimatedTooltip } from '@/app/components/animated-tooltip';
import { ImageSlider } from "@mdm/ui";

const getSlideshowImages = () => ([
  {src: '/organizing-team/achraf_el_khamsi.jpeg', key: 'photo-1'},
  {src: '/organizing-team/adam_lachkar.jpg', key: 'photo-2'},
  {src: '/organizing-team/amine_hbar.jpeg', key: 'photo-3'},
  {src: '/organizing-team/ayman_amasrour.jpeg', key: 'photo-4'},
  {src: '/organizing-team/aymane_maaitat.jpeg', key: 'photo-5'},
  {src: '/organizing-team/ayoub_bennouna.jpg', key: 'photo-6'},
  {src: '/organizing-team/ayoub_ennadif.jpeg', key: 'photo-7'},
  {src: '/organizing-team/fatima_zahra_moudakir.jpeg', key: 'photo-8'},
  {src: '/organizing-team/kawtar_taik.jpeg', key: 'photo-9'},
  {src: '/organizing-team/lina_bellahmidi.jpeg', key: 'photo-10'},
])

const people = [
  {
    id: 2,
    name: "Oussama ZOUHRY",
    designation: "Student @ Ecole Polytechnique X",
    image: "/organizing-team/oussama_zouhry.webp",
  },
  {
    id: 3,
    name: "Chaimaa LOUTFI",
    designation: "Student @ EPFL",
    image: "/organizing-team/chaimaa_loutfi.webp",
  },
  {
    id: 4,
    name: "Chaimaa RADIOUSSE",
    designation: "Student @ ENSEIRB-MATMECA",
    image: "/organizing-team/chaimaa_radiousse.webp",
  },
  {
    id: 5,
    name: "Fatima Zahra MOUDAKIR",
    designation: "Computer Science Student",
    image: "/organizing-team/fatima_zahra_moudakir.webp",
  },
  {
    id: 1,
    name: "Achraf EL KHAMSI",
    designation: "Software Engineer @ Bouygues Telecom",
    image: "/organizing-team/achraf_el_khamsi.webp",
  },
  {
    id: 6,
    name: "Ismail BOUHAJ",
    designation: "Student @ ETH",
    image: "/organizing-team/ismail_bouhaj.webp",
  },
  {
    id: 7,
    name: "Omar BENNOUNA",
    designation: "Phd @ MIT",
    image: "/organizing-team/omar_bennouna.webp",
  },
  {
    id: 8,
    name: "MANAL SAOUI",
    designation: "Shift Manager @ Amazon",
    image: "/organizing-team/manal_saoui.webp",
  },
  {
    id: 9,
    name: "Ayoub BENNOUNA",
    designation: "Medical Student & Brand Designer",
    image: "/organizing-team/ayoub_bennouna.webp",
  },
];

const FourthSection = () => {
  return (
    <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-12 px-2 space-y-6'>
      <h1 className='text-3xl font-bold'>
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
        <AnimatedTooltip items={people} />
      </div>

      <Link
        href='organizing-team'
      >
        <button
          className="p-[3px] relative text-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-[#272162] rounded-lg" />
          <div className="px-8 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
            Découvrir l&apos;équipe organisatrice
          </div>
        </button>
      </Link>
    </div>
  )
}

export default FourthSection
