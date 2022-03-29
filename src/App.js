import logo from './wild-post2.png';
import './App.css';
import Li from './Li';


function App() {
  return (
    <>
      <header> 
        <img src={logo} alt="logo" className="logo"/>
        <nav>
          <ul className="navbar">
            <Li text="Main" />
            <Li text="Interviews" />
            <Li text="Evenements" />
            <Li text="Cours" />
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
