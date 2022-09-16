import './SearchBar.css';
import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  }

  return (
    <div className='searchbar'>
      <form onSubmit={onSubmit}>
        <label htmlFor='search'>Search: </label>
        <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
      </form>
    </div>
  );
}
