// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./myStyles.module.css";
const App=()=>{
  return(
    <div className = 'App'>
      <h1>This is App component of this web site</h1>
      <h1 style={{color: "pink"}}>This is a paragraph</h1>
      <span className={styles.Red}>This text will be red</span>
      <span className={styles.Blue}>This text will be blue</span>
    </div>
  );
}

export default App;

