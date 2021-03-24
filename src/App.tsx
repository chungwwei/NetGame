import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { LightOff } from './game/LightOff';
import FloodTubeComponent from './components/FloodTubeComponent';
import { FloodTubes } from './game/FloodTube';
import { HudComponent } from './components/HudComponent';
import SokobanComponent from './components/SokobanComponent';
import { Sokoban } from './game/sokoban/Sokoban';
import { Card, CardContent, CardActionArea } from '@material-ui/core';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  // var light_off = new LightOff(5, 5)
  var flood_tube = new FloodTubes(10, 10)
  var sokoban = new Sokoban(10, 10)
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <SokobanComponent game={sokoban}></SokobanComponent> */}
          {/* <BoardComponent game={light_off}></BoardComponent> */}
          {/* <FloodTubeComponent game={flood_tube}></FloodTubeComponent> */}
          <Switch>
            <Route path="/" exact> 
              <h1>HOME</h1>
            </Route> 
            <Route path="/sokoban" exact>
              <SokobanComponent game={sokoban}></SokobanComponent>
            </Route> 
            <Route exact path='/flushtubes'>
              <HudComponent game={flood_tube}></HudComponent>   
            </Route> 
          </Switch>
          <Link to='/sokoban'>
            <Card>
              <CardActionArea>
                <CardContent>
                  <h1> Sokoban </h1>
              </CardContent>
              </CardActionArea>
            </Card>
          </Link>

          <Link to='/flushtubes'>
            <Card>
              <CardActionArea>
                <CardContent>
                  <h1> Flush Tubes </h1>
              </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </header>
      </div>
    </Router>
  );
}

export default App;
