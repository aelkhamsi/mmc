import { BookIcon, CalendarMDMIcon, LocationIcon } from '@mdm/ui'
import { ImageStack } from '../image-stack'

const images = [
  {
    name: 'MDM conference',
    src: '/past-edition/mdm_1.webp' 
  },
  {
    name: 'MDM conference',
    src: '/past-edition/mdm_2.webp' 
  },
  {
    name: 'MDM conference',
    src: '/past-edition/mdm_3.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/past-edition/mathsprint_1.webp' 
  },
  {
    name: 'MathSprint contest',
    src: '/past-edition/mathsprint_2.webp'
  },
]

const SecondSection = () => {
  return (    
    <div className='relative isolate overflow-hidden w-full flex flex-col justify-center items-center py-14 bg-white shadow-xl shadow-slate-800'>
      <svg viewBox="0 0 1068 1068" fill="none" className="absolute left-0 xl:left-[20%] top-0 -z-10 mt-12 w-full xl:w-[calc(1068/16*1rem)]" aria-hidden="true"><g opacity=".45"><mask id="components-logomark" width="846" height="1068" x="0" y="0" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M0 0h846v1068H0z"></path><path d="M701.525 534c0 91.99-74.676 166.563-166.792 166.563S367.941 625.99 367.941 534s74.676-166.562 166.792-166.562S701.525 442.01 701.525 534Z"></path><path d="M831.385 90.844c16.674 11.153 18.099 34.615 3.909 48.786l-121.89 121.722c-11.017 11.001-28.107 12.739-41.972 5.645-41.001-20.975-87.466-32.81-136.699-32.81-165.81 0-300.225 134.231-300.225 299.813 0 49.165 11.851 95.567 32.855 136.511 7.104 13.847 5.363 30.913-5.653 41.914L139.82 834.148c-14.19 14.171-37.684 12.748-48.853-3.903C34.142 745.525 1 643.628 1 534 1 239.632 239.96 1 534.733 1c109.778 0 211.816 33.097 296.652 89.844ZM835.286 928.37c14.191 14.171 12.766 37.632-3.908 48.785C746.542 1033.9 644.504 1067 534.725 1067c-109.778 0-211.816-33.1-296.653-89.844-16.674-11.153-18.098-34.615-3.908-48.786l121.89-121.723c11.016-11.001 28.106-12.739 41.972-5.645 41.001 20.976 87.466 32.811 136.699 32.811 49.234 0 95.699-11.835 136.7-32.811 13.865-7.094 30.955-5.356 41.972 5.645L835.286 928.37Z"></path></mask><path fill="#F1F3F6" d="M701.525 534c0 91.99-74.676 166.563-166.792 166.563S367.941 625.99 367.941 534s74.676-166.562 166.792-166.562S701.525 442.01 701.525 534Z"></path><path fill="#F1F3F6" d="M831.385 90.844c16.674 11.153 18.099 34.615 3.909 48.786l-121.89 121.722c-11.017 11.001-28.107 12.739-41.972 5.645-41.001-20.975-87.466-32.81-136.699-32.81-165.81 0-300.225 134.231-300.225 299.813 0 49.165 11.851 95.567 32.855 136.511 7.104 13.847 5.363 30.913-5.653 41.914L139.82 834.148c-14.19 14.171-37.684 12.748-48.853-3.903C34.142 745.525 1 643.628 1 534 1 239.632 239.96 1 534.733 1c109.778 0 211.816 33.097 296.652 89.844ZM835.286 928.37c14.191 14.171 12.766 37.632-3.908 48.785C746.542 1033.9 644.504 1067 534.725 1067c-109.778 0-211.816-33.1-296.653-89.844-16.674-11.153-18.098-34.615-3.908-48.786l121.89-121.723c11.016-11.001 28.106-12.739 41.972-5.645 41.001 20.976 87.466 32.811 136.699 32.811 49.234 0 95.699-11.835 136.7-32.811 13.865-7.094 30.955-5.356 41.972 5.645L835.286 928.37Z"></path><path fill="#2F3037" fillOpacity=".14" d="m267.363 670.511.89-.457-.89.457Zm-5.653 41.914.707.708-.707-.708Zm451.694-451.073-.707-.707.707.707Zm-41.972 5.645-.456.891.456-.891ZM139.82 834.148l-.706-.708.706.708Zm-48.853-3.903.83-.557-.83.557ZM835.294 139.63l.706.707-.706-.707Zm-3.909-48.786.556-.831-.556.83Zm-159.96 710.158-.456-.89.456.89Zm41.972 5.645-.707.708.707-.708Zm-357.343 0 .706.708-.706-.708Zm41.972-5.645.456-.89-.456.89ZM238.072 977.156l.556-.832-.556.832Zm-3.908-48.786-.706-.708.706.708Zm597.214 48.785.556.832-.556-.832Zm3.908-48.785.707-.708-.707.708ZM700.525 534c0 91.436-74.227 165.563-165.792 165.563v2c92.667 0 167.792-75.02 167.792-167.563h-2ZM534.733 699.563c-91.565 0-165.792-74.127-165.792-165.563h-2c0 92.543 75.125 167.563 167.792 167.563v-2ZM368.941 534c0-91.436 74.227-165.562 165.792-165.562v-2c-92.667 0-167.792 75.018-167.792 167.562h2Zm165.792-165.562c91.565 0 165.792 74.126 165.792 165.562h2c0-92.544-75.125-167.562-167.792-167.562v2Zm299.854-229.516-121.89 121.723 1.413 1.415L836 140.337l-1.413-1.415Zm-162.7 127.185c-41.138-21.046-87.759-32.92-137.154-32.92v2c49.071 0 95.38 11.796 136.243 32.701l.911-1.781Zm-137.154-32.92c-166.361 0-301.225 134.677-301.225 300.813h2c0-165.028 133.966-298.813 299.225-298.813v-2ZM233.508 534c0 49.328 11.89 95.885 32.965 136.967l1.78-.913c-20.934-40.806-32.745-87.051-32.745-136.054h-2Zm27.495 177.718L139.114 833.44l1.413 1.415 121.89-121.722-1.414-1.415ZM0 534c0 109.832 33.205 211.923 90.137 296.802l1.66-1.114C35.08 745.128 2 643.423 2 534H0ZM534.733 0C239.409 0 0 239.079 0 534h2C2 240.186 240.511 2 534.733 2V0Zm297.208 90.013C746.945 33.159 644.715 0 534.733 0v2c109.574 0 211.419 33.035 296.096 89.675l1.112-1.662ZM266.473 670.967c6.93 13.507 5.204 30.092-5.47 40.751l1.414 1.415c11.359-11.344 13.114-28.892 5.836-43.079l-1.78.913Zm446.224-410.322c-10.673 10.658-27.283 12.383-40.81 5.462l-.911 1.781c14.205 7.267 31.775 5.515 43.134-5.828l-1.413-1.415ZM139.114 833.44c-13.782 13.763-36.526 12.334-47.316-3.752l-1.661 1.114c11.547 17.216 35.79 18.633 50.39 4.053l-1.413-1.415ZM836 140.337c14.601-14.581 13.181-38.793-4.059-50.324l-1.112 1.662c16.109 10.775 17.538 33.486 3.758 47.247l1.413 1.415ZM534.725 1068c109.983 0 212.213-33.16 297.209-90.013l-1.112-1.663C746.145 1032.96 644.3 1066 534.725 1066v2Zm-297.209-90.013C322.512 1034.84 424.743 1068 534.725 1068v-2c-109.574 0-211.42-33.04-296.097-89.676l-1.112 1.663Zm-2.645-48.91L356.76 807.355l-1.413-1.415-121.889 121.722 1.413 1.415Zm162.7-127.185c41.138 21.047 87.759 32.921 137.154 32.921v-2c-49.071 0-95.381-11.796-136.243-32.701l-.911 1.78Zm137.154 32.921c49.396 0 96.017-11.874 137.155-32.921l-.911-1.78c-40.863 20.905-87.172 32.701-136.244 32.701v2Zm177.965-27.458 121.89 121.722 1.413-1.415-121.89-121.722-1.413 1.415Zm-40.81-5.463c13.527-6.92 30.137-5.196 40.81 5.463l1.413-1.415c-11.359-11.344-28.929-13.095-43.134-5.828l.911 1.78Zm-315.12 5.463c10.674-10.659 27.283-12.383 40.811-5.463l.911-1.78c-14.205-7.267-31.776-5.516-43.135 5.828l1.413 1.415ZM238.628 976.324c-16.108-10.774-17.537-33.485-3.757-47.247l-1.413-1.415c-14.601 14.581-13.181 38.793 4.058 50.325l1.112-1.663Zm593.306 1.663c17.24-11.532 18.66-35.744 4.059-50.325l-1.413 1.415c13.78 13.761 12.351 36.472-3.758 47.247l1.112 1.663Z" mask="url(#components-logomark)"></path></g></svg>

      <div
        className="flex flex-col w-full space-y-4 md:flex-row md:justify-between md:space-x-8 lg:w-3/4 text-base mb-12 md:mb-20"
      >
        <div className="w-full space-y-4 p-4 lg:p-0">
          <p className='font-bold text-xs text-cyan-600'>C'est quoi Summer Camp ?</p>
          <h1 className='font-bold text-3xl'>Summer Camp, une aventure scientifique et mathématique au cœur de l&apos;été</h1>
          <p>Le <span className='font-bold'>Summer Camp</span>, c&apos;est une semaine d&apos;immersion dédiée aux mathématiques et aux sciences, pensée pour les jeunes curieux et passionnés.</p>
          <p>À travers des séances de haut niveau en mathématiques, une introduction à l&apos;informatique, des ateliers et des workshops, les élèves explorent les notions scientifiques de façon concrète et ludique.</p>
          <p>Bien plus qu&apos;un camp d&apos;été, c&apos;est une aventure intellectuelle, une rencontre entre esprits vifs, et une occasion unique de nourrir sa passion tout en s&apos;amusant.</p>
        </div>

        <div className="w-full">
          <ImageStack
            images={images}
            autoplay={true}
          />
        </div>
      </div>

      <div className='text-3xl font-bold p-4 lg:p-0'>
        Retour sur Summer Camp 2024
      </div>

      <div
        className="flex flex-col md:flex-row md:justify-between md:space-x-8 w-full lg:w-3/4 text-base md:my-12"
      >
        <div className='w-full flex justify-start p-4 lg:p-0'>
          <div className="w-fit space-y-4 font-medium text-3xl lg:text-4xl">
            <p><span className='bg-gradient-to-br from-sky-500 to-[#272162] inline-block text-transparent bg-clip-text'>75+</span> Participants</p>
            <p><span className='bg-gradient-to-br from-sky-500 to-[#272162] inline-block text-transparent bg-clip-text'>1</span> Semaine prise en charge</p>
            <p>✨ Des formations d&apos;excellence</p>
            <p>🏖️ Des jeux, du sport et des sorties</p>
          </div>
        </div>

        <div className="w-full flex flex-col px-4 space-y-4">
          <p>L'édition passée de MDM s'est tenue à Ben Guerir en collaboration avec l&apos;UM6P</p>
          <p>Une édition qui a réuni une centaine de passionnés de mathématiques autour de conférences d'experts, de stands et de compétitions</p>
          <p>En 2025, MDM promet d'aller encore plus loin, en offrant une expérience enrichie avec de nouvelles activités, des intervenants de renommée internationale et des opportunités inédites pour tous les passionnés de mathématiques</p>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
