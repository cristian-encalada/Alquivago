import ReactDOM from 'react-dom/client';
import { useState, useEffect, useRef } from 'react';
import Publish from './Components/Publish';
import Navbar from './Components/Navbar';
import FiltersBar from './Components/FiltersBar';
import FiltersSection from './Components/FiltersSection';
import { data } from 'autoprefixer';
import Header from './Components/Header';

const MyComponent = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const containerRef = useRef(null);

    const fetchData = (pageNumber) => {
        fetch(`http://127.0.0.1:5000/api/v1/rent/filtro?page=${pageNumber}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('La solicitud no fue exitosa');
                }
                return response.json();
            })
            .then((apiData) => {
                /* con esta linea seteo y apendizo la data que ya tenia cargada, junto con la siguiente */
                setData((prevData) => [...prevData, ...apiData.rents]);
                /* aumento numero de pages */
                setPage(pageNumber + 1);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    /* Este useEffect va a detectar cada vez que 'page' cambie de valor(se puede ver que lo hace en la misma funcion) y ejecuta la funcion de hacer fetch a la data */
    useEffect(() => {
        fetchData(page);
    }, [page]);

    /* funcion que detecta si la referencia (en este caso, las publicaciones) existe. En ese caso, al llegar al final de todas, hace uso de la funcion fetchData() */
    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                fetchData(page);
            }
        }
    };

    /* Este efecto hace que, cada vez que se haga scroll, entre a la funcion de handleScroll, si no encuentra nada, remueve y sigue haciendo el mismo
    proceso hasta que en la funcion handleScroll() encuentre la condicion del fin de las publis */
    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [handleScroll]);

    /* Como pueden ver, el atributo ref se lo atribumos al div, ya que este va a ser la referencia siempre para ver si se ha
    llegado al final de las publis */
    return (
        <div ref={containerRef}>
            {data.map((alquiler) => (
                <Publish
                    propertyTitle={alquiler.title || 'Titulo no disponible'}
                    propertyArea={alquiler.total_area}
                    propertyImage={alquiler.images && alquiler.images[0]}
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

const root = ReactDOM.createRoot(document.getElementById('renderizado'));
root.render(
    <>
        <Header />
        <MyComponent />
    </>
);