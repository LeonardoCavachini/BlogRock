import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";

import Mainpage from './pages/MainPage';
import ContactModal from './components/modal';
import SinglePage from './pages/SinglePage';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage/>,
  },
  {
    path: "/:id",
    element: <SinglePage />,
  },
  {
    path: "/contact",
    element: <ContactModal/>,
  },
]);


export default Router;