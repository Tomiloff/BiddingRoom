import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index/css/index.css';
import App from './routers/App/App';
import { Provider } from 'react-redux';
import store from './stores/redux-store';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
);

