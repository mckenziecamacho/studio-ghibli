import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import { BrowserRouter as Router } from 'react-router-dom';
import FilmDetails from './components/FilmDetails'
import FilmCard from './components/FilmCard';

function App() {
  return (
    <div className="App">
      <Header />
    <Routes>
      <Route path="/" element={ <HomePage /> }/>
      <Route path="/studio-ghibli" element={ <HomePage />}/>
      <Route path="/FilmDetails" element={<FilmDetails />}/>
      {/* <Route path="/home" element={<HomePage />}/> */}
    </Routes>
    <FilmCard />
    </div>
  );
}

export default App;
