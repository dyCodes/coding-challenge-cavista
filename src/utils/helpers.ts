export const sortMediaData = (data: any[], sortOption: string) => {
	switch (sortOption) {
		case 'year_desc':
			return data.sort((a, b) => b.releaseYear - a.releaseYear);
		case 'year_asc':
			return data.sort((a, b) => a.releaseYear - b.releaseYear);
		case 'title_desc':
			return data.sort((a, b) => b.title.localeCompare(a.title));
		case 'title_asc':
			return data.sort((a, b) => a.title.localeCompare(b.title));
		default:
			return data;
	}
};
