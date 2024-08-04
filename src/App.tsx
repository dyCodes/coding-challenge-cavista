import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Movies from './pages/Movies';
import Series from './pages/Series';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/series' element={<Series />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
