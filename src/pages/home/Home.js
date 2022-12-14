import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import RecipeList from '../../components/RecipeList';
import './Home.css';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='laoding'> Loading ...</div>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
