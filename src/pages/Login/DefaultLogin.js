import React from "react";
import { Button, InputBase } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import styles from "../../assets/css/DefaultLogin.module.css";
import "../../assets/css/dummy.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/Store";

const DefaultLogin = () => {
  const dispatch = useDispatch();
  const forgotPasswordHandler = () => {
    dispatch(loginAction.changePassword());
    // console.log("hellerwo");
  };
  const newRegisterHandler = () => {
    dispatch(loginAction.newRegister());
  };
  const loginbtn = (e) => {
    e.preventDefault();
    dispatch(loginAction.loginhandler());
    window.location.replace("/dashboard");
  };
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
            <InputBase className={styles.input} placeholder="Username" />
          </div>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <LockIcon />
            </div>
            <InputBase className={styles.input} placeholder="Password" />
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
