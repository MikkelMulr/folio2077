import React from 'react';
import './About.style.scss';
import Slide from 'react-reveal/Slide';

export default function About() {
	return (
		<div className='About'>
			<Slide right>
				<h2>Hello, I'm Mike.</h2>
			</Slide>
			<Slide right>
				<div className='About--bottom-left'>
					<p>
						I come from a background in art, which has given me a deep appreciation for good design and knowing when
						things work and simply don't, a straight forward approach based on years of experience.
					</p>
					<p>
						Choosing to leave commercially working as an artist because I wanted to get involved in something bigger and
						challenging in new ways. Programming was something I've tinkered with for many years, eventually diving into
						webdev just became the thing that made sense, so here we are.
					</p>
				</div>
			</Slide>
			<Slide right>
				<div className='About--bottom-right'>
					<h3>My favorite tools</h3>
					<p>
						These are some of my go-to tools when I jump into most projects. Though this list will change as I get
						hands-on with more fun stuff.
					</p>
					<div className='About--bottom-right--icons'>
						<i class='devicon-javascript-plain' />
						<i class='devicon-html5-plain' />
						<i class='devicon-css3-plain' />
						<i class='devicon-sass-original' />
						<i class='devicon-react-original' />
						<i class='devicon-nodejs-plain' />
						<i class='devicon-photoshop-plain' />
						<i class='devicon-visualstudio-plain' />
					</div>
				</div>
			</Slide>
		</div>
	);
}
