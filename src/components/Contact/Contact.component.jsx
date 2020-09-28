import React from 'react';
import './Contact.style.scss';

export default function Contact() {
	return (
		<div className='Contact'>
			<div className='Contact--head'>
				<h1>Contact</h1>
			</div>
			<div className='Contact--links'>
				<a href='#'>Linkedin</a>
				<a href='#'>Github</a>
				<a href='#'>Email</a>
				<a href='#'>Resume</a>
			</div>
		</div>
	);
}
