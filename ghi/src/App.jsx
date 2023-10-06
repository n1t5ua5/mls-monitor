import Nav from "./MLS/Nav";
import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <div className="container">
        <Nav />
        <div className="mt-5">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
