import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

function Portfolio() {
	const projects = [
		{
			id: 1,
			title: 'Search for the 7 Dragon Balls',
			description: 'The Dragon Balls were intended to be a thing of extraordinary magic and power, something to be revered, not for the ease of their method, but for the dream of never having to use them.',
			imageName: 'dragon_balls.png'
		},
		{
			id: 2,
			title: 'Enies Lobby Rescue',
			description: 'The Straw Hats, the Franky Family, and the shipwrights of the Galley-La Company arrive at Enies Lobby aboard Rocket Man to rescue Nico Robin and Franky. Standing in their way, however, are the forces of the World Government, including its deadly assassin organization, CP9.',
			imageName: 'enies_lobby_rescue_team.jpg'
		},
		{
			id: 3,
			title: 'Sasuke Recovery Mission',
			description: 'Sasuke Uchiha has ran away from the Hidden Leaf Village with Orochimaru\'s henchmen. Most of the Jounin has been sent out on missions, and only a handful have stayed behind to defend the village incase of attack. A five-man squad was gathered, composing of Shikamaru Nara, Naruto Uzumaki, Chōji Akimichi, Kiba Inuzuka, and Neji Hyūga, to find and retrieve Sasuke.',
			imageName: 'sasuke_recovery_team.webp'
		},
		{
			id: 4,
			title: 'Ryoka Invasion',
			description: 'Rukia Kuchiki is scheduled to be executed. In order to prevent the execution from proceeding, Ichigo Kurosaki, Uryū Ishida, Yasutora Sado, Orihime Inoue and Yoruichi Shihōin hatch a plan to infiltrate the Soul Society. However, standing between them and Rukia is the primary military branch of Soul Society, the Gotei 13.',
			imageName: 'ryoka_invasion_team.jpg'
		}
	];

	useEffect(() => {
		const mainEl = document.getElementById('projects');
		setTimeout(() => {
			mainEl.removeAttribute('hidden');
			mainEl.classList.add('fade-in');
		}, 2000);
	}, [])

	return (
		<Container tag="main" role="main" id="projects" className="container mt-5 text-center" hidden>
			<h2 className="font-go3">Projects & Work</h2>
			{projects.map(project => 
				<React.Fragment key={project.id}>
					<hr />
					<Row tag="article" className="justify-content-center align-items-center mt-4">
						{project.imageName ?
						<>
							<Col xs={10} md={7} lg={4}>
								<figure className="position-relative">
									<img src={`/images/${project.imageName}`} alt="#" className="position-absolute rounded" />
								</figure>
							</Col>
							<Col xs={10} lg={6}>
								<h3 className="font-go3">{project.title}</h3>
								<p className="lead">{project.description}</p>
							</Col>
						</> :
						<Col xs={10} lg={8}>
							<h3 className="font-go3">{project.title}</h3>
							<p className="lead">{project.description}</p>
						</Col>
						}
					</Row>
				</React.Fragment>
			)}
		</Container>
	);
}

export default Portfolio;