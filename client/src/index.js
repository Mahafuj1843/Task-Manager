import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
// import { CookiesProvider } from "react-cookie";
import './Assets/css/bootstrap.css'
import './Assets/css/animate.min.css'
import './Assets/css/style.css'
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CookiesProvider> */}
        <App />
      {/* </CookiesProvider> */}
    </Provider>
  </React.StrictMode>
);
