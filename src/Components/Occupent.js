import React, { useEffect, useState } from "react";
import room from "../assets/img/plan301.jpg";
import table1 from "../assets/img/Table/Table-01.png";
import table2 from '../assets/img/Table/Table-02.png'
import table3 from '../assets/img/Table/Table-03.png'
import table4 from '../assets/img/Table/Table-04.png'
import table5 from '../assets/img/Table/Table-05.png'
import table6 from '../assets/img/Table/Table-06.png'
import chair1 from '../assets/img/Chairs/Chair 4.png'
import chair2 from '../assets/img/Chairs/Chair 8.png'
import chair3 from '../assets/img/Chairs/Chair 14.png'
import chair4 from '../assets/img/Chairs/Chair 11.png'
import chair5 from '../assets/img/Chairs/Chair 13.png'
import chair6 from '../assets/img/Chairs/Chair 12.png'
// Table-01.png
import styles from "../assets/css/Occupent.module.css";
import axios from "axios";
const Occupent = () => {
  const [tabledetails, settabledetails] = useState(null);

  const getchairdata = async (e) => {
    var details = e.target.id.split("/")
    sessionStorage.setItem("tablename", details[0])
    sessionStorage.setItem("chairname", details[1])
    sessionStorage.setItem("tabledetails", e.target.id)
    settabledetails(e.target.id)
    var bookinghistory = await axios.get(`${process.env.REACT_APP_SERVER}/booking/viewall`).then((res) => { return res.data })
    var checkbooking = await bookinghistory.filter((data) => { return data.selecteddate === sessionStorage.getItem("seleteddate") })
    console.log(checkbooking)
    var checkbook = await checkbooking.filter((data) => { return data.tabledetails === e.target.id })
    if (checkbook.length !== 0) {
      alert("The Chair Already Booked..")
    } else {
      window.location.replace("/createBooking")
    }
  }


  return (
    <>
      <div className={styles.occupentRoom}>
        <div className={styles.office}>
          {/* <img src={room} alt="plan-301"></img> */}
          <div className={styles.room1Table}>
            <img src={table1} alt="plan-301"></img>
            <div className={styles.table1chair1}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table1/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table1chair2}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table1/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table1chair3}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table1/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table1chair4}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table1/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room2Table}>
            <img src={table1} alt="plan-301"></img>
            <div className={styles.table2chair1}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table2/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table2chair2}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table2/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table2chair3}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table2/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table2chair4}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table2/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room21Table}>
            <img src={table1} alt="plan-301"></img>
            <div className={styles.table21chair1}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table21/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table21chair2}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table21/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table21chair3}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table21/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table21chair4}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table21/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room3Table}>
            <img src={table1} alt="plan-301"></img>
            <div className={styles.table3chair1}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table3/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table3chair2}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table3/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table3chair3}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table3/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table3chair4}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table3/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room31Table}>
            <img src={table1} alt="plan-301"></img>
            <div className={styles.table31chair1}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table31/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table31chair2}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table31/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table31chair3}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table31/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table31chair4}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table31/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room4Table}>
            <img src={table2} alt="plan-301"></img>
            <div className={styles.table4chair1}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table4/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table4chair2}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table4/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table4chair3}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table4/chair3" onClick={getchairdata} />
            </div>

            <div className={styles.table4chair4}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table4/chair4" onClick={getchairdata} />
            </div>
            <div className={styles.table4chair5}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table4/chair5" onClick={getchairdata} />
            </div>
            <div className={styles.table4chair6}>
              <img src={chair1} style={{ cursor: "pointer" }} alt="plan-301" id="table4/chair6" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room7Table}>
            <img src={table4} alt="plan-301"></img>
            <div className={styles.table7chair1}>
              <img src={chair2} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair2}>
              <img src={chair2} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair3}>
              <img src={chair2} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair4}>
              <img src={chair2} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair4" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair5}>
              <img src={chair2} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair5" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair6}>
              <img src={chair2} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair6" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair7}>
              <img src={chair3} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair7" onClick={getchairdata} />
            </div>
            <div className={styles.table7chair8}>
              <img src={chair3} style={{ cursor: "pointer" }} alt="plan-301" id="table7/chair8" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room5Table}>
            <img src={table3} alt="plan-301"></img>
            <div className={styles.table5chair1}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table5/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table5chair2}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table5/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table5chair3}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table5/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table5chair4}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table5/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room51Table}>
            <img src={table3} alt="plan-301"></img>
            <div className={styles.table51chair1}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table51/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table51chair2}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table51/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table51chair3}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table51/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table51chair4}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table51/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room52Table}>
            <img src={table3} alt="plan-301"></img>
            <div className={styles.table52chair1}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table52/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table52chair2}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table52/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table52chair3}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table52/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table52chair4}>
              <img src={chair4} style={{ cursor: "pointer" }} alt="plan-301" id="table52/chair4" onClick={getchairdata} />
            </div>
          </div>
          <div className={styles.room6Table}>
            <img src={table6} alt="plan-301"></img>
            <div className={styles.table6chair1}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair2}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair3}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair3" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair4}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair4" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair5}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair5" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair6}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair6" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair7}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair7" onClick={getchairdata} />
            </div>
            <div className={styles.table6chair8}>
              <img src={chair5} style={{ cursor: "pointer" }} alt="plan-301" id="table6/chair7" onClick={getchairdata} />
            </div>
          </div>

          <div className={styles.room8Table}>
            <img src={table5} alt="plan-301"></img>
            <div className={styles.table8chair1}>
              <img src={chair6} style={{ cursor: "pointer" }} alt="plan-301" id="table8/chair1" onClick={getchairdata} />
            </div>
            <div className={styles.table8chair2}>
              <img src={chair6} style={{ cursor: "pointer" }} alt="plan-301" id="table8/chair2" onClick={getchairdata} />
            </div>
            <div className={styles.table8chair3}>
              <img src={chair6} style={{ cursor: "pointer" }} alt="plan-301" id="table8/chair3" onClick={getchairdata} />
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Occupent;
