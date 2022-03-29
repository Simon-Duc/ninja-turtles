import logo from './wild-post2.png';
import './App.css';

function App() {
  return (
    <>
      <header> 
        <img src={logo} alt="logo" className="logo"/>
        <nav>
          <ul className="navbar">
            <li>Main</li>
            <li>Interviews</li>
            <li>Evenements</li>
            <li>Cours</li>
          </ul>
        </nav>
        <img src="https://loremflickr.com/640/480" alt="Random Image"></img>
        <h1>
          The Wild Post, le journal des futurs Wilders !
        </h1>
      </header>
    </>
  );
}

export default App;
