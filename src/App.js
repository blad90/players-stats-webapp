import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <a href="/players">Players</a>
        <div>
          <li>
            <Link to={"/players"}>
              Players
            </Link>
          </li>
          <li>
            <Link to={"/add"}>
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path={["/", "/players/*"]}>
           <PlayersList/>
           </Route>

          <Route path="/add/*">
          <AddPlayer/> 
          </Route>

          <Route path="/players/:id" element={<Player/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
