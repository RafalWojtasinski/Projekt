import React from 'react';
import "./searchBox.scss"

const SearchBox = (props) => {

	return (
		<div className='searchBox'>
			<input
				type="search"
				id="movie"
				className='search_input'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'
			></input>
		</div>
	);
};

export default SearchBox;
