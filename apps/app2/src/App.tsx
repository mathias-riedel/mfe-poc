import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';

import './index.css';

const App = () => (
  <BrowserRouter>
    <App2 />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
