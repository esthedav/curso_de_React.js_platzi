import React from 'react'
import { TodoContext } from '../TodoContext'

import './styles.css'


function TodoCreateForm() {
    const { setOpenModal, addNewTodo } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                addNewTodo(newTodoValue)
                setOpenModal(false)
            }}
            className='todoCreateForm'
        >
            <label>Añade un nuevo TODO</label>
            <textarea
                className='todoCreateForm__textarea'
                placeholder='Conquistar el mundo 🌎'
                onChange={(e) => {
                    setNewTodoValue(e.target.value)
                }}
            />
            <button
                className='todoCreateForm__btn todoCreateForm__btn--cancel'
                type='button'
                onClick={() => {
                    setOpenModal(false)
                }}
            >
                Cancelar
            </button>
            <button
                className='todoCreateForm__btn todoCreateForm__btn--add'
                type='submit'
            >
                Añadir
            </button>

        </form>
    )
}

export { TodoCreateForm }
