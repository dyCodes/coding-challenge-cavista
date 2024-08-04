import React from 'react';
import MediaCard from './MediaCard';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('MediaCard Component', () => {
	it('renders with the given title and image', () => {
		const title = 'Sample Movie';
		const image = 'sample-image.jpg';
		render(<MediaCard title={title} image={image} />);

		expect(screen.getByAltText(title)).toHaveAttribute('src', image);
		expect(screen.getByText(title)).toBeInTheDocument();
	});
});
