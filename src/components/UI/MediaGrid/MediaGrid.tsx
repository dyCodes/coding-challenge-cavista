import React from 'react';
import './MediaGrid.css';

interface Props {
	children: React.ReactNode;
}

const MediaGrid = ({ children }: Props) => {
	return <div className='media-grid'>{children}</div>;
};

export default MediaGrid;
