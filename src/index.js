import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index/css/index.css';
import App from './routers/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

