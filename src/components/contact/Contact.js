import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Fade, Alert } from 'reactstrap';

function Contact() {
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [isRequired, setIsRequired] = useState(false);
	const [mail, setMail] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	
	const sendMail = (e) => {
		e.preventDefault();
		const fadeEl = document.getElementsByClassName('fade')[0];
		if(isFormSubmitted)
			fadeEl.style.transition = 'none';
		else
			fadeEl.removeAttribute('hidden');
		setIsFormSubmitted(!isFormSubmitted);
		setIsRequired(false);
		setMail({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	};

	const onChange = (e) => {
		setMail({
			...mail,
			[e.target.name]: e.target.value
		});
	};

	const onClick = () => {
		setIsRequired(true);
	};

	const onExited = () => {
		const fadeEl = document.getElementsByClassName('fade')[0];
		fadeEl.style.transition = null;
		setIsFormSubmitted(!isFormSubmitted);
	};

	return (
		<Container tag="main" role="main" className="fade-in">
			<Row className="justify-content-center">
				<Col xs={10} sm={9} md={8} lg={7} xl={6} className="border border-info rounded" style={{marginTop: '7.5rem'}}>
					<figure className="position-absolute p-1 border border-info rounded-circle bg-white" style={{top: '-2.5rem', left: '50%', transform: 'translateX(-50%)', height: '5rem', width: '5rem'}}>
						<img src={`${process.env.PUBLIC_URL}/images/l_logo.png`} alt="L's Logo" className="w-100 display-4 font-weight-bold" />
					</figure>
					<h2 className="mt-5 text-center">
						<img src={`${process.env.PUBLIC_URL}/images/death_note_message.png`} alt="Drop Me a Message" />
					</h2>
					<p className="text-center">"In the ninja world, those who break the rules are scum. But, those who abandon their friends are even worse than scum."<br />- Obito Uchiha <img src={`${process.env.PUBLIC_URL}/images/konohagakure_symbol.png`} alt="Konohagakure Symbol" style={{width: '1rem'}} /></p>
					<Form onSubmit={sendMail}>
						<FormGroup>
							<Label htmlFor="contactName" className="col-form-label">Name:<strong><abbr title="required">*</abbr></strong></Label>
							<Input type="text" name="name" id="contactName" className="form-control w-auto" value={mail.name} required={isRequired} onChange={onChange} />
						</FormGroup>
						<FormGroup>
							<Label htmlFor="contactEmail">Email:<strong><abbr title="required">*</abbr></strong></Label>
							<Input type="email" name="email" id="contactId" className="form-control w-auto" value={mail.email} required={isRequired} onChange={onChange} />
						</FormGroup>
						<FormGroup>
							<Label htmlFor="contactSubject">Subject:</Label>
							<Input type="text" name="subject" id="contactSubject" className="form-control w-auto" value={mail.subject} onChange={onChange} />
						</FormGroup>
						<FormGroup>
							<Label htmlFor="contactMessage">Message:<strong><abbr title="required">*</abbr></strong></Label>
							<Input type="textarea" name="message" id="contactMessage" className="form-control" value={mail.message} required={isRequired} onChange={onChange} />
						</FormGroup>
						<FormGroup className="text-center">
							<Button type="submit" outline color="info" onClick={onClick}>Submit</Button>
						</FormGroup>
					</Form>
				</Col>
			</Row>
			<Fade in={isFormSubmitted} onExited={onExited} className="mt-4 text-center" hidden><Alert className="d-inline-block">Message Sent!</Alert></Fade>
		</Container>
	);
}

export default Contact;