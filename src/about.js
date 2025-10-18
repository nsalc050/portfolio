import logo from './logo.png';
import './App.css';
import { useNavigate } from 'react-router-dom';
import React,{useState} from 'react';


function ResumeSection(){
    const [showResume, setShowResume] = useState(false);

    const handleToggleResume = () => {
        setShowResume(!showResume);
    };

    return(
        
        <div className='resume-section'>
        <button clasname="resume-button" onClick={handleToggleResume}> Resume </button> 
           {showResume && (
          <div> 
            <h2>Resume</h2>
            <p>Download my resume <a href="/Resume_Nicolas Salcedo Reciente_QA.pdf" download>here</a>.</p>
        </div>
    )}
      </div>
    );
}

function About() {
    const navigateHome = useNavigate();
    return(
        <div className='page1' style={{textAlign: 'center'}}>
            
             <header className="App-header">

             <h1>About me</h1>      <img src={logo} alt="logo" size="10px"/>
             <div className='divider' />
                
        
            </header>
            <p>Hello, I'm <span className='text-blue-500'>Nicolas Salcedo</span>, a passionate QA Automation Engineer with expertise in creating robust test frameworks and ensuring software quality.</p> <b>  </b>
            <p>I specialize in using tools like Selenium, Playwright, and Cypress to automate web application testing, and I have experience with CI/CD pipelines to integrate testing into the development process.</p>
            <p>In addition to my technical skills, I am a strong advocate for Agile methodologies and continuous improvement in software development practices. 
            </p> 
            <p>using react and playwright to test this and another web application</p>
            
           
             <div className='resume-section'>
                <ResumeSection />
             </div>

            <button clasname="home-button" onClick={() => navigateHome('/')}> Go Back Home </button>
        </div>
    )
}

export default About;