import React, {} from 'react';
import Particles from 'tsparticles';
import Navigation from "./components/Navigation.js";
import Logo from "./components/Logo.js";
import Imagelinkform from "./components/Imagelinkform.js";
import Rank from "./components/Rank.js";
import './App.css';

const tsparticlesOptions={
  particles: {
    number: {
      value: 133,
      density: {
        enable: true,
        value_area: 710.2328774690454
      }
    },
    color: {
      value: "#11af52"
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#060907"
      },
    }
}
}

function App() {
  return (
    <div className="App">
     {/* <Particles className='particles' params={tsparticlesOptions} />*/}
      <Navigation />
      <Logo/>
      <Rank/>
          <Imagelinkform/>
  {/*  <facerecongintion/>*/}
    </div>
  );
}

export default App;