import { useQuery } from '@tanstack/react-query';
import { fetchMedia } from '../api/fetchMedia';

type MediaType = 'movie' | 'series';

const useMedia = (programType: MediaType) => {
	return useQuery({
		queryKey: ['programType'],
		queryFn: () => fetchMedia(programType),
		// refetchOnMount: true,
	});
};

export default useMedia;
