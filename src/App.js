import './App.css';
// *Componentes
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

function App() {
    return (
        <div className="App">

            <TodoCounter />
            <TodoSearch />

            <TodoList>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </TodoList>

            {/* <CreateTodoButton /> */}
        </div>
    );
}

export default App;
