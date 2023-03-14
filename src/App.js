
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Map from "./components/Map_GG/Map";
import Login from "./containers/Login";
import Signin  from './containers/Signin';
import Home from './containers/Home'
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        
        <header className="App-header">
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path='/signin' element = {<Signin/>}/>
            <Route path= '/map' element = {<Map/>}/>
          </Routes>

        </header>
      </div>
    );
  }
}
export default App;
