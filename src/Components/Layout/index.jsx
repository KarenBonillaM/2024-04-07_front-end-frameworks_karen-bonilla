import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import "../Layout/index.css";
import "./index.css";

  
function Layout() {

  return (
    <React.Fragment>
      < Header />
      < Outlet className="page-body"/>
      < Footer />
    </React.Fragment>
  )
}

export default Layout;