 import React from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';
 import SignUp from './SignUp';
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
const router = createBrowserRouter(createRoutesFromElements(
  <Route  element={<ScrollToTop/>} >
 <Route path='/' element={<SignUp/>} />
  </Route>
))
function App() {
  return (
    
    <RouterProvider router={router} /> 
  );
}

export default App;
