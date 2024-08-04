import httpClient from './axiosConfig';
import { MediaItem } from '../types';

export const fetchMedia = async (programType: string) => {
	const response = await httpClient.get('/feed/sample.json');
	const filteredData = response.data.entries.filter(
		(entry: MediaItem) => entry.programType === programType && entry.releaseYear >= 2010
	);
	const sortedData = filteredData.sort((a: MediaItem, b: MediaItem) => a.title.localeCompare(b.title));
	return sortedData.slice(0, 21); // limit to 21 items
};
