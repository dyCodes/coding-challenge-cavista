import React from 'react';
import CategoryCard from './CategoryCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('CategoryCard Component', () => {
	it('renders with the given title, image, and tag', () => {
		const title = 'Popular Anime';
		const tag = 'ANIME';
		const image = 'sample-image.jpg';

		render(<CategoryCard title={title} image={image} tag={tag} />);

		expect(screen.getByAltText(title)).toHaveAttribute('src', image);
		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(tag)).toBeInTheDocument();
	});

	it('renders with a placeholder image if no image is provided', () => {
		const title = 'Sample Category';
		const tag = 'New';

		render(<CategoryCard title={title} tag={tag} />);

		expect(screen.getByAltText(title)).toHaveAttribute('src', '/images/placeholder.png');
		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(tag)).toBeInTheDocument();
	});
});
