import logo from './logo.png';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Page2() {
    const navigateHome = useNavigate();
    return(
        <div className='page1'>
            <div className="contrast-box">
                <header className="App-header">
                <h1>Page 2 Application Demostration</h1>
                <div className='divider' />
                    
                <img src={logo} alt="logo" sizes='10px'/>
                </header>
                
                <p>This is a react application demostration # 2</p>
                <p>using react and playwright to perform API testing of web application</p>

                <button classname="home-button" onClick={()=> navigateHome('/')}> Go Back Home </button>
                <div className='spacer' />
            </div>    
            <div className='footer'>
                <p classname="foot-page ">Developed by Nicolas Salcedo</p>
            </div>
        </div>
    )
}

export default Page2;