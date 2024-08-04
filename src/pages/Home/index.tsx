import React from 'react';
import { MEDIA_CATEGORIES } from '../../constants';
import { Link } from 'react-router-dom';
import CategoryCard from '../../components/UI/CategoryCard/CategoryCard';
import MediaGrid from '../../components/UI/MediaGrid/MediaGrid';

interface Props {}

const Home = (props: Props) => {
	return (
		<div className='container'>
			<MediaGrid>
				{MEDIA_CATEGORIES.map((category, index) => (
					<Link to={category.link} key={index}>
						<CategoryCard title={category.title} image={category.image} tag={category.tag} />
					</Link>
				))}
			</MediaGrid>
		</div>
	);
};

export default Home;
