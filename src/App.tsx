import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { LightOff } from './game/LightOff';
import FloodTubeComponent from './components/FloodTubeComponent';
import { FloodTubes } from './game/FloodTube';

function App() {
  var light_off = new LightOff(5, 5)
  var flood_tube = new FloodTubes(10, 10)
  return (
    <div className="App">
      <header className="App-header">
        <h3>hello</h3>
        {/* <BoardComponent game={light_off}></BoardComponent> */}
        <FloodTubeComponent game={flood_tube}></FloodTubeComponent>
      </header>
    </div>
  );
}

export default App;
