import './style.css';

function TodoCounter({ total, completed }) {

    let headerText = <>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</>

    if (total === 0) {
        headerText = "No Tienes Todos para hoy 💤"
    }
    else if (completed === total) {
        headerText = "Felicidades no tienes mas Todos Pendientes 🎉"
    }


    return(
        <h1>
            {headerText}
        {/* Has completado <span>{completed}</span> de <span>{total}</span> TODOS */}
        </h1>
    )
}

export { TodoCounter };
