import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header/Header';
import Mi from './components/my_prosper/mi';
import reportWebVitals from './reportWebVitals';
import Calcula from './components/Calcula/calculaComponent';
import Mejores from './components/Mejores/MejoresComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Calcula />
    <Mejores /> 
    <Mi />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
