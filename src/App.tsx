import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Movies from './pages/Movies';
import Series from './pages/Series';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				retry: 2,
			},
		},
	});

	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/movies' element={<Movies />} />
						<Route path='/series' element={<Series />} />
					</Route>
				</Routes>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
