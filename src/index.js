import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from './context/context.js'
import {SpeechProvider} from '@speechly/react-client';

ReactDOM.render(
  <React.StrictMode>
    <SpeechProvider appId="89d52018-9306-48ba-a3d2-e700330d5786" language="en-US">
      <Provider>
        <App />  
      </Provider>  
    </SpeechProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
