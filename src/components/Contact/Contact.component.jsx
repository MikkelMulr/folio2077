import React from 'react';
import './Contact.style.scss';

export default function Contact() {
	return (
		<div className='Contact'>
			<h2>Contact</h2>
			<div className='Contact--links'>
				<a href='https://www.linkedin.com/in/michael-mueller-10a092161/' target='_blank' rel='noopener noreferrer'>
					Linkedin
				</a>
				<a href='https://github.com/MikkelMulr'>Github</a>
				<a href='mailto:muellerm.dev@gmail.com?subject=portfolio contact' rel='noopener noreferrer'>
					Email
				</a>
				<a href='https://www.linkedin.com/in/michael-mueller-10a092161/'>Resume</a>
			</div>
		</div>
	);
}
