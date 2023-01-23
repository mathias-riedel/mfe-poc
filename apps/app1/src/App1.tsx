import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

interface IApp1Props {
  count: number;
  incrementCount: () => void;
}

const App1 = (props: IApp1Props) => {
  return (
    <>
      <h1>App1</h1>

      <button onClick={props.incrementCount}>{props.count}</button>

      <ul>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h2>About</h2>} />
      </Routes>
    </>
  );
};

const Home = () => (
  <>
    <h2>Home</h2>
    <Link to="/app2/about">Go to App2 about</Link>
  </>
);

export default App1;
