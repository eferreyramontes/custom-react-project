

npm init --> Para inicializar un proyecto JS

npm run build:prod

npm install react react-dom

### Componentes

* Funcional
* Puros
* Normal o de estado (más clásico)

Las propiedades son inmutables

### Estados

### Ciclo de vida de un componente

```javascript
classMiComponenteextendsComponents{

	constructor(){
	// Enlazo (bind) eventos y/o inicializo estado
	}
	componentWillMount(){
	// Se ejecuta antes de montar el componente
	// Se podría usar para hacer un setState()
	}
	render(){
	// Contiene todos los elementos a renderizar
	// podrías usarlo para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

	//Actualización:
	componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	}

}
```

Ciclo de vida de los componentes de React:

Montado: El momento en que el componente entra en escena.
Constructor: método llamado antes de que el componente sea montado (componente aun no se ve).
Podemos iniciar el estado
Enlazar eventos (bind).
Es el primer metodo que se llama al instanciar un componente.
componentWillMount: método llamado inmediatamente antes de que el componente se vaya a montar (componente aun no se ve).
Podemos hacer un setState()
No hacer llamados a un API o suscripción a eventos.
Render: método que contiene todos los elementos a renderizar (estructura del componente).
Contiene JSX en el return.
Puedes calcular propiedades nCompleto = name + lastName.
componentDidMount: Método llamado luego de montarse el componente (el componente ya esta en la pantalla).
Solo se lanza una vez.
Enlazar (bind) de eventos.
Es el primer método que se llama al instanciar un componente.
Aqui podemos utilizar APIs (Navegador o Datos Externos).
Actualización
componentWillReceiveProps: método llamado al recibir nuevas propiedades que sirve para actualizar el estado con base a las nuevas propiedades.
shouldComponentUpdate: método que condiciona si el componente se debe volver a renderizar, es utilizado para optimizar el rendimiento.
componentWillUpdate: método llamado antes de re-renderizar un componente, es utilizado para optimizar el rendimiento.
Render: método que realiza el re-render.
componentDidUpdate: método llamado luego del re-render.
Desmontado
componentWillUnmount: método llamado antes de que el componente sea retirado de la aplicación.
Manejo de Errores
componentDidCatch: método llamado cuando ocurre un error al renderizar el componente, el manejo de errores solamente ocurre en componentes hijos.

### PureComponents

Tiene el shouldComponentUpdate ya definido

### FunctionalComponents

Están hechos en una función. No tienen ciclo de vida.

## Smart Components & Dumb Components

### Presentacional Cómo se ve

* Puede contener smart components u otros componentes de UI
* Permiten composición con `[props.children]``
* No depeden del resto de la aplicación
* No especifica cómo los datos son cargados o mutados
* Recibe datos y callbacks solo con propiedades
* Rara vez tienen su propio estado
* Están escritos como componentes funcionales a menos que necesiten mejoras de performance. Sólo pueden ser Componentes funcionales o Pure Components.


### Containers 

Qué hace;

* Concetrado en el funcionamiento de la aplicación
* Contienen componentes de UI u otros containers
* No tienen estilos
* Proveen de datos a componentes de UI u otros contenedores
* Proveen de callbacks a la UI
* Normalmente tienen estado
* Llaman acciones
* Generados por higher order components

### ¿Por qué dividir los componentes en smart y dumbs?

* Separación de responsabilidades (Se parece a MVC, V para dumbs y C para smarts)
* Mejorar la capacidad de reutilizar componentes

### Eventos

https://reactjs.org/docs/events.html

