import logo from './logo.png';
import './App.css';
import { useNavigate } from 'react-router-dom';
function Page1() {
    const navigateHome = useNavigate();
    return(
        <div className='page1' style={{textAlign: 'center'}}>
            
             <header className="App-header">
             <h1>Application Testing  Demostration</h1>
             <div className='divider' />
                
             <img src={logo} alt="logo" size="10px"/>
            </header>
            
            <p>This is a react application demostration # 1</p>
            <p>using react and playwright to test this and another web application</p>

            <button clasname="home-button" onClick={() => navigateHome('/')}> Go Back Home </button>
        </div>
    )
}

export default Page1;