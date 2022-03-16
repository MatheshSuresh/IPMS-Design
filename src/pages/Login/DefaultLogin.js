import React from "react";
import { Button, InputBase } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import styles from "../../assets/css/DefaultLogin.module.css";
import "../../assets/css/dummy.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/Store";
import axios from "axios";
import { useSelector } from "react-redux";

const DefaultLogin = () => {
  const dispatch = useDispatch();
  const forgotPasswordHandler = () => {
    dispatch(loginAction.changePassword());
    // console.log("hellerwo");
  };
  const newRegisterHandler = () => {
    dispatch(loginAction.newRegister());
  };
  const loginbtn = async (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var userslist = await axios.get(`${process.env.REACT_APP_SERVER}/users/viewall`).then((res) => { return res.data })
    var checkuser = await userslist.filter((data) => { return data.email === email })
    if (checkuser.length !== 0) {
      if (checkuser[0].password === password) {
        alert("Welcome..")
        dispatch(loginAction.loginhandler());
        sessionStorage.setItem("userid", checkuser[0].id)
        window.location.replace("/dashboard");
      } else {
        alert("Please Check Password..")
      }
    } else {
      alert("Not Valid User..Please Register..")
    }
  };
  const filterdata = useSelector((store) => store);
  if (filterdata.userid !== null) {
    window.location.replace("/dashboard")
  }
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h1>
          BoardR<span>oo</span>m
        </h1>
        <small>Smart Business Solutions</small>
        <form>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <PersonIcon />
            </div>
            <InputBase className={styles.input} id="email" placeholder="Email" />
          </div>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <LockIcon />
            </div>
            <InputBase className={styles.input} id="password" placeholder="Password" />
          </div>
          <Button variant="contained" color="primary" onClick={loginbtn}>
            Sign in
          </Button>
        </form>

        <div className={styles.forgetPassword}>
          <p onClick={forgotPasswordHandler}>
            <span>Forget Password ?</span>
          </p>
          <p onClick={newRegisterHandler}>
            Don't have a account ?<span> Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DefaultLogin;
