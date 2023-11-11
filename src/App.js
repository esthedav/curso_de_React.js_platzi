import React, { useState } from 'react';

// *Componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true},
    { text: 'Tomar el Curso de Intro a React.js', completed: false},
    { text: 'Llorar con la llorona', completed: false},
    { text: 'LALALALA', completed: true},
    { text: 'El quinto Elemento', completed: false},
]


function App() {
    const [todos, setTodos] = useState(defaultTodos)
    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    const [searchValue, setSearchValue] = useState('');
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
    })

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
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </>
    );
}

export default App;
