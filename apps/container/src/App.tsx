import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './remoteTypes.d';

import './index.css';

import App1 from 'app1/App1';
import App2 from 'app2/App2';
import App3 from 'app3/App3';

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Container</h1>
      <ul>
        <li>
          <Link to="app1">App 1</Link>
        </li>
        <li>
          <Link to="app2">App 2</Link>
        </li>
        <li>
          <Link to="app3">App 3</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="app1/*"
          element={<App1 count={count} incrementCount={incrementCount} />}
        />
        <Route
          path="app2/*"
          element={<App2 count={count} incrementCount={incrementCount} />}
        />
        <Route path="app3/*" element={<App3 />} />
      </Routes>
    </>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
