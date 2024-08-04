import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import MediaGrid from '../../components/UI/MediaGrid/MediaGrid';
import MediaCard from '../../components/UI/MediaCard/MediaCard';
import LoadingScreen from '../../components/LoadingScreen';
import ErrorScreen from '../../components/ErrorScreen';
import useMedia from '../../hooks/useMedia';
import { MediaType } from '../../types';
import { sortMediaData } from '../../utils/helpers';

interface Props {}

const Movies = (props: Props) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [sortOption, setSortOption] = useState<string>('');
	const { data, isFetching, isError } = useMedia('movie');

	if (isFetching) return <LoadingScreen />;

	if (isError) return <ErrorScreen />;

	if (!data) {
		return <ErrorScreen text='No data available!' />;
	}

	// Filter data based on search query
	let displayData = data?.filter((item: MediaType) =>
		item.title.toLowerCase().includes(searchQuery.toLowerCase())
	);
	// Sort data based on sort option
	displayData = sortMediaData(displayData || [], sortOption).slice(0, 21);

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
	};

	const handleSortChange = (option: string) => {
		setSortOption(option);
	};

	return (
		<div className='container'>
			<div className='listing-header flex-between'>
				<SearchForm handleSearch={handleSearchChange} searchQuery={searchQuery} />
				<FilterDropdown handleSortChange={handleSortChange} sortOption={sortOption} />
			</div>

			<MediaGrid>
				{displayData?.map((item: any) => (
					<MediaCard key={item.title} title={item.title} image={item.images['Poster Art'].url} />
				))}
			</MediaGrid>

			{!displayData.length && <ErrorScreen text='No data found!' />}
		</div>
	);
};

export default Movies;
