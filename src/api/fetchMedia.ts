import httpClient from './axiosConfig';
import { MediaType } from '../types';

export const fetchMedia = async (programType: string) => {
	const response = await httpClient.get('/feed/sample.json');

	const filteredData = response.data.entries.filter(
		(entry: MediaType) => entry.programType === programType && entry.releaseYear >= 2010
	);
	const sortedData = filteredData.sort((a: MediaType, b: MediaType) => a.title.localeCompare(b.title));
	return sortedData;
};
