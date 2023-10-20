import fetchPublish from "../services/FetchPublish";
import { useState, useEffect } from "react";

export default function useDataRetrieval() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                const newData = await fetchPublish(page);
                setData((prevData) => [...prevData, ...newData]);
                if (newData.length == 10) {
                    setPage((prevPage) => prevPage + 1);
                }
            } catch (error) {
                console.error(error);
                // Aquí podrías mostrar un mensaje de error al usuario
            }
        }
    
        fetchDataFromAPI();
    }, [page]);

    // Aquí podrías agregar más funciones o estados si los necesitas

    return { data };
}