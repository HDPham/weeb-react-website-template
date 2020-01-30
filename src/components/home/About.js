import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function About() {
	return (
		<Container tag="main" role="main" id="about" className="mt-5">
			<Row className="justify-content-center">
				<Col sm={9} md={7} lg={5} className="text-center">
					<figure className="mx-auto rounded-circle">
						<img src={`${process.env.PUBLIC_URL}/images/hamtaro.png`} alt="Hamtaro" className="position-relative w-100" />
					</figure>
					<h2 className="font-sm">こんにちは!</h2>
					<p className="lead">What you're seeing now is my normal state. This is a super saiyan, and this... this is what is known as a super saiyan that has ascended past a super saiyan or, you could just call this a super saiyan two. And this... is to go even further beyond!<br />AHHHHHHHHHHHHHHHHHHH!!! x100</p>
				</Col>
			</Row>
		</Container>
	);
}

export default About;