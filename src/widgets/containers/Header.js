import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class HeaderContainer extends Component {
	render(){
		return createPortal(
			this.props.children,
			document.getElementById("header-container")
			);
	}
}

export default HeaderContainer;