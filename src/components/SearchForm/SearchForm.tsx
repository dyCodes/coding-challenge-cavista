import React from 'react';
import './SearchForm.css';
import searchIcon from '../../assets/icons/searchIcon.png';

type Props = {
	searchQuery: string;
	handleSearch: (query: string) => void;
};

const SearchForm: React.FC<Props> = ({ searchQuery, handleSearch }) => {
	return (
		<div className='search-box'>
			<input
				type='text'
				className='search-box__input'
				placeholder='Search...'
				value={searchQuery}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<div className='search-box__btn'>
				<img src={searchIcon} className='search-box__icon' alt='Search' />
			</div>
		</div>
	);
};

export default SearchForm;
