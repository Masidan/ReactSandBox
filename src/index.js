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
import Netflix from './Netflix/Netflix';
import UseEffectComponent from './UseEffectComponent/UseEffectComponent';
import UseEffectComponent2 from './UseEffectComponent/UseEffectComponent2';
import UseEffectComponent3 from './UseEffectComponent/UseEffectComponent3';
import ApiQuote from './ApiComponents/Quote';
import ApiISS from './ApiComponents/ISS';
import MultipleReturns from './ApiComponents/MultipleReturns';
import ShowHide from './Components/ShowHide';
import ChooseFilms from './ChooseFilms/ChooseFilms';
import SliderFilms from './SliderFilms/SliderFilms';

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

const netflix = ReactDOM.createRoot(document.getElementById('netflix'));
netflix.render(
  <React.StrictMode>
    <Netflix />
  </React.StrictMode>
);

const useEffect = ReactDOM.createRoot(document.getElementById('useEffect'));
useEffect.render(
  <React.StrictMode>
    <UseEffectComponent />
  </React.StrictMode>
);

const useEffect2 = ReactDOM.createRoot(document.getElementById('useEffect2'));
useEffect2.render(
  <React.StrictMode>
    <UseEffectComponent2 />
  </React.StrictMode>
);

const useEffect3 = ReactDOM.createRoot(document.getElementById('useEffect3'));
useEffect3.render(
  <React.StrictMode>
    <UseEffectComponent3 />
  </React.StrictMode>
);

const apiQuate = ReactDOM.createRoot(document.getElementById('ApiQuote'));
apiQuate.render(
  <React.StrictMode>
    <ApiQuote />
  </React.StrictMode>
);

const apiISS = ReactDOM.createRoot(document.getElementById('ApiISS'));
apiISS.render(
  <React.StrictMode>
    <ApiISS />
  </React.StrictMode>
);

const multipleReturns = ReactDOM.createRoot(document.getElementById('MultipleReturns'));
multipleReturns.render(
  <React.StrictMode>
    <MultipleReturns />
  </React.StrictMode>
);

const showHide = ReactDOM.createRoot(document.getElementById('ShowHide'));
showHide.render(
  <React.StrictMode>
    <ShowHide />
  </React.StrictMode>
);

const chooseFilms = ReactDOM.createRoot(document.getElementById('ChooseFilms'));
chooseFilms.render(
  <React.StrictMode>
    <ChooseFilms />
  </React.StrictMode>
);

const sliderFilms = ReactDOM.createRoot(document.getElementById('SliderFilms'));
sliderFilms.render(
  <React.StrictMode>
    <SliderFilms />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
