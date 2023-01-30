import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import AppCounterFunctional from './AppCounterFunctional';
// import AppCounterClass from './AppCounterClass';
// import AppClock from './AppClock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppCounterFunctional />
    <AppCounterClass />
    <AppClock /> */}
  </React.StrictMode>
);