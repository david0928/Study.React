import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './component/Clock';
import { App, App2 } from './App';
import { Test1 } from './component/Test';
import ShoppingList from './component/ShoppingList';
import Game from './component/Game'
import reportWebVitals from './reportWebVitals';

const element = (
<>
  <Clock />
  <Game />
  <ShoppingList name="參數測試 Class" />
  <App />
  <App2 />
  <Test1 name="參數測試 Function">
  </Test1>
</>  
)

ReactDOM.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
reportWebVitals();
