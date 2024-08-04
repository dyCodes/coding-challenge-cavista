import React, { useState } from 'react';
import MediaGrid from '../../components/UI/MediaGrid/MediaGrid';
import MediaCard from '../../components/UI/MediaCard/MediaCard';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import LoadingScreen from '../../components/LoadingScreen';
import ErrorScreen from '../../components/ErrorScreen';
import useMedia from '../../hooks/useMedia';
import { MediaType } from '../../types';

interface Props {}

const Series = (props: Props) => {
	const [searchQuery, setSearchQuery] = useState('');
	const { data, isFetching, isError } = useMedia('series');

	if (isFetching) return <LoadingScreen />;

	if (isError) return <ErrorScreen />;

	if (!data) {
		return <ErrorScreen text='No data available!' />;
	}

	// Filter data based on search query
	const displayData = data
		?.filter((item: MediaType) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
		.slice(0, 21);

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
	};

	return (
		<div className='container'>
			<div className='listing-header flex-between'>
				<SearchForm handleSearch={handleSearchChange} searchQuery={searchQuery} />
				<FilterDropdown />
			</div>

			<MediaGrid>
				{displayData?.map((item: any) => (
					<MediaCard key={item.title} title={item.title} image={item.images['Poster Art'].url} />
				))}
			</MediaGrid>
		</div>
	);
};

export default Series;
