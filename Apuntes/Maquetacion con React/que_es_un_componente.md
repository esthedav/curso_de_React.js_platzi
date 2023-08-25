# ¿Qué es un componente?

Todo en nuestra aplicación React serán componentes, los componentes son la base fundamental de nuestra aplicación.

### Características de los componentes

Los componentes en React.js son:

- Reutilizables
- Nos permiten tener interactividad

> 💡 Los componentes en el navegador, se verán como código HTML.

----
## Revisando nuestros archivos

A continuación, veremos los archivos que copiamos del repositorio.

### - README

Contiene la parte introductoria del curso, y es la primera información que se ve al abrir nuestro repositorio.

### - package.json

Contenido en varios objetos con sus propiedades, este contiene la configuración de nuestro proyecto. A continuación, veremos solo algunos de los más relevantes para este proyecto en específico.

#### Configuración inicial

En la configuración inicial podemos ver el nombre del proyecto, la versión y las dependencias.

> 💡 **Las Dependencies** es lo que se instala cuando corremos el comando `npm i`

```json
{
  "name": "platzi-intro-react-base",
  "version": "0.1.0",
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
```

#### Scripts

Los scripts son funciones que podemos ejecutar en nuestro proyecto y estas son:

- **start**: Nos permite iniciar el proyecto
- **build**: Nos permite armar el proyecto para su despliegue en la nube

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject"
  },
```

#### eslintConfig

Esta herramienta nos va dando configuraciones, que son reglas estandarizadas del lenguaje, esto nos permite dar uniformidad al trabajo y evitar errores futuros. En este caso podemos ver que tiene una configuración de `react-app`

```json
"eslintConfig": {
    "extends": [
      "react-app"
    ]
  }
```

#### browserlist

Esto le indica a React, la versión de ECMAScript a la cual se debe transpilar el proyecto para que este sea visible en nuestros navegadores.

```json
"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
```

### - .gitignore

Le indica a git, los archivos que no queremos se consideren para el repositorio, normalmente se ignoran archivos de desarrollo.

### - public

En esta carpeta se encuentran los elementos que son visibles al usuario como son el favicon, las imágenes y el archivo `index.html`

#### index.html

Cuando trabajamos con React.js, nuestro archivo `index.html`, únicamente tiene el `head` y en el `body`, solo cuenta con un `div` con un `id='root'`. Esto es por que todos los elementos se agregaran dentro de este `div id='root'`.


#### manifest.json

Este archivo es necesario cuando se trabaja con progresive web app.

#### robots.txt

Este archivo nos permite saber a qué se le puede hacer web scrapping

### - src

Esta carpeta contiene todo el contenido que no ve el usuario

#### index.js

Este es nuestro archivo principal de react, ya que a partir de este archivo se renderizarán los componentes hacia el frontend.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

#### App.js

Este archivo es nuestro componente principal, el cual nos servirá para ingresar más componente a nuestra aplicación.

💡 Es importante señalar que este archivo se encuentra escrito con la primera letra en mayúscula, ya que solo de esta forma React, sabrá que este archivo es un componente.

```js
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendamos React
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

----
## JSX

Cuando trabajamos en componentes veremos una sintaxis de HTML, sin embargo, realmente estamos trabajando con `JSX`, esto es realmente JavaScript que en su momento le indicará al navegador para crear el HTML.

Hay dos partes cruciales cuando trabajamos con `JSX`, el primero es que cuando tenemos una etiqueta HTML que comienzan con **mayúsculas**, realmente estos son componentes, y cuando la etiqueta comienza con **minúscula**, entonces es un elemento de React.

----
## Creando un componente

Ahora crearemos nuestro primer componente, para esto, iremos al archivo `App.js` y dentro de este crearemos una nueva función con el nombre `TodoItem` y dentro de esta crearemos los primeros elementos de nuestro Todo de la siguiente manera:

```jsx
function TodoItem() {
  return (
    <li>
      <span>✔</span>
      <p>Llorar con la llorona</p>
      <span>❌</span>
    </li>
  )
}
```

Para renderizar este componente lo agregaremos dentro de nuestro componente `App`, este componente lo llamaremos utilizando la sintaxis `<TodoItem />`, de la siguiente manera.

```jsx
function App() {
  return (
    <div className="App">
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendamos React
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

### Reutilizar el componente

Como ya tenemos el componente `TodoItem`, ahora lo podemos reutilizar, y esto lo podemos comprobar copiando el componente otras 2 veces, y esto lo debería renderizar según el número de veces que lo hubiéramos copiado.

```jsx
function App() {
  return (
    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendamos React
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```

Es importante mencionar que la finalidad no es copiar los elementos para que estos sean iguales, sino hacerlos dinámicos, esto es ejemplo para ver como podemos renderizar usando React.

----
## Propiedades

Las propiedades son elementos que nosotros podemos pasarle al `JSX`, para de esta manera generar elementos dinámicos, estos se pueden pasar empleando corchetes como se muestra a continuación.

```JSX
<TodoCount
  completed={3}
  total={5}
/>
```
