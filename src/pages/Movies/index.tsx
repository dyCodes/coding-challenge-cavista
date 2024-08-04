import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import MediaGrid from '../../components/UI/MediaGrid/MediaGrid';
import MediaCard from '../../components/UI/MediaCard/MediaCard';

interface Props {}

const Movies = (props: Props) => {
	return (
		<div className='container'>
			<div className='listing-header flex-between'>
				<SearchForm />
				<FilterDropdown />
			</div>

			<MediaGrid>
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
				<MediaCard title='Program Title' image='/images/poster.jpg' />
			</MediaGrid>
		</div>
	);
};

export default Movies;
