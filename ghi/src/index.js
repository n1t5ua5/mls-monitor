import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Home from "./MLS/Home";
import Favorites from "./MLS/Favorites";
import Login from "./MLS/Login";
import TeamDetail from "./MLS/TeamDetail";
import CreateAccount from "./MLS/CreateAccount";
import TeamList from "./MLS/TeamList";
import TeamCard from "./MLS/TeamCard";
import Search from "./MLS/Search";
import "./index.css";
import { store } from "./MLS/app/store";
import reportWebVitals from "./reportWebVitals";


const basename = process.env.REACT_APP_BASE_URL || '';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/accounts",
        element: <CreateAccount />,
      },
      {
        path: "/teams/:name",
        element: <TeamDetail />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/team",
        element: <TeamCard />,
      },
      {
        path: "/teams",
        element: <TeamList />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
],{basename});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
