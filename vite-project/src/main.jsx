import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react';
import Publish from './Components/Publish'
import { data } from 'autoprefixer';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Realizar la solicitud a la API
        fetch('http://127.0.0.1:3001/api/v1/rent/filtro?&page=14')
        .then((response) => {
            if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
            }
            return response.json(); // Parsea la respuesta como JSON
        })
        .then((apiData) => {
            setData(apiData.rents); // Almacena los datos en el estado
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []); // El segundo argumento [] significa que este efecto se ejecutará solo una vez, al montar el componente

    return (
        <div>
        {data.map((alquiler) => (
            <Publish
            propertyArea={alquiler.total_area}
            propertyImage={alquiler.images && alquiler.images[0]} // Comprobación condicional
            propertyBathrooms={alquiler.bathrooms}
            propertyBedrooms={alquiler.bedrooms}
            propertyType={alquiler.property_type}
            propertyCurrency={alquiler.currency}
            propertyZone={alquiler.zone_name}
            propertyPrice={alquiler.price}
            key={alquiler.id}
            propertyOrigin={alquiler.origin}
            propertyLink={alquiler.url_link}
            />
        ))}
        </div>
    );
    };

const renderizado = ReactDOM.createRoot(document.getElementById('renderizado'));
renderizado.render(<MyComponent />);