import logo from './logo.svg';
import './App.css';
import { Fortnite } from './components/Fortnite/Fortnite';
import Nosotros from './components/nosotros/Nosotros';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <div className='container'>
          <h1>Team fortnite</h1>
        <div className='cards'>
        <Nosotros/>
        </div>

      </div>
      
    
    </div>
  );
}

export default App;
