import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { Provider } from './components/ui/provider';
import Inputpage from './pages/Inputpage';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/inputs",
    element: <Inputpage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <RouterProvider router={router}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/inputs" element={<Inputpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </RouterProvider>
  </Provider>
);

reportWebVitals();
