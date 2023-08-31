import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from './App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Comments from './Comments';
import Login from './Login';
// import TeamDetail from './TeamDetail';
// import CreateAccount from './CreateAccount';
import './index.css';
import { store } from './app/Store';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/create-account',
        element: <Login />
      },
      {
        path: '/team-detail',
        element: <Login />
      },
      {
        path: '/comments',
        element: <Comments />
      },
      {
        path: '/home',
        element: <Home />,
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
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
