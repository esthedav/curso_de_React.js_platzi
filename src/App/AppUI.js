import { TodoContext } from '../TodoContext'

// *Componentes
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodosError } from '../TodosError';
import { NotFound } from '../NotFound';


function AppUI() {
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoContext.Consumer>
        {({
          loading,
          error,
          totalTodos,
          searchedTodos,
          completeTodo,
          deleteTodo,
          searchValue,
        }) => (
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!error && !loading && totalTodos.length === 0) && <EmptyTodos />}
              {(searchValue.length >= 1 && searchedTodos.length === 0) && <NotFound/>}

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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  )
}


export { AppUI };
