import React from 'react';
import './MediaCard.css';

interface MediaCardProps {
	title: string;
	image?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ title, image }) => {
	return (
		<div className='card media-card'>
			<div className='card__box media-card__box'>
				<img className='card__img' src={image || '/images/placeholder.png'} alt={title} />
			</div>

			<div className='media-card__content'>
				<h3 className='card__title media-card__title'>{title}</h3>
			</div>
		</div>
	);
};

export default MediaCard;
