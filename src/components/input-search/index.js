import React from 'react';
import './input-search.scss';

import icon from '../../assets/img/search-icon.svg';

const InputSearch = ({ onChange }) => {
    return (
        <div className='search'>
            <img src={icon} className='search-icon'/>
            <input
                onChange={onChange}
                placeholder='Search for a person by name'
                className='search-input'
            />
        </div>
    );
};

export default InputSearch;
