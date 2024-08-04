import React from 'react';
import './CategoryCard.css';

interface Props {
	title: string;
	image?: string;
	tag: string;
}

const CategoryCard: React.FC<Props> = ({ title, image, tag }) => {
	return (
		<div className='card category-card'>
			<div className='card__box category-card__box'>
				<div className='category-card__tag'>{tag}</div>
				<img src={image || '/images/placeholder.png'} alt={title} />
			</div>

			<div className='category-card__content'>
				<h3 className='card__title category-card__title'>{title}</h3>
			</div>
		</div>
	);
};

export default CategoryCard;
