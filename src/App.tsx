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

function App() {
  // var light_off = new LightOff(5, 5)
  var flood_tube = new FloodTubes(10, 10)
  var sokoban = new Sokoban(10, 10)
  return (
    <div className="App">
      <header className="App-header">
        {/* <BoardComponent game={light_off}></BoardComponent> */}
        {/* <FloodTubeComponent game={flood_tube}></FloodTubeComponent> */}
        <HudComponent game={flood_tube}></HudComponent>
        <SokobanComponent game={sokoban}></SokobanComponent>
      </header>
    </div>
  );
}

export default App;
