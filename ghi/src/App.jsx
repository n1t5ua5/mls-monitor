import Nav from "./MLS/Nav";
import React from "react";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
      <div className="container">
        <Nav />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
  );
};

export default App;
