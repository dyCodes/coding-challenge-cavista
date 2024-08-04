import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';

interface Props {}

const Header = (props: Props) => {
	return (
		<header className='header'>
			<div className='header__top bg-primary'>
				<div className='header__navbar container flex-between'>
					<Link to='/' className='header__logo'>
						DEMO Streaming
					</Link>

					<div className='navbar__right flex-row'>
						<Link to='#' className='header__link'>
							Log in
						</Link>

						<Link to='#' className='header__btn'>
							<Button text='Start your free trial' modifier='secondary' />
						</Link>
					</div>
				</div>
			</div>

			<div className='header__bottom bg-secondary'>
				<div className='container'>
					<h1 className='header__title'>Popular Titles</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
