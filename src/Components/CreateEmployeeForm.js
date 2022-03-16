import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { useFormik } from "formik";
import axios from "axios"
import styles from "../assets/css/CreateEmployeeForm.module.css";
import { firebase } from '../database/firebase'
const CreateEmployeeForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      gender: "",
      designation: "",
      department: "",
      email: "",
      phone: "",
      image: "",
      password: ''
    },

    onSubmit: async (values) => {
      var file = document.getElementById("myFile").files
      let file11 = new Promise((resolve, reject) => {
        var storageRef = firebase.storage().ref("profile/" + file[0].name);
        storageRef.put(file[0]).then(function (snapshot) {
          storageRef.getDownloadURL().then(function (url) {
            setTimeout(() => resolve(url), 1000)
          })
        });
      });
      var imgurl = await file11
      var min = 1000;
      var max = 9999;
      var rand = Math.round(min + (Math.random() * (max - min)));

      var newdata = {
        firstname: values.FirstName,
        email: values.Email,
        lastname: values.LastName,
        gender: values.Gender,
        designation: values.Designation,
        profilepic: imgurl,
        phone: values.PhoneNumber,
        password: values.PassWord
      }
      var usercreate = await axios
        .post("http://localhost:2100/users/create", newdata)
        .then((res) => {
          return res.data
        });
        console.log(usercreate)
      if (usercreate !== null) {
        alert("User Created Successfully")
        if (newdata.gender == 'male' || newdata.gender == 'Male') {
          var gendervalue = 0
        } else {
          var gendervalue = 1
        }
        var data = {
          "operator": "AddPerson",
          "picURI": `${newdata.profilepic}`,
          "info": {
            "DeviceID": 1872723,
            "CustomizeID": `${rand}`,
            "CardType": 0, "IdCard": "430923199011024590",
            "PersonType": 0,
            "Name": `${newdata.firstname} ${newdata.lastname}`,
            "Gender": 0,
            "Nation": 1,
            "Birthday": "1990-11-04",
            "Telnum": "18888888888",
            "ValidBegin": "2022-01-30T09:09:20",
            "ValidEnd": "2022-01-30T16:49:00"
          }
        }
        console.log(data)

        var username = 'admin'
        var password = 'admin'
        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        console.log(token)
        var facepanelcreate = await axios
          .post("http://192.168.0.105/action/AddPerson", data, {
            headers: {
              'Authorization': `Basic ${token}`
            }
          })
          .then((res) => {
            return res.data
          });
        if (facepanelcreate != null) {
          console.log("User Created Successfully")
        }
      }
    }
  })

  return (
    <div className={styles.formHead}>
      <h4>Create Employee</h4>
      <div className={styles.formCard}>
        <h6>Employee Details</h6>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label htmlFor="FirstName">First Name</label>
          <input className={styles.m1} id="FirstName" type="text" onChange={formik.handleChange}
            defaultValue={formik.values.firstname} />
          <label htmlFor="LastName">Last Name</label>
          <input className={styles.m1} id="LastName" type="text" onChange={formik.handleChange}
            defaultValue={formik.values.lastname} />
          <label htmlFor="Gender">Gender</label>
          <input className={styles.m1} id="Gender" type="text" onChange={formik.handleChange}
            defaultValue={formik.values.gender} />
          <label htmlFor="Designation">Designation</label>
          <input className={styles.m1} id="Designation" type="text" onChange={formik.handleChange}
            defaultValue={formik.values.department} />
          <label htmlFor="Department">Department</label>
          <input className={styles.m1} id="Department" type="text" />
          <label htmlFor="Email">Email</label>
          <input className={styles.m1} id="Email" type="email" onChange={formik.handleChange}
            defaultValue={formik.values.email} />
          <label htmlFor="PhoneNumber">Phone Number</label>
          <input className={styles.m1} id="PhoneNumber" type="number" onChange={formik.handleChange}
            defaultValue={formik.values.phone} />
          <label htmlFor="PassWord">PassWord</label>
          <input className={styles.m1} id="PassWord" type="text" onChange={formik.handleChange}
            defaultValue={formik.values.password} />
          <h6>Facility Access</h6>
          <div className={styles.checkBoxContainer}>
            <div className={styles.checkBox}>
              <FormControlLabel
                className={styles.f1}
                // labelPlacement="bottom"
                control={<Checkbox />}
                label="Meeting Hall"
              />
              <FormControlLabel
                className={styles.f1}
                // labelPlacement="bottom"
                control={<Checkbox />}
                label="Table Reservation"
              />
            </div>

            <select id="cars" name="cars">
              <option value="floor">Floor</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className={styles.imgUpload}>
            <h6>Employee Image</h6>
            <input type="file" id="myFile" name="filename" onChange={formik.handleChange}
              defaultValue={formik.values.image} />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeForm;
