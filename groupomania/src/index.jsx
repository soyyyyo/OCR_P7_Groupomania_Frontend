import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Home from './pages/Home'
// import Survey from './pages/Survey'
// import Results from './pages/Results'
// import Freelances from './pages/Freelances'
// import Profile from './pages/Profile'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Error from './components/Error'
// import GlobalStyle from './utils/style/GlobalStyle'
// import { ThemeProvider, SurveyProvider } from './utils/context'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)






/// ORIGINAL
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/