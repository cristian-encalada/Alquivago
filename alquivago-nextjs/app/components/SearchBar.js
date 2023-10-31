'use client'
import React, { useState } from 'react';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    const stringFormated = e.target.value.toUpperCase()
    setSearchValue(stringFormated);
  };

  const handleClick = () => {
    console.log(searchValue); // Accede al valor actual del campo de búsqueda
    // Aquí puedes hacer lo que necesites con el valor, como enviarlo a una función de búsqueda, etc.
  };

  return (
    <section className='container flex-col lg:flex-row lg:w-1/2 justify-center items-center gap-3 lg:h-20 lg:gap-2 h-48 bg-transparent lg:mb-36 rounded-2xl shadow-xl flex'>
      <input
        className='lg:w-5/6 w-full h-full lg:rounded-l-2xl rounded-2xl text-center font-medium text-2xl'
        type="search"
        onChange={handleChange} // Utiliza onChange para manejar cambios en el input
      />
      <div className="lg:w-1/6 w-full h-full lg:rounded-r-2xl rounded-2xl bg-azul-600">
        <button
          className="text-center w-full h-full hover:scale-125 transition font-medium text-white text-lg"
          onClick={handleClick}
        >
          Buscar zona
        </button>
      </div>
    </section>
  );
}
