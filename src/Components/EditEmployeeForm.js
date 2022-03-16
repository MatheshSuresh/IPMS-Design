import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios"
import styles from "../assets/css/CreateEmployeeForm.module.css";
import { firebase } from '../database/firebase'
import { useSelector } from "react-redux";
const CreateEmployeeForm = () => {
    const [userdatanew, setuserdata] = useState([]);
    const filterdata = useSelector((store) => store);
    useEffect(() => {
        userdata()
    }, [])
    const userdata = async () => {
        var userlist = await axios.get(`${process.env.REACT_APP_SERVER}/users/viewall`).then((res) => { return res.data })
        var singleuser = await userlist.filter((data) => { return data.id === Number(filterdata.viewuser) })
        if (singleuser.length !== 0) {
            setuserdata(singleuser[0])
        }
    }



    const formik = useFormik({
        initialValues: {
            firstname: userdatanew.firstnam,
            gender: "",
            designation: "",
            department: "",
            email: "",
            phone: "",
            image: "",
        },

        onSubmit: async () => {
            var firstname = document.getElementById("FirstName").value
            var lastname = document.getElementById("LastName").value
            var gender = document.getElementById("Gender").value
            var designation = document.getElementById("Designation").value
            var email = document.getElementById("Email").value
            var phone = document.getElementById("PhoneNumber").value
            var file = document.getElementById("myFile").files
            var min = 1000;
            var max = 9999;
            var rand = Math.round(min + (Math.random() * (max - min)));
            if (file.length !== 0) {
                let file11 = new Promise((resolve, reject) => {
                    var storageRef = firebase.storage().ref("profile/" + file[0].name);
                    storageRef.put(file[0]).then(function (snapshot) {
                        storageRef.getDownloadURL().then(function (url) {
                            setTimeout(() => resolve(url), 1000)
                        })
                    });
                });
                var imgurl = await file11
                var newdata = {
                    firstname: firstname,
                    email: email,
                    lastname: lastname,
                    gender: gender,
                    designation: designation,
                    profilepic: imgurl,
                    phone: phone,
                    id: Number(filterdata.viewuser)
                }

                var usercreate = await axios.post("http://localhost:2100/users/update", newdata).then((res) => { return res.data });
                if (usercreate !== undefined) {
                    alert("User Updated Successfully")
                    if (newdata.gender === 'male' || newdata.gender === 'Male') {
                        var gendervalue = 0
                    } else {
                        var gendervalue = 1
                    }
                    var data = {
                        "operator": "EditPerson",
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
                    var username = 'admin'
                    var password = 'admin'
                    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
                    console.log(token)
                    var facepanelcreate = await axios
                        .post("http://192.168.0.105/action/EditPerson", data, {
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
            } else {
                var newdata1 = {
                    firstname: firstname,
                    email: email,
                    lastname: lastname,
                    gender: gender,
                    designation: designation,
                    phone: phone,
                    id: Number(filterdata.viewuser)
                }
                var usercreatenew = await axios.post("http://localhost:2100/users/update", newdata1).then((res) => { return res.data });
                if (usercreatenew !== undefined) {
                    alert("User Updated Successfully")
                    if (newdata.gender === 'male' || newdata.gender === 'Male') {
                        var gendervalue = 0
                    } else {
                        var gendervalue = 1
                    }
                    var data = {
                        "operator": "EditPerson",
                        "info": {
                            "DeviceID": 1872723,
                            "CustomizeID": `${rand}`,
                            "CardType": 0, "IdCard": "430923199011024590",
                            "PersonType": 0,
                            "Name": `${newdata1.firstname} ${newdata1.lastname}`,
                            "Gender": 0,
                            "Nation": 1,
                            "Birthday": "1990-11-04",
                            "Telnum": "18888888888",
                            "ValidBegin": "2022-01-30T09:09:20",
                            "ValidEnd": "2022-01-30T16:49:00"
                        }
                    }
                    var username = 'admin'
                    var password = 'admin'
                    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
                    console.log(token)
                    var facepanelcreate = await axios
                        .post("http://192.168.0.105/action/EditPerson", data, {
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
        }
    })

    return (
        <div className={styles.formHead}>
            <h4>Edit Employee</h4>
            <div className={styles.formCard}>
                <h6>Employee Details</h6>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label htmlFor="FirstName">First Name</label>
                    <input className={styles.m1} id="FirstName" type="text" defaultValue={userdatanew.firstname} />
                    <label htmlFor="LastName">Last Name</label>
                    <input className={styles.m1} id="LastName" type="text" defaultValue={userdatanew.lastname} />
                    <label htmlFor="Gender">Gender</label>
                    <input className={styles.m1} id="Gender" type="text" defaultValue={userdatanew.gender} />
                    <label htmlFor="Designation">Designation</label>
                    <input className={styles.m1} id="Designation" type="text" defaultValue={userdatanew.designation} />
                    {/* <label htmlFor="Department">Department</label>
                    <input className={styles.m1} id="Department" type="text" /> */}

                    <label htmlFor="Email">Email</label>
                    <input className={styles.m1} id="Email" type="email" defaultValue={userdatanew.email} />
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input className={styles.m1} id="PhoneNumber" type="number" defaultValue={userdatanew.phone} />
                    {/* <h6>Facility Access</h6>
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
                    </div> */}
                    <div className={styles.imgUpload}>
                        <h6>Employee Image</h6>
                        <input type="file" id="myFile" name="filename"
                            defaultValue={formik.values.image} />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployeeForm;
