import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App1 from './App1';

import './index.css';

const App = () => (
  <BrowserRouter>
    <App1 />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
