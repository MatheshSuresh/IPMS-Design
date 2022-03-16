import React from "react";
import { Button, InputBase } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import styles from "../../assets/css/PasswordChange.module.css";
const PasswordChange = () => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h1>
          BoardR<span>oo</span>m
        </h1>
        <small>Smart Business Solutions</small>
        <h5>Pin Mismatch</h5>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <PersonIcon />
          </div>
          <InputBase className={styles.input} placeholder="New Pin" />
        </div>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <LockIcon />
          </div>
          <InputBase className={styles.input} placeholder="Re Type Pin" />
        </div>
        <Button variant="contained" color="primary">
          Create Password
        </Button>
      </div>
    </div>
  );
};

export default PasswordChange;
