import logo from './logo.svg';
import './App.css';
import { Fortnite } from './components/Fortnite/Fortnite';

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

      <Fortnite 
            nombre='Juan Felipe Ospina Jaramillo'
            pais='Colombia'
            imagen='Juan'
            cargo= 'Sotware Developer' 
            presentacion= 'fewrgs fgte gr tzyh jthdzr gh tsdzr fz htr setryh txdrs gxhdzrszt ythrt yht tet rdthrtse rdhtd rtsdth rtdthxfj thyrtydthxj thrthtt rthgjght rhtdgxfhfhtr hgftrydthgf trdthgf rhg rthgfj ghtythjh tyfj tyd fjtyd fjhfty dfjty rtfj tyfjhg jyt fjhgjfty'
            github= 'https://github.com/JuanfeOspiJara'
            linkedin='https://www.linkedin.com/in/juan-felipe-ospina-jaramillo-501651248/'
            explicacion='así se hace'
          />
          <Fortnite 
            nombre='Juan Felipe Ospina Jaramillo'
            pais='Colombia'
            imagen='https://media-exp1.licdn.com/dms/image/D4D03AQHovk79gS5aaQ/profile-displayphoto-shrink_800_800/0/1668439843037?e=1674086400&v=beta&t=374h9MBfVcMth-OzZnU11q07cGO1hZlfGxGHj6Vjycc'
            cargo= 'Sotware Developer' 
            presentacion= 'fewrgs fgte gr tzyh jthdzr gh tsdzr fz htr setryh txdrs gxhdzrszt ythrt yht tet rdthrtse rdhtd rtsdth rtdthxfj thyrtydthxj thrthtt rthgjght rhtdgxfhfhtr hgftrydthgf trdthgf rhg rthgfj ghtythjh tyfj tyd fjtyd fjhfty dfjty rtfj tyfjhg jyt fjhgjfty'
            github= 'https://github.com/JuanfeOspiJara'
            linkedin='https://www.linkedin.com/in/juan-felipe-ospina-jaramillo-501651248/'
            explicacion='así se hace'
          />
    
    </div>
  );
}

export default App;
