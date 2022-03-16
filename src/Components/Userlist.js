import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import Calander from "../Components/Calander";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { loginAction } from "../Store/Store";
import { InputBase } from "@material-ui/core";
import styles from "../assets/css/Report.module.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { useDispatch } from "react-redux";

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
  const [userdatalist, setuserdata] = useState([]);
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
  useEffect(() => {
    userdata()
  }, [])
  const userdata = async () => {
    var userlist = await axios.get(`${process.env.REACT_APP_SERVER}/users/viewall`).then((res) => { return res.data })
    setuserdata(userlist)
  }
  const dispatch = useDispatch();
  const getuserdata = async (e) => {
    dispatch(loginAction.viewuserhandle(e.target.id))
    sessionStorage.setItem("viewuserid", e.target.id)
    window.location.replace("/admin")
  }
  return (
    <>
      {/* className="card carddash" */}
      <div className={styles.reportHead}>
        <h2>User List</h2>
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
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope="col">Designation</th>
              </tr>
            </thead>
            <tbody>
              {userdatalist.length !== 0 ? userdatalist.map((data, index) => (
                <tr key={index} onClick={getuserdata}>
                  <th scope="row" style={{ display: "flex", cursor: "pointer" }}>
                    <span>
                      {data.profilepic !== null ? <Avatar
                        alt="Remy Sharp"
                        src={data.profilepic}
                      /> : <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />}

                    </span>
                    <span className="m-2" id={data.id}> {data.firstname} {data.lastname}</span>
                  </th>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.gender}</td>
                  <td>{data.designation}</td>
                </tr>
              )) : null}


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
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
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
