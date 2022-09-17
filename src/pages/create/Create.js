import React from 'react';
import './Create.css';
import { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const ref = useRef();
  const navigate = useNavigate();

  const { sendPost, data } = useFetch('http://localhost:3000/recipes', 'POST');

  function onSubmit(e) {
    e.preventDefault();
    sendPost({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + 'minutes',
    });
  }

  function addIngridient() {
    if (
      !ingredients.includes(newIngredient.trim()) &&
      newIngredient.trim() !== null
    ) {
      setIngredients((prevState) => [...prevState, newIngredient.trim()]);
    }
    setNewIngredient('');
    ref.current.focus();
  }

  useEffect(() => {
    if (data) {
      navigate('/');
    }
  }, [navigate, data]);

  return (
    <div className='create'>
      <h2 className='page-title'>Create a new recipe</h2>
      <form onSubmit={onSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            value={title}
            ref={ref}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className='ingredients'>
            <input
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            ></input>
            <button onClick={addIngridient}>add</button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((ing) => (
            <em key={ing}>{`${ing}, `} </em>
          ))}
        </p>
        <label>
          <span>Recipe Metchod</span>
          <textarea
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          ></textarea>
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            value={cookingTime}
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
