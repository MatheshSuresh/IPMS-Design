import React from 'react'
import Avatar from '@mui/material/Avatar';

const Calenderdetails = () => {
  return (
    <div className='card carddash'>
    <div className='card-body'>
        <h6>Booking Details</h6>
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Facility</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" style={{ display: "flex" }}><span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span><span className='m-2'> Rajesh</span></th>
                    <td>3 December 2021</td>
                    <td><button className='btn bookbtn'>Present</button> </td>
                    <td>Table 1</td>
                </tr>
                <tr>
                    <th scope="row" style={{ display: "flex" }}><span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span><span className='m-2'> Rajesh</span></th>
                    <td>3 December 2021</td>
                    <td><button className='btn bookbtn'>Present</button> </td>
                    <td>Table 1</td>
                </tr>
                <tr>
                    <th scope="row" style={{ display: "flex" }}><span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span><span className='m-2'> Rajesh</span></th>
                    <td>3 December 2021</td>
                    <td><button className='btn reschdulebtn'>Absent</button> </td>
                    <td>Meeting Room</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Calenderdetails