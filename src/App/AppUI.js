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
import { Modal } from '../Modal';
import { TodoCreateForm } from '../TodoCreateForm'


function AppUI() {
  return (
    <>
      <div className='TodoContainer'>
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

                {(!error && !loading && (totalTodos === 0)) && <EmptyTodos />}

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
        <TodoContext.Consumer>
          {({
            openModal
          }) => (
            <>
            {openModal && (
              <Modal>
                <TodoCreateForm/>
              </Modal>
            )}
            </>
        
        )}
        </TodoContext.Consumer>
      </div>
        <CreateTodoButton />

    </>
  )
}


export { AppUI };
