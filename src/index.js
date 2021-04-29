import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NumberList2 from './component/NumberList2';
import NumberList1 from './component/NumberList1';
import LoginControl from './component/LoginControl';
import Toggle from './component/Toggle';
import Clock from './component/Clock';
import { App, App2 } from './App';
import { Test1, Test2 } from './component/Test';
import ShoppingList from './component/ShoppingList';
import Game from './component/Game'
import reportWebVitals from './reportWebVitals';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const number1s = [1, 2, 3, 4, 5];

const element = (
<>
  <NumberList2 posts={posts} />
  <NumberList1 numbers={number1s} />
  <br/>
  <LoginControl />
  <br/>
  <Toggle />
  <Clock />
  <Game />
  <ShoppingList name="ShoppingList Class" />
  <Test1 name="參數測試 Function" />
  <Test2 name="參數測試 Class" /> 
  <App />
  <App2 />
</>  
);

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
