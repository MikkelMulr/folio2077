import React, { useState, useEffect } from 'react';
import './Projects.style.scss';
import ProjectCard from './ProjectCard/ProjectCard.component';

export default function Projects() {
	const [ p1, setP1 ] = useState(false);
	const [ p2, setP2 ] = useState(false);
	const [ p3, setP3 ] = useState(false);

	const projects = [ { title: 'LakeRidge Health' }, { title: 'Bookr' }, { title: 'The Other One' } ];

	const expandP1 = () => {
		setP1(!p1);
		setP2(false);
		setP3(false);
	};
	const expandP2 = () => {
		setP1(false);
		setP2(!p2);
		setP3(false);
	};
	const expandP3 = () => {
		setP1(false);
		setP2(false);
		setP3(!p3);
	};
	const closeP1 = () => {
		setP1(!p1);
	};
	useEffect(
		() => {
			console.log(p1, p2, p3);
		},
		[ p1, p2, p3 ]
	);

	return (
		<div className='Projects'>
			<h1 className='Projects--head'>Projects</h1>
			<ProjectCard details={projects[0]} expanded={p1} view={expandP1} close={closeP1} />
			<ProjectCard details={projects[1]} expanded={p2} view={expandP2} close={setP2} />
			<ProjectCard details={projects[2]} expanded={p3} view={expandP3} close={setP3} />
		</div>
	);
}