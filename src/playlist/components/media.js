import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Styles from './media.css';

class Media extends PureComponent {
	// state = {
	// 	author : 'Emmanuel Ferreyra'
	// }

	// constructor(props) {
	// 	super(props);
	// 	//this.handleClick = this.handleClick.bind(this);
	// }

// Arrow functions heredan el contexto del contenedor
	// handleClick = (event) => {
	// 	//console.log(this.props.image)	
	// 	this.setState({
	// 		author: 'Ricardo'
	// 	})
	// }
	render(){
		const styles = {
			container: {
				fontSize: 21,
				color: '#44546b',
				cursor:'pointer',
				width:260,
				border:'1px solid red',
				minWidth: 100
			}
		}
		return (
			<div>
				<div className="col s12 m4">
					<div className="card blue-grey darken-1 playlist_card">
						<div className="card-image">
							<img className="image"
								src={this.props.cover}
								alt={this.props.title}
							/>
							<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons icon" onClick={this.props.handleOpenModal}>playlist_add</i></a>
						</div>
						<div className="card-content white-text">
							<span className="title">{this.props.title}</span>
							<p className="description">{this.props.author}</p>
						</div>
					</div>
				</div>
				
			</div>
			);
	}

//	handleClick(event) {
//		console.log(this.props.title)
//	}
}

Media.propTypes = {
	cover:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	author:PropTypes.string.isRequired
	//price:PropTypes.number.isRequired
}

export default Media;