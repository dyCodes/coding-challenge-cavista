import React, { useState } from 'react';
import MediaGrid from '../../components/UI/MediaGrid/MediaGrid';
import MediaCard from '../../components/UI/MediaCard/MediaCard';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import LoadingScreen from '../../components/LoadingScreen';
import ErrorScreen from '../../components/ErrorScreen';
import useMedia from '../../hooks/useMedia';
import { MediaType } from '../../types';
import { sortMediaData } from '../../utils/helpers';
import Button from '../../components/UI/Button/Button';

interface Props {}

const Series = (props: Props) => {
	const { data, isFetching, isError } = useMedia('series');
	const [searchQuery, setSearchQuery] = useState('');
	const [sortOption, setSortOption] = useState<string>('title_asc');
	const [visibleCount, setVisibleCount] = useState(21);

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
	displayData = sortMediaData(displayData || [], sortOption);

	// Slice the data based on visibleCount
	displayData = displayData.slice(0, visibleCount);

	const handleSearchChange = (query: string) => {
		setSearchQuery(query);
	};

	const handleSortChange = (option: string) => {
		setSortOption(option);
	};

	const handleViewMore = () => {
		const newCount = data.length - visibleCount > 21 ? visibleCount + 21 : data.length;
		setVisibleCount(newCount);
	};

	return (
		<div className='container'>
			<div className='listing-header flex-between'>
				<SearchForm handleSearch={handleSearchChange} searchQuery={searchQuery} />
				<FilterDropdown handleSortChange={handleSortChange} sortOption={sortOption} />
			</div>

			{displayData.length > 0 ? (
				<>
					<MediaGrid>
						{displayData?.map((item: any) => (
							<MediaCard key={item.title} title={item.title} image={item.images['Poster Art'].url} />
						))}
					</MediaGrid>

					{/* Show view more button when there is more data to show */}
					{displayData.length < data.length && !searchQuery && (
						<div className='flex-center mt-4'>
							<Button text='View More' modifier='primary' onClick={handleViewMore} />
						</div>
					)}
				</>
			) : (
				<ErrorScreen text='No data found!' />
			)}
		</div>
	);
};

export default Series;
