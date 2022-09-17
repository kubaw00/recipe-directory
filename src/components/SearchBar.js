import './SearchBar.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    navigate(`/search?q=${term}`);
    setTerm('');
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
