# ¿Qué es un componente?

Todo en nuestra aplicación React seran un componentes, los componentes son la base fundamental de nuestra aplicación.

### Carácteristicas de los componentes

Los componentes en React.js son:

- Reutilizables
- Nos permiten tener interactividad

> 💡 Los componentes en el navegador, se veran como código HTML.

----
## Revisando nuestros archivos

A continuación, veremos los archivos que copiamos del repositorio.

### - README

Contiene la parte introductoria del curso, y es la primera información que se ve al abrir nuestro repositorio.

### - package.json

Contenido en varios objetos con sus propiedades este contiene la configuración de nuestro proyecto. A continuación, veremos solo algunos de los más relevantes para este proyecto en especifico.

#### Configuración inicial

En la configuración incial podemos ver el nombre del proyecto, la versión y las dependencias.

> 💡 **Las Dependencies** es lo que se intala cuando corremos el comando `npm i`

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

Esta herramienta nos va dando configuraciones, que son reglas estandarizadas del lenguaje, esto nos permite dar uniformidad al trabajo y evitar errores futuros. En este caso podemos ver que tiene un configuración de `react-app`

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

En esta carpeta se encuentran los elementos que son visibles al usuario como son el favicon, las imagenes y el archivo `index.html`

#### index.html

Cuando trabajamos con React.js, nuestro archivo `index.html`, unicamente tiene el `head` y en el `body`, solo cuenta con un `div` con un `id='root'`. Esto es por que todos los elementos se agregaran dentro de este `div id='root'`.


#### manifest.json

Este archivo es necesario cuando se trabaja con progresive web app.

#### robots.txt

Este archivo nos permite saber a que se le puede hacer web scrapping

### - src

Esta carpeta contiene todo el contenido que no ve el usuario

#### index.js

Este es nuestro archivo principal de react, ya que apartir de este archivo se renderizarán los componentes hacia el frontend.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

#### App.js

Este archivo es nuestro componente principal, el cual nos servira para ingresar más componente a nuestra aplicación.

💡 Es importante señalar que este archivo se encuentra escrito con la primera letra en mayuscula, ya que solo de esta forma React, sabra que este archivo es un componente.

```js
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
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
