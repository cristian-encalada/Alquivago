'use client'
import { useState } from 'react'
import gallitoLogo from '../../public/gallito-logo.png'
import infocasasLogo from '../../public/infocasas-logo.jpg'
import mercadoLibreLogo from '../../public/mercadolibre-logo.png'
import Image from 'next/image'
import Bookmark from '../../public/Bookmark.svg'
import BookmarkSlash from '../../public/BookmarkSlash.svg'


function Publish({actualObject , saveLocalStorage ,propertyTitle, propertyType, propertyBathrooms, propertyBedrooms, propertyZone, propertyArea, propertyPrice, propertyCurrency, propertyLink, propertyImage, propertyOrigin}) {
  const [saved, setSaved] = useState(false)
  const originBackground = {
    infocasas: infocasasLogo,
    gallito: gallitoLogo,
    mercado_libre: mercadoLibreLogo
  }
  const Background = originBackground[propertyOrigin];
  return (
    <div className="m-auto mt-10 flex h-80 w-5/6 flex-col rounded-2xl bg-slate-200 shadow-2xl lg:flex-row">
  <div className="flex h-3/4 max-w-full flex-col items-end justify-end rounded-tl-2xl rounded-tr-2xl bg-center lg:h-full lg:w-1/3 lg:rounded-none lg:rounded-bl-2xl lg:rounded-tl-2xl" style={{
    background: `url(${propertyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div className="relative mb-3 mr-5 h-8 w-8 rounded-lg lg:h-12 lg:w-12">
      <Image className='rounded-lg' src={Background} alt={`Logo de ${Background}`}/>
    </div>
  </div>
  <Image className='rounded-lg relative top-0' src={saved ? BookmarkSlash : Bookmark} alt={`Icono de guardado`} onClick={() => {
    setSaved(!saved);
    saveLocalStorage(actualObject)
  }}/>
  <h1 className="w-full py-1 text-center text-xl font-medium lg:hidden">{propertyTitle}</h1>
  <div className="flex h-full lg:w-full lg:flex-row-reverse gap-2">
    <div className="bg-red flex h-full w-1/2 flex-col lg:w-1/4">
      <div className="my-2 flex h-2/3 flex-col justify-around rounded-2xl bg-[#414C67] py-3 pl-5 lg:pl-12">
        <p className="font-medium text-white">{propertyBedrooms > 1? `${propertyBedrooms} Dorm.`: 'Monoambiente'}</p>
        <p className="font-medium text-white">{propertyBathrooms > 1? `${propertyBathrooms} Baños`: '1 Baño'}</p>
        <p className="font-medium text-white">{propertyArea > 0? `${propertyArea} mt2`: 'No info'}</p>
      </div>
      <button className="mx-1 mb-1 flex flex-row-reverse items-center justify-center rounded-3xl bg-[#CCBC82] px-4 py-2 font-bold text-white hover:bg-[#AF9A4B] lg:h-1/3">
        <svg className="h-10 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
        </svg>
        <a target='_blank' href={propertyLink}>Consultar</a>
      </button>
    </div>
    <div className="mt-3 flex h-full w-1/2 flex-col items-center gap-5 lg:w-3/4 lg:justify-center lg:gap-10">
      <h1 className="hidden text-xl font-medium lg:inline lg:text-center">{propertyTitle}</h1>
      <span className="w-full rounded-3xl bg-white py-2 text-center font-medium lg:w-2/3">{propertyType}</span>
      <span className="w-full rounded-3xl bg-white py-2 text-center font-medium lg:w-2/3">{propertyZone}</span>
      <p className="lg:b mb-10 text-2xl font-semibold lg:relative">{propertyCurrency === 'UYU'? '$ ': 'U$S '} {propertyPrice}</p>
    </div>
  </div>
</div>
  );
};
export default Publish