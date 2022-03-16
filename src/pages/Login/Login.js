import DefaultLogin from "./DefaultLogin";
import styles from "../../assets/css/Login.module.css";
import React from "react";
import { useSelector } from "react-redux";
import PasswordChange from "./PasswordChange";
import NewRegister from "./NewRegister";

const Login = () => {
  const defaultLogin = useSelector((store) => store.forgotPassword);
  const isRegistered = useSelector((store) => store.register);
  // console.log(defaultLogin);
  return (
    <div>
      <div className={styles.loginShowCase}>
        {!defaultLogin && isRegistered && <DefaultLogin />}
        {defaultLogin && <PasswordChange />}
        {!isRegistered && <NewRegister />}
      </div>
    </div>
  );
};

export default Login;
