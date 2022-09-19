import React from 'react';
import './ThemeSelector.css';
import useTheme from '../hooks/useTheme';
import changeModeIcon from '../assets/changeMode.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };
  console.log(mode);

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          src={changeModeIcon}
          alt='change mode dark/light'
          onClick={toggleMode}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(50%)' }}
        ></img>
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}
