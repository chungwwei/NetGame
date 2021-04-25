import React from 'react';
import logo from './logo.svg';
import './App.css';
import './home.css';
import BoardComponent from './components/BoardComponent';
import { LightOff } from './game/LightOff';
import FloodTubeComponent from './components/FloodTubeComponent';
import { FloodTubes } from './game/FloodTube';
import { HudComponent } from './components/HudComponent';
import SokobanComponent from './components/SokobanComponent';
import { Sokoban } from './game/sokoban/Sokoban';
import { Card, CardContent, CardActionArea } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { InertiaApp } from './components/inertiaComponent/InertiaApp';
import { Inertia } from './game/inertia/Inertia';
import { AppBarComponent } from './components/home/AppBarComponent';
import { CollectionComponent } from './components/home/CollectionComponent';

function App() {
  // var light_off = new LightOff(5, 5)
  var flood_tube = new FloodTubes(10, 10)
  var sokoban = new Sokoban(10, 10)
  return (
    // for deployment purposec
    <div className='App'>
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router>
        <Switch>
          <AppBarComponent />
        </Switch>
        <CollectionComponent />
        <p> Enjoy the classic puzzles games </p>
        <p> Made By ChuangWei Ma</p>
      </Router>

    </div>
  );
}

export default App;
