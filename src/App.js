import logo from './logo.png';
import './App.css';
import { Router, Route, Routes, useNavigate } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import About from './About';


function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
     
        <img src={logo}  alt="logo" size="30px"/>
      
      <header className="App-header">
        <h1>Portfolio</h1>
          <h2>Nicolas Salcedo</h2>
      </header>

      <pre>Here is an example of a simple JavaScript function: <br />
        <code>{'function greet() { console.log("Hello!"); }'}</code>
      </pre>

        <p className='text-white'>
          Hello, I'm <span className='text-blue-500'>Nicolas Salcedo</span>, a passionate QA Automation Engineer
        </p>

        {/* replaced two buttons with single menu list */}
        <div className='menu-wrapper'>
          <nav aria-label="Demo menu">
            <ul className='menu-list'>
               <li><button className='menu-item' onClick={() => navigate('/about')}>About Me</button></li>
              <li><button className='menu-item' onClick={() => navigate('/page1')}>Demo 1</button></li>
              <li><button className='menu-item' onClick={() => navigate('/page2')}>Demo 2</button></li>
             
            </ul>
          </nav>
        </div>
    </div>
  );
}
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path= "/page2" element={<Page2 />} />
        <Route path= "/about" element={<About />} />
        <Route path="*" element={<Home />} />    
      </Routes>
  );
}

export default App;
