import React, { useEffect } from 'react';

function Misc() {
	useEffect(() => {
		const rootEl = document.getElementById('root');
		rootEl.style.paddingBottom = '0';
		return () => {
			rootEl.removeAttribute('style');
		};
	}, [])
	
	return (
		<main role="main" id="miscellaneous" className="d-flex flex-column min-vh-100 text-white text-center justify-content-center align-items-center">
			<h2 className="fade-in"><span className="display-1">Sword Art Online<br />sucks!</span><br />and so does Fairy Tail</h2>
		    <a href="https://www.youtube.com/watch?v=WviwYLZubSw?autoplay=1" target="_blank" rel="noopener noreferrer">circada 3301</a>
		    <audio autoPlay loop>
		        <source src={`${process.env.PUBLIC_URL}/audio/papepipu.mp3`} type="audio/mpeg" />
		    </audio>
		</main>
	)
}

export default Misc;