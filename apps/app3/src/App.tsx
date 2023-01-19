import React from 'react';
import ReactDOM from 'react-dom';
import App3 from './App3';

import './index.css';

const App = () => (
  <div className="container">
    <App3 />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
