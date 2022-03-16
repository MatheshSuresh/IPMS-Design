import React, { useState } from "react";
import "../assets/css/sidebar.css";
import logo from "../assets/img/0002.png";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { RiBarcodeBoxLine } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa";

const Sidebar = () => {
  const [isbigbar, setisbigbar] = useState(true);
  const changeBar = () => {
    setisbigbar(false);
  };
  return (
    <div className={`${isbigbar ? "sidebar-div" : "small-sidebar-div"}`}>
      <div className="logo-div">
        <div className="logoContainer">
          <h3
            onClick={changeBar}
            className="text-center text-white"
            style={{ cursor: "pointer" }}
          >
            <img className="logoimg" width={200} src={logo} alt="" />
          </h3>
        </div>

        <ul className="mt-5 ">
          <li>
            <span id="border"></span>
            <a
              className="navlinkli"
              activeClassName="activenavlink"
              exact
              href="/dashboard"
            >
              <span className="iconspan">
                <MdDashboard />
              </span>
              {isbigbar ? (
                <span className="spanname animate__backInLeft">Dashboard</span>
              ) : null}
            </a>
          </li>
          <li>
            <NavLink className="navlinkli" activeClassName="/" exact to="">
              <span className="iconspan">
                <RiBarcodeBoxLine />
              </span>
              {isbigbar ? (
                <span className="spanname animate__backInLeft">
                  Notification & Alert
                </span>
              ) : null}
            </NavLink>
          </li>
          <li>
            <a className="navlinkli" activeClassName="/" exact href="/calander">
              <span className="iconspan">
                <FaCalendarDay />
              </span>
              {isbigbar ? (
                <span className="spanname animate__backInLeft">
                  Booking Management
                </span>
              ) : null}
            </a>
          </li>
          <li>
            <a className="navlinkli" activeClassName="/" exact href="/userlist">
              <span className="iconspan">
                <AiOutlineUsergroupDelete />
              </span>
              {isbigbar ? (
                <span className="spanname animate__backInLeft">
                  User Management
                </span>
              ) : null}
            </a>
          </li>
          <li>
            <a
              className="navlinkli"
              activeClassName="/"
              exact
              href="/report"
            >
              <span className="iconspan">
                <RiBarcodeBoxLine />
              </span>
              {isbigbar ? (
                <span className="spanname animate__backInLeft">Report</span>
              ) : null}
            </a>
          </li>
          <li>
            <a className="navlinkli" activeClassName="/" exact href="/">
              <span className="iconspan">
                <FaCalendarDay />
              </span>
              {isbigbar ? (
                <span className="spanname animate__backInLeft">Settings</span>
              ) : null}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
