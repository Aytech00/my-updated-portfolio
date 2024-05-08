import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { ContxProvider } from './store/AllContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContxProvider>
    <App />
  </ContxProvider>
);

