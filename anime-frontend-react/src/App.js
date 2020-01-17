import React from "react";
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import LoginPage from "./LoginPage";
import AnimeIndex from "./components/AnimeIndex";
import Menu from "./components/Menu";


class App extends React.Component {
  render() { 
    return (
      <div>
        <BrowserRouter>
          <div>
            <Menu />
            <Route exact path='/' component={AnimeIndex} />
            <Route exact path='/animes' component={AnimeIndex} />
            <Route exact path='/login' component={LoginPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;