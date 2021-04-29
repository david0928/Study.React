import logo from './logo.svg';
import './App.css';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TEST APP
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export const App2 = () => {
  return (
    <div className="App">
        <p>
          TEST APP 2
        </p>
    </div>
  );
};

//export default App;
