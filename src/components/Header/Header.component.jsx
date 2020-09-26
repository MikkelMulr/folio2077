import React from 'react';
import './Header.style.scss';

export default function Header() {
	return (
		<div className='Header' id='header'>
			<div className='Header--bg' />
			<h1 className='Header--name1'>Mike</h1>
			<h1 className='Header--name2'>Mueller</h1>
			<div className='Header--subtext'>
				<p className='Header--subtext--subtext-one'>Developer</p>
				<p className='Header--subtext--subtext-two'>Artist</p>
				<p className='Header--subtext--subtext-three'>Maker</p>
			</div>

			<div className='Header--spinner1' />
			<div className='Header--spinner2' />
			<div className='Header--spinner3' />
			<div className='Header--sideLine' />
			<div className='Header--front' />
			<div className='Header--timeLine' />
			<div className='Header--timeDot-One' />
			<div className='Header--timeDot-Two' />
			<div className='Header--timeDot-Three' />
		</div>
	);
}
