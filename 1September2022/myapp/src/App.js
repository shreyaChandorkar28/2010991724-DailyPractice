import logo from './logo.svg';
import './App.css';
import Header from './component/2September2022';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="container">
    //   <Header/>
    // </div>
    <div className = "container">
      <Header title="React Tutorial"></Header>
    </div>
  );
}

export default App;
