import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link className='brand' to='/'>
          <h1>Cooking</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}
