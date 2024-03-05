import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <videopage />
    <App />
  </ContextProvider>,
  document.getElementById('root'),
);
