import React from 'react';
import logo from '../../../images/logo.png'
import './related.css'

function Related(props){
	return (
		<div>
		<ul id="slide-out" className="side-nav">
		<li><div>
				<div className="background">
			    	<img src={logo} width={300}/>
			    	</div>
			</div>
			</li>
	      <li><a href="#!">First Sidebar Link</a></li>
	      <li><a href="#!">Second Sidebar Link</a></li>
	      <li className="no-padding">
	        <ul className="collapsible collapsible-accordion">
	          <li>
	            <a className="collapsible-header">Dropdown<i className="material-icons">arrow_drop_down</i></a>
	            <div className="collapsible-body">
	              <ul>
	                <li><a href="#!">First</a></li>
	                <li><a href="#!">Second</a></li>
	                <li><a href="#!">Third</a></li>
	                <li><a href="#!">Fourth</a></li>
	              </ul>
	            </div>
	          </li>
	        </ul>
	      </li>
	    </ul>
	    <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
	    </div>
	)
}

export default Related;