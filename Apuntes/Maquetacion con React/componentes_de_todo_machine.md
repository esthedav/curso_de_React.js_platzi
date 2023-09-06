# Componentes de Todo Machine

Antes de continuar debemos mencionar que tenemos dos formas de llamar a los componentes en `JSX`, el primero es con el autocerrado `<componente />`, y el segundo es con dos etiquetas de apertura y de cierre `<componente></componente>`. La forma de autocierre nos sirve cuando no vamos a poner componentes o elementos dentro de este componente, y la segunda forma nos permite poner componente dentro de componentes.

----
## Maquetando la aplicación

A continuación, comenzaremos ya a maquetar los componentes necesarios para el `Todo Machine`, para esto primero borraremos todo lo que se encuentra adentro de nuestro componente `App`, el cual deberá quedar de la siguiente manera.

```jsx
function App() {
  return (
    <div className="App">

        <TodoCounter />
        <TodoSearch />

        <TodoList>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </TodoList>

        <CreateTodoButton>
    </div>
  );
}
```

⚠ La aplicación se romperá y no correrá, ya que los componentes no se han creado aún. Entonces porque lo hacemos de esta forma, esto es una técnica en la cual primero maquetamos la estructura de la aplicación y posteriormente creamos la funcionalidad de cada componente.

----
## Creando los componentes

Para crear los componentes primero, crearemos archivos con el nombre de cada uno, esto nos permitirá tener una estructura más limpia y en caso de modificar algún componente poder encontrarlo con mayor facilidad. Recordemos que para los componentes tenemos que crear el archivo nombrándolo con la primera letra en mayúscula, y el nombre debe ser igual al nombre del componente.

### TodoCounter

Crearemos un nuevo componente llamado `TodoCounter` en un archivo llamado `TodoCounter.js`. Deberá quedar de la siguiente manera.

```jsx
function TodoCounter() {
    <h1>
        Has completado 3 de 5 TODOS
    </h1>
}

export { TodoCounter }
```

#### Exportar la función

Para poder utilizar el componente, debemos exportar la función, en este caso hay dos formas de hacerlo: con export default o con export nombrado.

##### Export default

Utilizar el `export default <función>` puede no ser la mejor opción, ya que al exportar de esta manera, tenemos la posibilidad de cambiar el nombre de la función al importar, lo que puede generar errores inesperados. Si quisiéramos manejarlo de esta manera, deberá quedar de la siguiente forma.

```jsx
function TodoCounter() {
    <h1>
        Has completado 3 de 5 TODOS
    </h1>
}
export default TodoCounter
// Lo llamariamos de la siguiente forma

import NombreCualquiera from "./TodoCounter";

```

##### Export nombrado

El export nombrado con la sintaxis de objeto `export { <función> }`, es más recomendado cuando trabajamos con componentes de React, ya que nos permite evitar errores. Este tipo de export quedaría de esta manera:

```jsx
function TodoCounter() {
    <h1>
        Has completado 3 de 5 TODOS
    </h1>
}
export { TodoCounter }
// Lo llamariamos de la siguiente forma

import { TodoCounter } from "./TodoCounter";
```

### TodoSearch

👉 Repetiremos los pasos para la creación de componentes, por lo que a partir de ahora solo mencionaremos características propias de cada componente.

En este componente notaremos que tendrá un `input` en el cual posteriormente manejaremos información. Sin embargo, por ahora solo pondremos el input.


```jsx
function TodoSearch(){
    return (
        <input placeholder="Cortar Cebolla"/>
    )
}

export { TodoSearch }
```

### TodoList

Este componente es un poco especial, ya que a diferencia de los otros componentes manejará `props`. Por el momento no veremos más acerca de las props, ya que este tema se retomará más adelante.

```jsx
function TodoList(props){
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export { TodoList }
```

### CreateTodoButton

Por el momento, no crearemos este componente. Sin embargo, para poder ver el avance de la aplicación, lo comentaremos en nuestro archivo `App.js`. Para comentar dentro de JSX utilizaremos la sintaxis `{/* */}`, por lo que deberá quedar de la siguiente manera:

```jsx
    {/* <CreateTodoButton /> */}
```

### TodoItem

Este componente ya se encuentra creado dentro de nuestro archivo `App.js`. Entonces lo único que necesitaremos será moverlo a su propio archivo.

----
## Importando los archivos

Una vez tengamos creados los componentes creados, los importaremos en nuestro archivo `App.js`, utilizando la sintaxis de importación de objeto:

```jsx
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

```
