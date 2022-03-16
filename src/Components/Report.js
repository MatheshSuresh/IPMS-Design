import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Calander from "../Components/Calander";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import FilterListIcon from "@material-ui/icons/FilterList";

import { InputBase } from "@material-ui/core";
import styles from "../assets/css/Report.module.css";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  Modal: {
    position: "fixed",
    top: "30vh",
    left: "38%",
    zIndex: "10",
    backgroundColor: "#fafafa",
    borderRadius: "10px",
    padding: "3rem",
  },
  overLay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "5",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  th: {
    marginLeft: "-20px",
    display: "flex",
    borderRadius: "10px",
    justifyContent: "space-evenly",
    opacity: ".7",
    padding: ".2rem 0 0 .7rem",
    height: "30px",
    alignItemsL: "center",
    backgroundColor: "white",
    width: "160px",

    "& p": {
      textAlign: "center",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  card: {
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: "10px",
  },
  datePickerHead: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  icon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  checkBoxContainer: {
    display: "flex",
    flexDirection: "colom",
    alignItems: "center",
  },
  f1: {
    "& span": { fontSize: "15px" },
  },
  select: {
    marginLeft: "40px",
  },
  actions: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    "& button": {
      padding: ".1rem 2rem",
      borderRadius: "10px",
    },
  },

  cancel: {
    backgroundColor: "transparent",
    border: "1px solid rgb(255, 162, 0)",
    marginLeft: "15px",
  },
  done: {
    backgroundColor: "rgb(255, 162, 0)",
    border: "none",
    marginRight: "15px",
  },
});
const Report = () => {
  const [isOverLay, setIsOverLay] = useState(false);
  const [getDate, setGetDate] = useState(false);
  const [toDate, setToDate] = useState(false);
  const [fromDate, setFromDate] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const classes = useStyles();
  const getDateHandler = () => {
    setFromDate(!fromDate);
    setGetDate(!getDate);
    setIsOverLay(!isOverLay);
  };
  const toDateHandler = () => {
    setToDate(!toDate);
    setGetDate(!getDate);
    setIsOverLay(!isOverLay);
  };
  const filterHandler = () => {
    setIsFilter(!isFilter);
    setIsOverLay(!isOverLay);
  };
  return (
    <>
      {/* className="card carddash" */}
      <div className={styles.reportHead}>
        <h2>REPORT</h2>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase className={styles.input} placeholder="Search" />
        </div>
      </div>
      <div className={classes.card}>
        <div className="card-body">
          <h6>Detail</h6>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Employee Name</th>
                <th scope="col">
                  <div className={classes.th} onClick={getDateHandler}>
                    <p>From Date</p>
                    <DateRangeIcon />
                  </div>
                </th>
                <th scope="col">
                  <div className={classes.th} onClick={toDateHandler}>
                    <p>To Date</p>
                    <DateRangeIcon />
                  </div>
                </th>
                <th scope="col">
                  <div className={classes.th}>
                    <p>Current Status</p>
                  </div>
                </th>
                <th scope="col">
                  <div className={classes.th} onClick={filterHandler}>
                    <p>Facility</p>
                    <FilterListIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ display: "flex" }}>
                  <span>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </span>
                  <span className="m-2"> Rajesh</span>
                </th>
                <td>3 December 2021</td>
                <td>7.30 Pm</td>
                <td>
                  <button className="btn bookbtn">Present</button>{" "}
                </td>
                <td>Meeting Room</td>
              </tr>
              <tr>
                <th scope="row" style={{ display: "flex" }}>
                  <span>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </span>
                  <span className="m-2"> Rajesh</span>
                </th>
                <td>3 December 2021</td>
                <td>7.30 Pm</td>
                <td>
                  <button className="btn bookbtn">Present</button>{" "}
                </td>
                <td>Meeting Room</td>
              </tr>
              <tr>
                <th scope="row" style={{ display: "flex" }}>
                  <span>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </span>
                  <span className="m-2"> Rajesh</span>
                </th>
                <td>3 December 2021</td>
                <td>7.30 Pm</td>
                <td>
                  <button className="btn reschdulebtn">Absent</button>{" "}
                </td>
                <td>Meeting Room</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {isOverLay && (
        <>
          <div className={classes.overLay}></div>
        </>
      )}
      {getDate && (
        <>
          <div className={classes.Modal}>
            <div className={classes.datePickerHead}>
              {toDate && <h6>From Date</h6>}
              {fromDate && <h6>To Date</h6>}
              <div className={classes.icon}>
                <CloseIcon onClick={getDateHandler} />
              </div>
            </div>
            <Calander />
          </div>
        </>
      )}
      {isFilter && (
        <>
          <div className={classes.Modal}>
            <form>
              <div className={classes.datePickerHead}>
                <h6>Facility Access</h6>
                <div className={classes.icon}>
                  <CloseIcon onClick={filterHandler} />
                </div>
              </div>
              <div className={classes.checkBoxContainer}>
                <div>
                  <FormControlLabel
                    className={classes.f1}
                    // labelPlacement="bottom"
                    control={<Checkbox />}
                    label="Meeting Hall"
                  />
                  <br />
                  <FormControlLabel
                    className={classes.f1}
                    // labelPlacement="bottom"
                    control={<Checkbox />}
                    label="Table Reservation"
                  />
                </div>
                <div className={classes.select}>
                  <select id="cars" name="cars">
                    <option value="">Floor</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className={classes.actions}>
                <button className={classes.cancel}>Cancel</button>
                <button className={classes.done}>Done</button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Report;
