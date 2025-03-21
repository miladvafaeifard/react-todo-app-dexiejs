import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as todoService from './services/todoService';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App todoService={todoService} />
  </React.StrictMode>,
)
