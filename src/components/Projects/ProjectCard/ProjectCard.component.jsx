import React, { useEffect } from 'react';
import './ProjectCard.style.scss';

export default function ProjectCard({ details, view, expanded, close }) {
	// const [ expanded, setExpanded ] = useState(false);

	useEffect(
		() => {
			console.log(expanded);
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
				<h1 onClick={() => close()}>{details.title}</h1>
				<p>{details.desc}</p>
			</div>
		);
	}
}
