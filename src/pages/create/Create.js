import React from 'react';
import './Create.css';
import { useState } from 'react';

export default function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    console.log(title, method, cookingTime);
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Create a new recipe</h2>
      <form onSubmit={onSubmit}>
        <label>
          <span>Recipe title</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </label>
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
