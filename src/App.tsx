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

function App() {
  // var light_off = new LightOff(5, 5)
  var flood_tube = new FloodTubes(10, 10)
  var sokoban = new Sokoban(10, 10)
  return (
    // for deployment purposec
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
      {/* <Router> */}
        <h1>HOME</h1>
        {/* <header className="App-header">
          </header> */}
        <Switch>

          <Route exact path="/">
            <div className='home__cards'>
              <Link to='/sokoban'>
                <Card className='home--card'>
                  <CardActionArea>
                    <CardContent className='home--card--content'>
                      <h1> Sokoban </h1>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
              <Link to='/flushtubes'>
                <Card className='home--card'>
                  <CardActionArea>
                    <CardContent className='home--card--content'>
                      <h1> Flush Tubes [Under Development]</h1>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
              <Link to='/inertia'>
                <Card className='home--card'>
                  <CardActionArea>
                    <CardContent className='home--card--content'>
                      <h1> Inertia [Under Development]</h1>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </Route>
          <Route path="/inertia">
            <InertiaApp />
          </Route>
          <Route path="/sokoban">
            <SokobanComponent game={sokoban}></SokobanComponent>
          </Route>
          <Route path='/flushtubes'>
            <HudComponent game={flood_tube}></HudComponent>
          </Route>
        </Switch>

        {/* <SokobanComponent game={sokoban}></SokobanComponent> */}
      </Router>
    </div>
  );
}

export default App;
