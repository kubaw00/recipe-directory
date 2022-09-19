import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import useTheme from '../hooks/useTheme';

export default function Navbar() {
  const { color } = useTheme();

  return (
    <div style={{ backgroundColor: color }} className='navbar'>
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
