import React, { useState, useEffect } from 'react';
import './Projects.style.scss';
import ProjectCard from './ProjectCard/ProjectCard.component';
import bookr from '../../assets/images/bookr.png';
import lakebg from '../../assets/images/lakebg.png';
import AVLN from '../../assets/images/AVLN.png';

export default function Projects() {
	const [ p1, setP1 ] = useState(false);
	const [ p2, setP2 ] = useState(false);
	const [ p3, setP3 ] = useState(false);

	const projects = [
		{
			title: 'Lakeridge Health',
			desc:
				'Application developed for Lakeridge Health as an interactive way for potential patients to have some common myths and misconceptions about clinical trials dispelled.',
			img: lakebg,
			tools: [ 'vuejs-plain', 'javascript-plain', 'html5-plain', 'sass-original', 'nodejs-plain' ],
			siteLink: 'https://lakeridgemyths.netlify.app/',
			gitLink: 'https://github.com/MikkelMulr/lakeridge'
		},
		{
			title: 'Bookr',
			desc:
				'Full-stack application allowing user registration, custom event and guest-list creation and sending of invitions all from one platform.',
			img: bookr,
			tools: [ 'react-original', 'javascript-plain', 'html5-plain', 'sass-original', 'nodejs-plain' ],
			siteLink: '',
			gitLink: 'https://github.com/MikkelMulr/bookr'
		},
		{
			title: 'Avalon Resilient',
			desc:
				'A Materialize based home page for a fictional technology company, straight forward and clean through and through.',
			img: AVLN,
			tools: [ 'javascript-plain', 'html5-plain', 'css3-plain', 'npm-original-wordmark', 'nodejs-plain' ],
			siteLink: 'https://app.netlify.com/sites/sharp-mcnulty-49a2eb/overview',
			gitLink: 'https://github.com/MikkelMulr/avln_res'
		}
	];

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
