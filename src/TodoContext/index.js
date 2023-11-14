import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider({ children }) {
    
    // Definimos los todos que se han completado
    const {item: todos, saveItem: saveTodos, error, loading} = useLocalStorage('TODOS_default')
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    // Buscamos y filtramos entre los todos que tenemos
    const [searchValue, setSearchValue] = useState('');
    
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
    })

    // Cambia la propiedad completed del todo
    const completeTodo = (text) => {
        const newTodos =[...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
    }

    // Elimina un todo utilizando el index del todo
    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    // Modal
    const [openModal, setOpenModal] = useState(false);

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }
