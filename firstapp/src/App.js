import logo from './logo.svg';
import './App.css';

// Can create a variable same as javascript
let name= 'Vasu'; 
function App() {
  return (
    <div className="App">
      {/* css for head changed in app.css */}
      <div className="head">Hello {name}</div>
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
    </div>
  );
}

export default App;
