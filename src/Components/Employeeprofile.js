import React, { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";
import axios from "axios";

const Employeeprofile = () => {
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
  const edituserdata=()=>{
    sessionStorage.setItem("viewuserid",filterdata.viewuser)
    window.location.replace("/editEmployee")
  }
  return (
    <div className='card carddash'>
      <div className='card-body'>
        <h6>Employee Details</h6>
        <tr>
          <th scope="row">{userdatanew.profilepic !==undefined?<Avatar alt="Remy Sharp" src={userdatanew.profilepic} />:<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />} </th>
          <td >{userdatanew.firstname} {userdatanew.lastname}</td>
          <td ><button className='btn detailsbtn' onClick={edituserdata}>Edit</button></td>
        </tr>
        <tr>
          <th scope="row">ID </th>
          <td style={{ padding: "5px 30px" }}>001</td>
        </tr>
        <tr>
          <th scope="row">Designation </th>
          <td style={{ padding: "5px 30px" }}>{userdatanew.designation}</td>
        </tr>
        <tr>
          <th scope="row">Address </th>
          <td style={{ padding: "5px 30px" }}>{userdatanew.address}</td>
        </tr>
        <tr>
          <th scope="row">DOB </th>
          <td style={{ padding: "5px 30px" }}>{userdatanew.dob}</td>
        </tr>
        <tr>
          <th scope="row">IMEI Number </th>
          <td style={{ padding: "5px 30px" }}>156554564155454</td>
        </tr>
        <tr>
          <th scope="row">Last Scanned </th>
          <td style={{ padding: "5px 30px" }}>07:30 Pm</td>
        </tr>
        <tr>
          <th scope="row">Status </th>
          <td style={{ padding: "5px 30px" }}>Present</td>
        </tr>
      </div>
    </div>
  )
}

export default Employeeprofile