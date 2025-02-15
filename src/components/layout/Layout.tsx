import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';
import useScrollToTop from '../../hooks/useScrollToTop';

interface Props {}

const Layout = (props: Props) => {
	useScrollToTop();

	return (
		<div>
			<Header />

			<main className='main'>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
