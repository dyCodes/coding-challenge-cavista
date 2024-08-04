import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';

interface Props {}

const Layout = (props: Props) => {
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
