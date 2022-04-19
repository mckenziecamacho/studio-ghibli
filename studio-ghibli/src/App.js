import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import { BrowserRouter as Router } from 'react-router-dom';
import FilmDetails from './components/FilmDetails'
// import FilmCard from './components/FilmCard';
import About from './components/About';
import SearchBox from './components/SearchBox';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <FilmCard/> */}
      <SearchBox/>
      <SearchBar/>
    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="/film-details" element={ <FilmDetails /> }/>
      <Route path="/about" element={ <About /> }/>
      <Route path="/home" element={ <HomePage /> }/>
    </Routes>
    </div>
  );
}

export default App;
