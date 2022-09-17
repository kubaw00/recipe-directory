import React from 'react';
import './Search.css';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';

export default function Search() {
  const queryString = useLocation().search;
  const query = new URLSearchParams(queryString).get('q');

  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'> Loading ...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
