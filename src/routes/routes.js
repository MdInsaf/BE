import React  from "react";
import exendYourStay from "../Pages/exendYourStay/exend-Your-Stay";
import select from '../Pages/homepage/homepage';
import guestInformation from "../Pages/guestInformation/guestInformation";
import loginpage from "../Pages/loginPage/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





const routes = [
    { path: "/loginpage", exact: true, name: "loginpage", element:loginpage },
    { path: "/Select-Rooms", exact: true, name: "Homepage", element: select },
    { path: "/exend-Your-Stay", exact: true, name: "Exendyourpage", element: exendYourStay },
    { path: "/guestInformation", exact: true, name: "GuestInformtion", element:guestInformation },
  ];

  export default routes;