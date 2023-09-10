# Eventos en React: onClick, on Change

En esta lección, continuaremos explorando el desarrollo de aplicaciones web con React.js. Hasta ahora, hemos aprendido cómo maquetar aplicaciones web utilizando componentes, elementos, propiedades y atributos, así como cómo aplicar estilos CSS para mejorar la apariencia de nuestra aplicación.

Sin embargo, hemos llegado a un punto en el que nuestra aplicación se ve bien, pero aún no es totalmente funcional. Cuando intentamos realizar acciones como completar, eliminar, buscar o agregar elementos, nuestra aplicación no responde. Es hora de abordar este desafío y hacer que nuestra aplicación reaccione a las interacciones de los usuarios.

----
## Escuchando Eventos de Usuario en React.js

El primer paso para lograr que nuestra aplicación reaccione a las interacciones de los usuarios es escuchar los eventos de usuario desde React.js. Para esto, utilizaremos herramientas como `onChange`, `onClick` y otros eventos específicos que deseemos rastrear en nuestra aplicación.

```javascript
// Ejemplo de uso de eventos en React.js
<button onClick={handleClick}>Haz clic</button>
<input type="text" onChange={handleInputChange} />
```

En este ejemplo, hemos configurado un evento `onClick` en un botón y un evento `onChange` en un campo de entrada (`input`). Cuando el usuario haga clic en el botón o escriba en el campo de entrada, se ejecutará la función correspondiente (`handleClick` o `handleInputChange`) para manejar la interacción.

----
## Transformación de Eventos en Listeners

En React.js, los eventos deben ser precisos y deben comenzar con el prefijo "on". React se encarga de convertir estos eventos en listeners de eventos de JavaScript en el momento adecuado. Por ejemplo, `onClick` se traducirá en un `addEventListener` de JavaScript para el evento de clic.

```javascript
// Ejemplo de evento onClick en React.js
<button onClick={() => console.log("Haz clic en el botón")}>
  Haz clic en mí
</button>
```

Recuerda que debes encapsular cualquier código JavaScript que desees ejecutar en una función para que se ejecute en respuesta al evento.

## Capturando el Evento del Usuario

Cuando un evento se dispara, como un clic en un botón o un cambio en un campo de entrada, podemos recibir el evento como un parámetro en la función de manejo del evento. Este objeto de evento contiene información relevante sobre la interacción, como el tipo de evento y el objetivo (elemento) que desencadenó el evento.

```javascript
// Ejemplo de captura de un evento y su objetivo en React.js
function handleClick(event) {
  console.log(`Haz hecho clic en el elemento ${event.target}`);
}

function handleInputChange(event) {
  console.log(`Escribiste "${event.target.value}" en el campo de búsqueda`);
}
```

En estos ejemplos, hemos utilizado `event.target` para acceder al elemento HTML desde el cual se originó el evento. Esto nos permite realizar acciones específicas basadas en la interacción del usuario con ese elemento.

## Utilizando el Estado para Interacciones Dinámicas

Si bien hemos aprendido a detectar eventos de usuario, aún falta la parte fundamental: cómo utilizar estos eventos para crear una aplicación dinámica. El estado de React nos permite almacenar y actualizar información que afecta la representación de nuestra aplicación. En la próxima lección, profundizaremos en cómo usar el estado para hacer que nuestra aplicación reaccione a los cambios y eventos de los usuarios.
