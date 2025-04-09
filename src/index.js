import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { Provider } from './components/ui/provider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </RouterProvider>
  </Provider>
);

reportWebVitals();
