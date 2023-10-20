import { useState, useEffect } from "react";
import Publish from './Components/Publish'
import fetchPublish from "./services/FetchPublish";
import useDataRetrieval from "./hooks/useDataRetrieval";

export default function MyComponent () {
    const { data } = useDataRetrieval(fetchPublish)


    /* Como pueden ver, el atributo ref se lo atribumos al div, ya que este va a ser la referencia siempre para ver si se ha
    llegado al final de las publis */
    return (
        <div>
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
