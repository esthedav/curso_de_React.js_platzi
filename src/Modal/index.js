import React from "react";
import ReactDom from "react-dom"
import { TodoContext } from '../TodoContext'
import './styles.css'


function Modal( { children }){
    const { setOpenModal} = React.useContext(TodoContext)

    return ReactDom.createPortal(
        <>
            <div 
                className="Modal-background"
                onClick={() => {
                    setOpenModal(state => !state)
                }
                }
            
            >
            </div>
                {children}
        </>,
        document.getElementById('modal')
    )

}

export { Modal }


