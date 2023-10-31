'use client'

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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

  return (
      <Swiper
        spaceBetween={1}
        slidesPerView={slidesPerView}
      >
        {dataLocalStorage.map((data) => (
            <SwiperSlide key={data.id}>
              <div class="bg-white border border-gray-200 rounded-lg shadow m-auto dark:bg-blue-800">
                <img class="rounded-t-lg" src={data.images[0]} alt="" />
                <div class="p-3">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{data.currency} {data.price}</h5>
                      <div class="mb-1 flex justify-center">
                              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                                {data.total_area}
                              </span>
                              <span class="bg-blue-100 text-blue-800 text-center text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                                {data.property_type}
                              </span>
                       </div>
                       <div class="mb-2 flex justify-center">
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                              Mts {data.total_area}
                            </span>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                              Baños {data.bathrooms}
                            </span>
                        </div>
                    <p class="font-normal dark:text-gray-200">{data.state_name}</p>
                    <p class="mb-5 font-normal dark:text-gray-200">{data.zone_name}</p>
                    <a href={data.url_link} target='_blank' rel='noreferrer' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Enlace
                        <svg class="w-10 h-4 ml-1" aria-hidden="true" fill="none" viewBox="0 0 5 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            </SwiperSlide>
        ))}

      </Swiper>
  );
}