import { useState } from "react";
function useLocalStorage (itemName){

    let parsedItems = JSON.parse(localStorage.getItem(itemName)) || [{ text: 'Escribir mi primer TODO', completed: false}]

    const [item, setItem] = useState(parsedItems);

    // Salvar con persistencia
    const saveItem = (itemValue) => {
        localStorage.setItem(itemName, JSON.stringify(itemValue))
        setItem(itemValue)
    }

    return [item, saveItem]
}

export { useLocalStorage }
