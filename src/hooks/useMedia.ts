import { useQuery } from '@tanstack/react-query';
import { fetchMedia } from '../api/fetchMedia';

type Props = 'movie' | 'series';

const useMedia = (programType: Props) => {
	return useQuery({
		queryKey: ['programType'],
		queryFn: () => fetchMedia(programType),
		refetchOnMount: true,
	});
};

export default useMedia;
