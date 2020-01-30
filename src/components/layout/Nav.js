import React, { useState, useEffect } from 'react';
import { NavLink as NavLinkRR } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav as NavRS, NavItem, NavLink } from 'reactstrap';

function Nav(props) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const navEl = document.getElementsByTagName('nav')[0];
		const scrollNavBg = () => {
			if(window.pageYOffset > 0)
				navEl.classList.add('navbar-bg');
			else
				navEl.classList.remove('navbar-bg');
		}
		
		if(!isOpen) {
			if(props.location.pathname !== '/')
				navEl.classList.add('navbar-bg');
			else {
				if(window.pageYOffset === 0)
					navEl.classList.remove('navbar-bg');
				document.addEventListener('scroll', scrollNavBg, false);
			}
		}
		
		return () => {
			if(props.location.pathname === '/')
				document.removeEventListener('scroll', scrollNavBg, false);
		};
	}, [props.location.pathname, isOpen]);

	const toggle = () => setIsOpen(!isOpen);
	const onEnter = () => document.getElementsByTagName('nav')[0].classList.add('navbar-bg');
	const onExited = () => {
		if(props.location.pathname === '/' && window.pageYOffset === 0)
			document.getElementsByTagName('nav')[0].classList.remove('navbar-bg');
	}

	return (
		<Navbar expand={'lg'} className="fixed-top navbar-dark fade-in" style={{}}>
			<NavbarToggler onClick={toggle} className="ml-auto" />
			<Collapse navbar isOpen={isOpen} onEnter={onEnter} onExited={onExited}>
				<NavRS navbar className="ml-auto text-center">
					<NavItem>
						<NavLink tag={NavLinkRR} exact to="/">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={NavLinkRR} to="/projects">Projects</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={NavLinkRR} to="/contact">Contact</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={NavLinkRR} to="/miscellaneous">Misc.</NavLink>
					</NavItem>
				</NavRS>
			</Collapse>
		</Navbar>
	);
}

export default Nav;