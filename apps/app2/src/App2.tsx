import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

interface IApp2Props {
  count: number;
  incrementCount: () => void;
}

const App2 = (props: IApp2Props) => {
  return (
    <>
      <h1>App2</h1>

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
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="about" element={<h2>About</h2>} />
      </Routes>
    </>
  );
};

export default App2;
