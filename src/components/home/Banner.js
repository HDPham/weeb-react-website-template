import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner() {
	return (
		<section id="homeBanner" className="d-flex flex-column justify-content-center align-items-center text-center text-white text-border-black" style={{background: `url("${process.env.PUBLIC_URL}/images/sword_art_online.jpg") center/cover`}}>
			<h2>I'm (name)</h2>
			<p>(job title)</p>
			<p>weeb at <FontAwesomeIcon icon="heart" className="text-danger" />.</p>
		</section>
	)
}

export default Banner;