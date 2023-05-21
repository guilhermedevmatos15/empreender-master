import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './tests/reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// ? Components
import App from './App';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

// ? CSS
import './index.css';
import './styles/buttons.css';

// ? Libs
import initSmoothScroll from './libs/smoothScroll';
import Login from './pages/Login/Login';

document.addEventListener('DOMContentLoaded', function () {
   setTimeout(() => {
      initSmoothScroll(115, 1400);
   }, 500);
});

// ? React Router
const Router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: '/Login',
            element: <Login />,
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={Router} />
   </React.StrictMode>
);

reportWebVitals();
