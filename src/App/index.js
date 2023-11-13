import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';


/** Default todos para práctica
const defaultTodos = [
    { text: 'Cortar cebolla', completed: true},
    { text: 'Tomar el Curso de Intro a React.js', completed: false},
    { text: 'Llorar con la llorona', completed: false},
    { text: 'LALALALA', completed: true},
    { text: 'El quinto Elemento', completed: false},
    { text: 'Cortar tomate', completed: false},
    { text: 'Realizar la tarea', completed: false},
    { text: 'Reto del esqueleto', completed: false},
    { text: 'Tomar el Curso de Intro a React.js Tomar el Curso de Intro a React.js', completed: false},
]

localStorage.setItem('TODOS_default', JSON.stringify(defaultTodos))
localStorage.removeItem('TODOS_default')
 */

function App() {
    return (
        <TodoProvider>
            <AppUI/>
        </TodoProvider>
    );
}

export default App;
