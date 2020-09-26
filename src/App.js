import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Header from './components/Header/Header.component';
import MM from './assets/images/MM.png';
import burger from './assets/images/burger.png';
import About from './components/About/About.component';
import Contact from './components/Contact/Contact.component';
import Projects from './components/Projects/Projects.component';
import Slide from 'react-reveal/Slide';

const App = () => (
	<div className='App'>
		<nav className='navbar'>
			<div className='navbar-menu'>
				<img src={burger} alt='burger' />
			</div>
			<div className='navbar-links'>
				<Link activeClass='active' to='about' spy={true} smooth={true} duration={1000}>
					<p className='link'>About</p>
				</Link>
				<Link activeClass='active' to='projects' spy={true} smooth={true} duration={1000}>
					<p className='link'>Projects</p>
				</Link>
				<Link activeClass='active' to='contact' spy={true} smooth={true} duration={1000}>
					<p className='link'>Contact</p>
				</Link>
			</div>
			<div className='navbar-logo'>
				<Link activeClass='active' to='header' spy={true} smooth={true} duration={1000}>
					<img src={MM} alt='logo' />
				</Link>
			</div>
			<div className='navbar-spacer' />
			<div className='navbar-socials'>
				<p>
					<i className='devicon-linkedin-plain' />
				</p>
				<p>
					<i className='devicon-github-plain' />
				</p>
				<p>@</p>
			</div>
		</nav>
		<Header />
		<div className='container'>
			<div className='timeline' />
			<div className='padding' />
			<Slide right>
				<section className='about' id='about'>
					<About />
				</section>
			</Slide>
			<Slide right>
				<section className='projects' id='projects'>
					<Projects />
				</section>
			</Slide>
			<Slide right>
				<section className='contact' id='contact'>
					<Contact />
				</section>
			</Slide>
		</div>
	</div>
);

export default App;
