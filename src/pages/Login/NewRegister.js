import React, { useState } from "react";
import { Button, InputBase } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import PasswordChange from "./PasswordChange";
import "../../assets/css/dummy.css";
import styles from "../../assets/css/NewRegister.module.css";
// import { findAllByTestId } from "@testing-library/react";
const NewRegister = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const registerSubmitHandler = () => {
    setIsRegistered(false);
  };
  const useInput = (
    <div>
      <div className={styles.card}>
        <div className={styles.container}>
          <h1>
            BoardR<span>oo</span>m
          </h1>
          <small>Smart Business Solutions</small>
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
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <LockIcon />
            </div>
            <InputBase className={styles.input} placeholder="Password" />
          </div>
          <div className={styles.search}>
            <div className={styles.searchIcon}>
              <LockIcon />
            </div>
            <InputBase className={styles.input} placeholder="Password" />
          </div>
          <Button
            onClick={registerSubmitHandler}
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {isRegistered && useInput}
      {!isRegistered && <PasswordChange />}
    </div>
  );
};

export default NewRegister;
