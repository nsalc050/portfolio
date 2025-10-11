import logo from './logo.png';
import './App.css';

function Page2() {
    return(
        <div className='page1' style={{textAlign: 'center'}}>
             <header className="App-header">
             <h1>Page 2 Application Demostration</h1>
             <div className='divider' />
                
             <img src={logo} alt="logo" />
            </header>
            
            <p>This is a react application demostration # 2</p>
            <p>using react and playwright to demo other web application</p>
        </div>
    )
}

export default Page2;