import logo from './logo.png';
import './App.css';
import { Router, Route, Routes, useNavigate } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';


function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my Portfolio</h1>
        <img src={logo}  alt="logo" />

      <pre>Here is an example of a simple JavaScript function: <br />
        <code>{'function greet() { console.log("Hello!"); }'}</code>
      </pre>

        <p className='text-white'>
          Hello, I'm <span className='text-blue-500'>Nicolas Salcedo</span>, a passionate QA Automation Engineer
        </p>
        <div className ='button-container'>
           <button classname='first-button' id="page1" onClick={()=>  navigate('/page1')}> head to Demo 1 </button>
           <button classname='second-button' id="page2" onClick={()=>  navigate('/page2')}> head to Demo 2 </button>
        </div>

        <canvas id='bg'>

        </canvas>
      </header>
    </div>
  );
}
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path= "/page2" element={<Page2 />} />
        <Route path="*" element={<Home />} />
        
      </Routes>
  );
}

export default App;
