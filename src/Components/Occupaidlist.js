import React from 'react'
import Avatar from '@mui/material/Avatar';

const Occupaidlist = () => {
    return (
        <div className='card carddash'>
            <div className='card-body'>
                <h6>Occupaid List</h6>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Time Of Entering</th>
                            <th scope="col">Time Of Leaving</th>
                            <th scope="col">Table</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" style={{ display: "flex" }}><span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span><span className='m-2'> Rajesh</span></th>
                            <td>10.30 Am</td>
                            <td>06.30 Pm</td>
                            <td>Table 1</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ display: "flex" }}><span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span><span className='m-2'> Rajesh</span></th>
                            <td>10.30 Am</td>
                            <td>06.30 Pm</td>
                            <td>Table 1</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ display: "flex" }}><span><Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span><span className='m-2'> Rajesh</span></th>
                            <td>10.30 Am</td>
                            <td>06.30 Pm</td>
                            <td>Table 1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Occupaidlist