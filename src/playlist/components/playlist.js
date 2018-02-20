import React, {Component} from 'react';
import Content from './content.js'
import './playlist.css';

// class Playlist extends Component {
// 	render() {
// 		console.log(this.props)
// 		const categories = this.props.data.categories
// 		return (
// 			categories.map((category) => {
// 				return <Content key={category.id} {...category}/>	
// 			}));
// 	}
// }

// Functional components
function Playlist(props) {
	console.log(props)
	const categories = props.data.categories
	return (
		categories.map((category) => {
			return <Content key={category.id} {...category}/>	
		}));
}

export default Playlist;