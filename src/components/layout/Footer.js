import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {

	render() {
		return (
			<footer className="d-flex justify-content-around align-items-center flex-wrap position-absolute pb-2 w-100 bg-dark fade-in">
				<small className="mt-2 text-white">© Copyright 2019 - <span stlye={{textDecoration: 'underline'}}>(your name)</span></small>
				<div className="mt-2">
					<a href="https://myanimelist.net/" target="_blank" rel="noopener noreferrer"><i><img src={`${process.env.PUBLIC_URL}/images/myanimelist.png`} alt="myanimelist" className="svg-inline--fa fa-2x"></img></i></a>
					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} className="fa-2x" /></a>
					<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} className="fa-2x" /></a>
					<a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} className="fa-2x" /></a>
					<a href="/#"><FontAwesomeIcon icon="envelope" className="fa-2x"></FontAwesomeIcon></a>
				</div>
			</footer>
		);
	}
}

export default Footer;