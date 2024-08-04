import React from 'react';
import MediaGrid from '../../components/UI/MediaGrid/MediaGrid';
import MediaCard from '../../components/UI/MediaCard/MediaCard';
import SearchForm from '../../components/SearchForm/SearchForm';
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown';
import LoadingScreen from '../../components/LoadingScreen';
import ErrorScreen from '../../components/ErrorScreen';
import useMedia from '../../hooks/useMedia';

interface Props {}

const Series = (props: Props) => {
	const { data, isFetching, isError } = useMedia('series');

	if (isFetching) return <LoadingScreen />;

	if (isError) return <ErrorScreen />;

	if (!data) {
		return <ErrorScreen text='No data available!' />;
	}

	return (
		<div className='container'>
			<div className='listing-header flex-between'>
				<SearchForm />
				<FilterDropdown />
			</div>

			<MediaGrid>
				{data?.map((item: any) => (
					<MediaCard key={item.title} title={item.title} image={item.images['Poster Art'].url} />
				))}
			</MediaGrid>
		</div>
	);
};

export default Series;
