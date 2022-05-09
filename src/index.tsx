import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

import App from './App';
import { globalCss } from '@stitches/react';
import Header from './components/Header';

import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement as Element);

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  '#root': {
    height: '100%',
    fontFamily: 'DM Sans',
  },
  'html': {
    height: '100%',
    fontFamily: 'DM Sans',
  },
  'body': {
    height: '100%',
    fontFamily: 'DM Sans',
  }
  
});

globalStyles();

root.render(
  <React.StrictMode>
    <Header/>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
