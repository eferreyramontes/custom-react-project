import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home'
import data from '../resources/api.json'

const app = document.getElementById('home-container')

ReactDOM.render(<Home data={data}/>, app);