import logo from './logo.svg';
import './App.css';
import * as THREE from './js/three.module.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>
            

            
            </code> and save to reload.
        </p>
        <canvas id='bg'>

        </canvas>
      </header>
    </div>
  );
}

export default App;
