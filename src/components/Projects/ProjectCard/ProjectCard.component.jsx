import React, { useEffect } from 'react';
import './ProjectCard.style.scss';

export default function ProjectCard({ details, view, expanded, close }) {
	useEffect(
		() => {
			console.log(details.img);
		},
		[ expanded ]
	);

	if (!expanded) {
		return (
			<div className='ProjectCard'>
				<h1 onClick={() => view()}>{details.title}</h1>
			</div>
		);
	} else {
		return (
			<div className='ProjectCard-expanded'>
				<div className='ProjectCard-expanded--left'>
					<h1 onClick={() => close()}>{details.title}</h1>
					<p>{details.desc}</p>
				</div>
				<div className='ProjectCard-expanded--right'>
					<div className='ProjectCard-expanded--right--img' style={{ backgroundImage: `url(${details.img})` }} />
					<div className='ProjectCard-expanded--right--btns'>
						<button>Visit</button>
						<button>Github</button>
					</div>
				</div>
			</div>
		);
	}
}
