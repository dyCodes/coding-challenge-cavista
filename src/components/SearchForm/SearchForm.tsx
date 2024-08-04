import React from 'react';
import './SearchForm.css';
import searchIcon from '../../assets/icons/searchIcon.png';

type Props = {};

const SearchForm: React.FC<Props> = () => {
	return (
		<div className='search-box'>
			<input type='text' className='search-box__input' placeholder='Search...' />
			<div className='search-box__btn'>
				<img src={searchIcon} className='search-box__icon' alt='Search' />
			</div>
		</div>
	);
};

export default SearchForm;
