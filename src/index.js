import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index/css/index.css';
import App from './routers/App/App';
import { Provider } from 'react-redux';
import store from './stores/redux-store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App  />
    </React.StrictMode>
  </Provider>
);
