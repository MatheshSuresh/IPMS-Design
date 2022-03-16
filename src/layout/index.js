import React from "react";
import "../assets/css/layout.css";
import { Sidebar } from "../pages";
import Router from "../router";
import "animate.css";
import { useSelector } from "react-redux";

const Index = () => {
  const islogin = useSelector((store) => store.islogin);
  console.log(islogin);
  return (
    <div className="layout-div">
      {islogin && (
        <div className="layout-sidebar-div">
          <Sidebar />
        </div>
      )}
      <div className="layout-body card">
        <Router />
      </div>
    </div>
  );
};

export default Index;
