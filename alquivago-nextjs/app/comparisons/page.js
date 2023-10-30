'use client'

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


/********************************************************************************************/

/* datos de prueba */

const arrData = [
  {
    img: "https://imagenes.gallito.com/1024x768/231018153921380.jpg",
    lugar: "Montevideo",
    zona: "el borro",
    moneda: "$",
    precio: 20000,
    banos: 1,
    metros: 60,
  },
  {
    img: "https://imagenes.gallito.com/1024x768/231018153921380.jpg",
    lugar: "Montevideo",
    zona: "el currascou",
    moneda: "$",
    precio: 30000,
    banos: 3,
    metros: 600,
  },
  {
    img: "https://imagenes.gallito.com/1024x768/231018153921380.jpg",
    lugar: "Montevideo",
    zona: "el currascou",
    moneda: "$",
    precio: 30000,
    banos: 3,
    metros: 600,
  },
  {
    img: "https://imagenes.gallito.com/1024x768/231018153921380.jpg",
    lugar: "Montevideo",
    zona: "el currascou",
    moneda: "$",
    precio: 30000,
    banos: 3,
    metros: 600,
  },
  {
    img: "https://imagenes.gallito.com/1024x768/231018153921380.jpg",
    lugar: "Montevideo",
    zona: "el currascou",
    moneda: "$",
    precio: 30000,
    banos: 3,
    metros: 600,
  }
];

/********************************************************************************************/

/* localstorage */

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
        {dataLocalStorage.map((data, i) => (
            <SwiperSlide key={i}>

              <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-800">
                <img class="rounded-t-lg" src={data.img} alt="" />
                <div class="p-3">
                    <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{data.moneda} {data.precio}</h5>
                      <div class="mb-1">
                              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                                otro {data.metros}
                              </span>
                              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                                Coso {data.banos}
                              </span>
                       </div>
                       <div class="mb-2">
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                              Mts {data.metros}
                            </span>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-1 py-0.2 rounded dark:bg-amber-300 dark:text-blue-800 ml-1">
                              Baños {data.banos}
                            </span>
                        </div>
                    <p class="font-normal dark:text-gray-200">{data.lugar}</p>
                    <p class="mb-5 font-normal dark:text-gray-200">{data.zona}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Enlace
                        <svg class="w-10 h-4 ml-1" aria-hidden="true" fill="none" viewBox="0 0 5 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>

            </SwiperSlide>
        ))}

      </Swiper>
  );
}