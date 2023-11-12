import React, { useState } from 'react';

// *Componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

/**
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
    let parsedTodos = JSON.parse(localStorage.getItem('TODOS_default')) || [{ text: 'Escribir mi primer TODO', completed: false}]

    const [todos, setTodos] = useState(parsedTodos)
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    // Salvar con persistencia
    const saveTodos = (newTodos) => {
        localStorage.setItem('TODOS_default', JSON.stringify(newTodos))
        setTodos(newTodos)
    }


    const [searchValue, setSearchValue] = useState('');
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
    })

    const completeTodo = (text) => {
        const newTodos =[...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }


    return (
        <>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />

            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
