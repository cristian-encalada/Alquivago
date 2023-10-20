import { useState } from 'react';
import Publish from './Components/Publish'
import useDataRetrieval from "./hooks/useDataRetrieval";

export default function App () {
    const [apiFilters, setApiFilters] = useState('')
    const { data } = useDataRetrieval(apiFilters)
    return (
        <section className='flex flex-col justify-center'>
            <div className='flex justify-center mt-2'>
            <ul className='flex gap-2 border-2'>
                <li>
                    <label>
                    <input type="radio" name="currency" value='USD' onClick={(e) => setApiFilters(e.target.value)} />
                    USD
                    </label>
                </li>
                <li>
                    <label>
                    <input type="radio" name="currency" value='UYU' onClick={(e) => setApiFilters(e.target.value)} />
                    UYU
                    </label>
                </li>
                </ul>
                </div>
            {data.map((alquiler) => (
                <Publish
                    key={alquiler.id}
                    propertyTitle={alquiler.title || 'Titulo no disponible'}
                    propertyArea={alquiler.total_area}
                    propertyImage={alquiler.images && alquiler.images[0]}
                    propertyBathrooms={alquiler.bathrooms}
                    propertyBedrooms={alquiler.bedrooms}
                    propertyType={alquiler.property_type}
                    propertyCurrency={alquiler.currency}
                    propertyZone={alquiler.zone_name}
                    propertyPrice={alquiler.price}
                    propertyOrigin={alquiler.origin}
                    propertyLink={alquiler.url_link}
                />
            ))}
        </section>
    );
}
