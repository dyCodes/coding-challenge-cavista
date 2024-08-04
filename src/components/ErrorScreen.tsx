import React from 'react';

interface Props {
	text?: string;
}

const ErrorScreen: React.FC<Props> = ({ text }) => {
	return (
		<div className='container'>
			<h1 className='text-secondary text-base font-normal'>{text || 'Oops, something went wrong...'}</h1>
		</div>
	);
};

export default ErrorScreen;
