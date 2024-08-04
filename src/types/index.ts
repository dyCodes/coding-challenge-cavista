export interface MediaItem {
	title: string;
	description: string;
	programType: string;
	images: {
		'Poster Art': {
			url: string;
		};
	};
	releaseYear: number;
}
