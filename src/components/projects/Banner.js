import React, { useEffect } from 'react';

function Banner() {
	useEffect(() => {
		const audioEl = document.getElementsByTagName('audio')[0];
		setTimeout(() => audioEl.load(), 1000);
	}, [])
	
	return (
		<section id="projBanner" className="d-flex flex-column justify-content-center text-border-white fade-in" style={{background: `url("${process.env.PUBLIC_URL}/images/great_wave_of_kanagawa.jpg") center/cover`}}>
			<h2 className="font-weight-bold font-sm"><span>仕事一生懸命に。</span><br /><span>遊び一生懸命に。</span></h2>
			<p className="text-center"><small className="font-weight-bold">*Sponsored By Google Translate</small></p>
			<audio autoPlay id="whoosh">
				<source src={`${process.env.PUBLIC_URL}/audio/whoosh.wav`} type="audio/wav" />
			</audio>
		</section>
	);
}

export default Banner;