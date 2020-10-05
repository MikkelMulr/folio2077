import React, { useEffect } from 'react';
import './ProjectCard.style.scss';

export default function ProjectCard({ details, view, expanded, close }) {
	useEffect(
		() => {
			console.log(':)');
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
					<h1>
						<span onClick={() => close()}>{details.title}</span>{' '}
						<a href={details.siteLink} target='_blank' rel='noopener noreferrer'>
							<i class='fas fa-external-link-alt' />
						</a>{' '}
						<a href={details.gitLink} target='_blank' rel='noopener noreferrer'>
							<i class='fas fa-code' />
						</a>
					</h1>
					<p>{details.desc}</p>
					<div className='ProjectCard-expanded--left--icons'>
						<i className={`devicon-${details.tools[0]}`} />
						<i className={`devicon-${details.tools[1]}`} />
						<i className={`devicon-${details.tools[2]}`} />
						<i className={`devicon-${details.tools[3]}`} />
						<i className={`devicon-${details.tools[4]}`} />
					</div>
				</div>
				<div className='ProjectCard-expanded--right'>
					<div className='ProjectCard-expanded--right--img' style={{ backgroundImage: `url(${details.img})` }} />
				</div>
			</div>
		);
	}
}
