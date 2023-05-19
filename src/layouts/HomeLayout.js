import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../view/Header";
import { Provider } from "react-redux";
import Store from "../components/store/Store";
import Footer from "../view/Footer";

function DashboardLayout() {
  return (
    <div>
      <Provider store={Store}>
        <Header />
        <div className="container main">
          <Outlet />
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default DashboardLayout;
