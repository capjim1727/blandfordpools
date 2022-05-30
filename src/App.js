/* eslint-disable react/react-in-jsx-scope */
import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Blandford Pool Service</p>
        Powered by 
        <a
          className="App-link"
          href="https://capjimllc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        CapJim Technologies LLC  
        </a>
      </header>
      <Menu />
    </div>
  );
}

export default App;
