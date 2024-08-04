import React from 'react';
import './FilterDropdown.css';

type Props = {};

const FilterDropdown: React.FC<Props> = () => {
	return (
		<div className='filter-dropdown'>
			<select className='filter-dropdown__select'>
				<option value='' disabled selected>
					Sort by
				</option>
				<option value='year_desc'>Year (Descending)</option>
				<option value='year_asc'>Year (Ascending)</option>
				<option value='title_desc'>Title (Descending)</option>
				<option value='title_asc'>Title (Ascending)</option>
			</select>

			<svg
				className='filter-dropdown__icon'
				viewBox='0 0 24 24'
				xmlns='http://www.w3.org/2000/svg'
				fill='#414141'>
				<g id='SVGRepo_bgCarrier' strokeWidth={0} />
				<g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
				<g id='SVGRepo_iconCarrier'>
					<rect x={0} fill='none' width={24} height={24} />
					<g>
						<path d='M7 10l5 5 5-5' />
					</g>
				</g>
			</svg>
		</div>
	);
};

export default FilterDropdown;
