import React from 'react';
import ReactDOM from 'react-dom';
//import Media from './src/playlist/components/media';
import Playlist from './src/playlist/components/playlist';
import data from './src/resources/api.json';

const app = document.getElementById('app')

//const holaMundo = <h1>Hola Emma!!!</h1>;

// ReactDOM.render(Qué voy a renderizar, dónde)

//ReactDOM.render(<Media title="Qué es bitcoin?" 
//	author="Emmanuel Ferreyra" 
//	image="./images/covers/bitcoin.jpg" 
//	price={25}/>,
//	app)

ReactDOM.render(<Playlist data={data}/>, app);