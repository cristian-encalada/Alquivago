'use client'

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { data } from 'autoprefixer';
import ComparisonCard from '@/app/components/ComparisonCard';


if (typeof localStorage !== 'undefined') {
  try {
    // guardar los datos en localStorage
    localStorage.setItem('arrData', JSON.stringify(arrData));
  } catch (err) {
    console.error('Error al guardar en localStorage:', err);
  }
} else {
  console.error('localStorage no está disponible en este navegador.');
}

/********************************************************************************************/

/* componente Cards */

export default function Cards() {


  const [dataLocalStorage, setDataLocalStorage] = useState([]);

  useEffect(() => {
    // recuperar la lista almacenada en el localStorage
    const storedData = JSON.parse(localStorage.getItem('arrData'));
    if (storedData) {
      setDataLocalStorage(storedData);
    }
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
    if (window.innerWidth <= 620) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 680) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 920) {
        setSlidesPerView(2);
      } else if (window.innerWidth <= 1240) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  if (dataLocalStorage.length === 0) {
    return (
      <main classNameName='w-full h-screen flex justify-center items-center'>
          <h1 classNameName='text-slate-600 text-lg font-bold'>No has agregado ninguna propiedad, selecciona algunas para comparar</h1>
      </main>
    )
  }
  return (
      <Swiper
        spaceBetween={1}
        slidesPerView={slidesPerView}
      >
        {dataLocalStorage.map((data) => (
            <SwiperSlide key={data.id}>
              <ComparisonCard 
              comparisonArea={data.total_area}
              comparisonBathrooms={data.bathrooms}
              comparisonBedrooms={data.bedrooms}
              comparisonImage={data.images[0]}
              comparisonLink={data.url_link}
              comparisonOrigin={data.origin}
              comparisonType={data.property_type}
              comparisonZone={data.zone_name}
              comparisonCurrency={data.currency}
              comparisonPrice={data.price}
              />
            </SwiperSlide>
                  ))}

                </Swiper>
  );
}