import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './components/layout/Nav';
import HomeBanner from './components/home/Banner';
import ProjectsBanner from './components/projects/Banner';
import About from './components/home/About';
import Portfolio from './components/projects/Portfolio';
import Contact from './components/contact/Contact';
import Misc from './components/misc/Misc';
import Footer from './components/layout/Footer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faHeart, faEnvelope, faFacebook, faLinkedin, faGithub);

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<header>
				<h1 id="brand" className="fade-in">
					<Link to="/">
						<img src={`${process.env.PUBLIC_URL}/images/straw_hat_jolly_roger_32x32.png`} alt="Straw Hat Jolly Roger" /><span className="d-none d-sm-inline align-middle text-white font-weight-bold"> Weeb React Website Template</span>
					</Link>
				</h1>
				<Route render={(props) => 
					(<Nav location={props.location}></Nav>)
				}></Route>
				<Route exact path="/" component={HomeBanner}></Route>
				<Route exact path="/projects" component={ProjectsBanner}></Route>
			</header>
			<Route exact path="/" component={About}></Route>
			<Route exact path="/projects" render={() => (
				<Portfolio></Portfolio>
			)}>
			</Route>
			<Route exact path="/contact" component={Contact}></Route>
			<Route exact path="/miscellaneous" component={Misc}></Route>
			<Footer></Footer>
		</Router>
	);
}

export default App;