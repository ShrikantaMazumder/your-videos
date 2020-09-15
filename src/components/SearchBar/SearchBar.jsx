import React, { useState } from 'react';
import classes from './SearchBar.module.css';


const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');

    const handleOnChange = (e) => {
        setTerm(e.target.value);
    }
    const onFormSubmit = e => {
        e.preventDefault();
        onSearchSubmit(term);
    }

    return (
        <div className="ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={term} onChange={handleOnChange}/>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;