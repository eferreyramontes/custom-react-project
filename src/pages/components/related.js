import React from 'react';
import logo from '../../../images/logo.png'
import './related.css'

function Related(props){
	return (
		<div className="Related">
			<ul id="slide-out" class="side-nav fixed">
				<li><div>
				      <div class="background">
				        <img src={logo} width={300}/>
				      </div>
				    </div>
				</li>
			    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
			    <li><a href="#!">Second Link</a></li>
			    <li><div class="divider"></div></li>
			    <li><a class="subheader">Subheader</a></li>
			    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
			  </ul>
		</div>
	)
}

export default Related;