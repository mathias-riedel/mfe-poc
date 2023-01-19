import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './remoteTypes.d';

import './index.css';

import App1 from 'app1/App1';
import App2 from 'app2/App2';
import App3 from 'app3/App3';

const App = () => (
  <>
    <h1>Container</h1>
    <Routes>
      <Route path="app1" element={<App1 />} />
      <Route path="app2" element={<App2 />} />
      <Route path="app3" element={<App3 />} />
    </Routes>
  </>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
