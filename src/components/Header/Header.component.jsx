import React, { useEffect } from 'react';
import './Header.style.scss';
import { Link } from 'react-scroll';
import MM from '../../assets/images/MM.png';
import burger from '../../assets/images/burger.png';

export default function Header({ setMenuView, menu }) {
	useEffect(() => {}, [ menu ]);

	return (
		<div className='Header' id='header'>
			<div className='Header--bg' />
			{menu ? (
				<div className='Header--menu'>
					<div className='Header--menu--head'>
						<img className='Header--menu--head--logo' src={MM} alt='logo' />
						<img className='Header--menu--head--btn' src={burger} alt='burger' onClick={() => setMenuView(!menu)} />
					</div>
					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => setMenuView(!menu)}
					>
						<p className='link'>About</p>
					</Link>
					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => setMenuView(!menu)}
					>
						<p className='link'>Projects</p>
					</Link>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						duration={1000}
						onClick={() => setMenuView(!menu)}
					>
						<p className='link'>Contact</p>
					</Link>
				</div>
			) : (
				''
			)}
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
