import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';


import Page from './Page';      // Login function 
import Home from './Home'; 


function App() {
  


  return (
    <div className="App" >
    <img id="Titre" src='Titre.png'></img>
    <img id="Fond" src='Background.jpeg'></img>
      <BrowserRouter>
 
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Acceuil</NavLink>
          <NavLink activeClassName="active" to="/">La piscine et le sauna</NavLink>
          <NavLink activeClassName="active" to="/">Les gîtes</NavLink>
          <NavLink activeClassName="active" to="/">Les chambres d'hôtes</NavLink>
          <NavLink activeClassName="active" to="/">Tourisme</NavLink>
          <NavLink activeClassName="active" to="/">A propos de nous</NavLink>


        </div>
          <div class="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/page" component={Page} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;