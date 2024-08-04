import React from 'react';

interface Props {}

const LoadingScreen = (props: Props) => {
	return (
		<div className='container'>
			<h1 className='text-secondary text-base font-normal'>Loading...</h1>
		</div>
	);
};

export default LoadingScreen;
