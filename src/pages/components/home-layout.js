import React, {Component} from 'react';
import './home-layout.css'

function HomeLayout(props) {
	return (
		<div className="container">
			<section className="HomeLayout">
				{props.children}
			</section>
		</div>
	)
}

export default HomeLayout;