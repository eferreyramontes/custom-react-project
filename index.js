import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app')

const holaMundo = <h1>Hola Emma!!!</h1>;

// ReactDOM.render(Qué voy a renderizar, dónde)

ReactDOM.render(<Media title="Qué es bitcoin?" 
	author="Emmanuel Ferreyra" 
	image="./images/covers/bitcoin.jpg" 
	price={25}/>,
	app)