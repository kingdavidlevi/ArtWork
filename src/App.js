import React from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';

import SignUp from './SignUp';
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from './Login';
import Homepage from './HomePage';
import Header from './Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ScrollToTop />}>
      <Route path="/" element={<Homepage />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="Header" element={<Header />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
