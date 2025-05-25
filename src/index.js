import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import './index.css';
// import App from './App';
import TopMenu from './TopMenu/TopMenu';
import TodoList from './TodoList/TodoList';
import AllTasks from './Tasks/AllTasks';
import CountingButtons from './CountingButtons/CountingButtons';


import Foot from './Foot/Foot';
//import reportWebVitals from './reportWebVitals';

const topMenu = ReactDOM.createRoot(document.getElementById('top-menu'));
topMenu.render(
  <React.StrictMode>
    <TopMenu />
  </React.StrictMode>
);

const todoList = ReactDOM.createRoot(document.getElementById('todo-list'));
todoList.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);

const tasksList = ReactDOM.createRoot(document.getElementById('tasks-list'));
tasksList.render(
  <React.StrictMode>
    <AllTasks />
  </React.StrictMode>
);

const countingbuttons = ReactDOM.createRoot(document.getElementById('counting-buttons'));
countingbuttons.render(
  <React.StrictMode>
    <CountingButtons />
  </React.StrictMode>
);

const foot = ReactDOM.createRoot(document.getElementById('foot'));
foot.render(
  <React.StrictMode>
    <Foot />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
