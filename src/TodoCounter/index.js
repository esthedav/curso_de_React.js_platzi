import './style.css';

function TodoCounter({ total, completed, loading, error }) {

    let headerText

    if (error) {
        headerText = "Algo salio mal 💀"
    }
    else if (total === 0) {
        headerText = "No Tienes Todos para hoy 💤"
    }
    else if (completed === total) {
        headerText = "Felicidades completaste Todo 🎉"
    } else {
        headerText = <>Has completado <span>{completed}</span> de <span>{total}</span> TODOS</>
    }

    return(
        <h1>
            {loading ? <>Cargando Todos 🐶</>: headerText}
        </h1>
    )
}

export { TodoCounter };
