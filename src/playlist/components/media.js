import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import './media.css'

class Media extends Component {
	state = {
		author : 'Emmanuel Ferreyra'
	}

	constructor(props) {
		super(props);
		//this.handleClick = this.handleClick.bind(this);
	}

// Arrow functions heredan el contexto del contenedor
	handleClick = (event) => {
		//console.log(this.props.image)	
		this.setState({
			author: 'Ricardo'
		})
	}
	render(){
		const styles = {
			container: {
				fontSize: 21,
				color: '#44546b',
				cursor:'pointer',
				width:260,
				border:'1px solid red'
			}
		}
		return (
			//<div style={styles.container}>
			<div className="row">
				<div className="col s12 m6">
					<div className="card blue-grey darken-1">
						<div className="card-image">
							<img 
								src={this.props.image}
								alt="Bitcoin image"
							/>
						</div>
						<div className="card-content white-text">
							<span className="card-title">{this.props.title}</span>	
							<p>{this.state.author}</p>	
						</div>
						<div className="card-action center-align">
							<a href="">Comprar a {this.props.price} U$D</a>
						</div>
						<div className="card-action center-align">
							<button type="submit" className="btn waves-effect waves-light center-align" onClick={this.handleClick}>Comprar</button>
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
	image:PropTypes.string.isRequired,
	title:PropTypes.string.isRequired,
	author:PropTypes.string.isRequired,
	price:PropTypes.number.isRequired
}

export default Media