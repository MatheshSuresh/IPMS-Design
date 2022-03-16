import React from 'react'

const History = () => {
    return (
        <div className='card carddash'>
            <div className='card-body'>
                <h6>History Details</h6>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Log Number</th>
                            <th scope="col">Date Of Scanning</th>
                            <th scope="col">Time Of Scanning</th>
                            <th scope="col">Current Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>3 December 2021</td>
                            <td>06.30 Pm</td>
                            <td><button className='btn bookbtn'>Present</button> </td>
                            <td><button className='btn detailsbtn'>Details</button> </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>3 December 2021</td>
                            <td>06.30 Pm</td>
                            <td><button className='btn bookbtn'>Present</button> </td>
                            <td><button className='btn detailsbtn'>Details</button> </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>3 December 2021</td>
                            <td>06.30 Pm</td>
                            <td><button className='btn reschdulebtn'>Absent</button> </td>
                            <td><button className='btn detailsbtn'>Details</button> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default History