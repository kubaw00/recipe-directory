import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='search' element={<Search />} />
          <Route path='recipe/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
