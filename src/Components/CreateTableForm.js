import React, { useEffect, useState } from "react";
import styles from "../assets/css/CreateEmployeeForm.module.css";
import { useSelector } from "react-redux";
import axios from "axios";
const CreateTableForm = () => {
  const [userid, setuserid] = useState(sessionStorage.getItem("userid"));
  const filterdata = useSelector((store) => store);
  const createbooking = async () => {
    var data = {
      tableid: filterdata.tablename,
      seatnumber: filterdata.chairname,
      employeeid: userid
    }
    var createbooking = await axios.post(`${process.env.REACT_APP_SERVER}/booking/create`, data).then((res) => { return res.data })
    if(createbooking !=null){
      alert(createbooking)
    }
  }
  return (
    <div className={styles.formHead}>
      <h4>Book a Table</h4>
      <div className={styles.formCard}>
        <h6>Employee Details</h6>
        <div autoComplete="off">
          <label htmlFor="Tableid">Table Id</label>
          <input className={styles.m1} id="Tableid" defaultValue={filterdata.tablename} type="text" />
          <label htmlFor="seatnumber">Seat Number</label>
          <input className={styles.m1} id="Seatnumber" defaultValue={filterdata.chairname} type="text" />
          <label htmlFor="employeeid">Employee Id</label>
          <input className={styles.m1} id="employeeid" defaultValue={userid} type="text" />
          <button onClick={createbooking}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTableForm;
