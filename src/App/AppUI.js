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


function AppUI() {
  return (
    <>
      <TodoContext.Consumer>
        {({
          loading,
          error,
          totalTodos,
          completedTodos,
          searchedTodos,
          completeTodo,
          deleteTodo,
          searchValue,
          setSearchValue
        }) => (
          <>
            <TodoCounter
              loading={loading}
              error={error}
              completed={completedTodos}
              total={totalTodos}
            />
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!error && !loading && totalTodos.length === 0) && <EmptyTodos />}

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
        </>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </>
  )
}


export { AppUI };
