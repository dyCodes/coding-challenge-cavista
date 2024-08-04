import React from 'react';
import './CategoryCard.css';

interface Props {
	title: string;
	image?: string;
	tag: string;
}

const CategoryCard: React.FC<Props> = ({ title, image, tag }) => {
	return (
		<div className='category-card'>
			<div className='category-card__img'>
				<div className='category-card__tag'>{tag}</div>
				<img src={image || '/images/placeholder.png'} alt={title} />
			</div>

			<div className='category-card__content'>
				<h3 className='category-card__title'>{title}</h3>
			</div>
		</div>
	);
};

export default CategoryCard;
