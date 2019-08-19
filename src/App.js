import React from 'react';
import logo from './logo.svg';
import './App.css'
let x;
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
    </div>
  );
}

export default App;

//
// {
//   "extends": ["airbnb", "prettier", "prettier/react"],
//     "plugins": ["prettier"],
//     "rules": {
//   "react/jsx-filename-extension": [
//     1,
//     {
//       "extensions": [".js", ".jsx"]
//     }
//   ],
//       "react/prop-types": 0,
//       "no-console": 2,
//       "no-underscore-dangle": 0,
//       "import/imports-first": ["error", "absolute-first"],
//       "import/newline-after-import": "error"
// },
//   "globals": {
//   "window": true,
//       "document": true,
//       "localStorage": true,
//       "FormData": true,
//       "FileReader": true,
//       "Blob": true,
//       "navigator": true
// },
//   "parser": "babel-eslint"
// }

