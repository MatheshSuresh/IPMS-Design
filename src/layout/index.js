import React from "react";
import "../assets/css/layout.css";
import { Sidebar } from "../pages";
import Router from "../router";
import "animate.css";
import { useSelector } from "react-redux";

const Index = () => {
  const islogin = useSelector((store) => store.userid);
  return (
    <div className="layout-div">
      {islogin !== null ?
        <div className="layout-sidebar-div">
          <Sidebar />
        </div> : null}
      <div className="layout-body card">
          <Router />
      </div>
    </div>
  );
};

export default Index;
