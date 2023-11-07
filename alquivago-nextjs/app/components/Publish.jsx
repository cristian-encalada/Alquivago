'use client'
import { useState, useEffect } from 'react'
import gallitoLogo from '../../public/gallito-logo.png'
import infocasasLogo from '../../public/infocasas-logo.jpg'
import mercadoLibreLogo from '../../public/mercadolibre-logo.png'
import Image from 'next/image'
import Bookmark from '../../public/Bookmark.svg'
import BookmarkSlash from '../../public/BookmarkSlash.svg'
import areaIcon from '../../public/areaIcon.svg'
import bathIcon from '../../public/bathIcon.svg'
import bedroomIcon from '../../public/bedroomIcon.svg'


function Publish({actualObject , saveLocalStorage ,propertyTitle, propertyType, propertyBathrooms, propertyBedrooms, propertyZone, propertyArea, propertyPrice, propertyCurrency, propertyLink, propertyImage, propertyOrigin}) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    // Recuperar el estado "saved" del localStorage al cargar el componente
    const savedStatus = localStorage.getItem(`saved_${actualObject.id}`);
    if (savedStatus) {
      setSaved(savedStatus === 'true');
    }
  }, [actualObject.id]);

  const handleSave = () => {
    // Actualizar el estado "saved" y guardar en el localStorage
    setSaved(!saved);
    localStorage.setItem(`saved_${actualObject.id}`, !saved);
    saveLocalStorage(actualObject);
  };

  const originBackground = {
    infocasas: infocasasLogo,
    gallito: gallitoLogo,
    mercado_libre: mercadoLibreLogo
  }
  const Background = originBackground[propertyOrigin];
  return (
    <div className="m-auto text-slate-700 mt-10 flex h-96 container flex-col rounded-2xl bg-slate-200 shadow-2xl lg:flex-row">
  <div className="flex h-full w-full flex-col items-end justify-end rounded-tl-2xl rounded-tr-2xl bg-center lg:h-full lg:w-1/3 lg:rounded-none lg:rounded-bl-2xl lg:rounded-tl-2xl" style={{
    background: `url(${propertyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div className="relative mb-3 mr-5 h-8 w-8 rounded-lg lg:h-12 lg:w-12">
      <Image className='rounded-lg' src={Background} alt={`Logo de ${Background}`}/>
    </div>
  </div>
  <Image className='rounded-lg relative top-0' src={saved ? BookmarkSlash : Bookmark} alt={`Icono de guardado`} onClick={handleSave}/>
  <h1 className="w-full py-1 text-center text-xl h-32 font-medium lg:hidden">{propertyTitle}</h1>
  <div className="flex h-full lg:w-full lg:flex-row-reverse gap-2">
    <div className="bg-red flex h-full w-1/2 flex-col lg:w-1/4">
      <div className="my-2 flex h-2/3 flex-col justify-around rounded-2xl bg-[#414C67] py-3 lg:pl-2">
        <div className='flex gap-2 items-center justify-around lg:flex-row-reverse'>
        <Image src={bedroomIcon}  width={40} height={40} alt='bedroom icon'/>
        <p className="font-medium text-white">{propertyBedrooms >= 1? `${propertyBedrooms} Dorm.`: 'No info'}</p>
        </div>
        <div className='flex gap-2 items-center justify-around lg:flex-row-reverse'>
        <Image src={bathIcon}  width={40} height={40} alt='bath icon'/>
        <p className="font-medium text-white">{propertyBathrooms > 1? `${propertyBathrooms} Baños`: '1 Baño'}</p> 
        </div>
        <div className='flex gap-2 items-center justify-around lg:flex-row-reverse'>
        <Image src={areaIcon}  width={40} height={40} alt='area icon'/>
        <p className="font-medium text-white">{propertyArea > 0? `${propertyArea} mt2`: 'No info'}</p>
        </div>
      </div>
      <a target='_blank' href={propertyLink} className="mx-1 mb-1 flex flex-row-reverse items-center justify-center rounded-3xl bg-[#CCBC82] px-4 py-2 font-bold text-white hover:bg-[#AF9A4B] lg:h-1/3">
        <svg className="h-10 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
        </svg>
        Consultar
      </a>
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