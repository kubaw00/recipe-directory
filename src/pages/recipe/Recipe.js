import React from 'react';
import './Recipe.css';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

export default function Recipe() {
  const { id } = useParams();
  console.log(id);
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <div className='recipe'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='laoding'> Loading ...</div>}
      {recipe && (
        <>
          <h2 className='page-title'>Recipe</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className='method'>{recipe.method}</p>
        </>
      )}
    </div>
  );
}
