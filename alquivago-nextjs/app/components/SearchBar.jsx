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
    <section className='container flex-col lg:flex-row lg:w-2/3 justify-center items-center lg:h-20 h-48 bg-transparent lg:mb-36 rounded-2xl shadow-xl flex'>
      <input
        className='lg:w-5/6 w-full h-full lg:rounded-none lg:rounded-l-2xl rounded-2xl text-center font-medium text-2xl'
        type="search"
        onChange={handleChange} // Utiliza onChange para manejar cambios en el input
      />
      <div className="lg:w-1/6 w-full h-full lg:rounded-none lg:rounded-r-2xl rounded-2xl bg-azul-600 hover:scale-110 transition">
        <button
          className="text-center w-full h-full font-medium text-white text-lg"
          onClick={handleClick}
        >
          Buscar zona
        </button>
      </div>
    </section>
  );
}
