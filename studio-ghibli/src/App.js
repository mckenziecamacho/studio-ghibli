import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header'
import HomePage from './components/HomePage'
import FilmDetails from './components/FilmDetails'
import About from './components/About';
import SearchBox from './components/SearchBox';
import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        items: [],
        
    }
}

    async componentDidMount(){
        const url = 'https://ghibliapi.herokuapp.com/films';
        const response = await fetch(url)
        const data = await response.json();
        this.setState({items: data})
    }
    render(){
  
      return (
        <div className="App">
          <Header />
          
        <Routes>
          <Route path="/" element={ <HomePage data={this.state.items}/> }/>
          <Route path="/film-details/:id" element={ <FilmDetails /> }/>
          <Route path="/about" element={ <About /> }/>
          <Route path="/home" element={ <HomePage data={this.state.items}/> }/>
          <Route path="/search" element={<SearchBox data={this.state.items}/>}/>
        </Routes>

        </div>
      );

    }
  
}

export default App;
