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
import Terms from './TermsOfService';
import OverAll from './OverAll';
import Menu from './Menu';
import PrivacyPolicy from './PrivacyPolicy';
import Main from './Main';
import MainHomePage from './MainHomePage';
import Collection from './Collection';
import MainCollection from './MainCollection';
import Wallet from './Wallet';
import UserChat from './UsersChat';
import AdminPage from './AdminPage';
import CreateNft from './CreateNft';
import CreateCollection from './CreateCollection';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<OverAll />}>
      <Route element={<Main />}>
        <Route path="/" element={<MainHomePage />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="MainCollection" element={<MainCollection />} />
      </Route>
      <Route element={<ScrollToTop />}>
        <Route path="Homepage" element={<Homepage />} />
        <Route path="Terms" element={<Terms />} />
        <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Collection" element={<Collection />} />
      </Route>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      <Route path="UserChat" element={<UserChat />} />
      <Route path="AdminPage" element={<AdminPage />} />
      <Route path="CreateNft" element={<CreateNft />} />
      <Route path="CreateCollection" element={<CreateCollection />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
