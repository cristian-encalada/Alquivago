import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API
    fetch('http://127.0.0.1:5000/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Parsea la respuesta como JSON
      })
      .then((apiData) => {
        setData(apiData); // Almacena los datos en el estado
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []); // El segundo argumento [] significa que este efecto se ejecutará solo una vez, al montar el componente

  return (
    <div>
      {data.map((alquiler) => (
        <App
          propertyArea={alquiler.TOTAL_AREA}
          propertyImage={alquiler.imagenes && alquiler.imagenes[0]} // Comprobación condicional
          propertyBathrooms={alquiler.FULL_BATHROOMS}
          propertyBedrooms={alquiler.BEDROOMS}
          propertyType={alquiler.PROPERTY_TYPE}
          propertyCurrency={alquiler.exchange}
          propertyZone={alquiler.city_name}
          propertyPrice={alquiler.price}
          key={alquiler.id}
        />
      ))}
    </div>
  );
};

const renderizado = ReactDOM.createRoot(document.getElementById('renderizado'));
renderizado.render(<MyComponent />);
