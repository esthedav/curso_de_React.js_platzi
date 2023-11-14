import { useState, useEffect } from "react";

function useLocalStorage (itemName){

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            try {
                let parsedItems = JSON.parse(localStorage.getItem(itemName)) || [{ text: 'Escribir mi primer TODO', completed: false}]
                setLoading(false)
                setItem(!error ? parsedItems : '')
            } catch(e) {
                setLoading(false)
                setError(true)
            }
        }, 700)
    }, [itemName, error])


    // Salvar con persistencia
    const saveItem = (itemValue) => {
        localStorage.setItem(itemName, JSON.stringify(itemValue))
        setItem(itemValue)
    }

    return {
        item,
        saveItem,
        error,
        loading
    }
}

export { useLocalStorage }
