import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';



/** Default todos para práctica
const defaultTodos = [
    { text: 'Cortar cebolla', completed: true},
    { text: 'Tomar el Curso de Intro a React.js', completed: false},
    { text: 'Llorar con la llorona', completed: false},
    { text: 'LALALALA', completed: true},
    { text: 'El quinto Elemento', completed: false},
]

localStorage.setItem('TODOS_default', JSON.stringify(defaultTodos))
localStorage.removeItem('TODOS_default')
 */

function App() {

    // Definimos los todos que se han completado
    const [todos, saveTodos] = useLocalStorage('TODOS_default')
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


    return (
            <AppUI
                completedTodos={completedTodos}
                totalTodos={totalTodos}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchedTodos={searchedTodos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
    );
}

export default App;
