import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.modules.scss';

type SearchBarProps = {
    submit: (value: string) => void;
    value: string;
    change: (value: string) => void;
    showResult: boolean;
};
const SearchBar: React.FC<SearchBarProps> = ({ submit, value, change, showResult }) => {
    const [input, setInput] = useState<string>('');
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submit(input);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        change(event.target.value);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className="search">
            <input
                className="searchbar-input"
                type="text"
                value={value}
                placeholder="Enter city"
                onChange={(e) => onChange(e)}
            ></input>
            <span className="searchbar-icon">
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </form>
    );
};

export default SearchBar;
