import React from 'react'
import { TodoContext } from '../TodoContext'

import './style.css'

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext)
    return(
        <button 
            className="CreateTodoButton"
            onClick={(e) => {
                
                setOpenModal(!openModal)
                }
            }
        >
            +
        </button>
    )
}

export { CreateTodoButton }