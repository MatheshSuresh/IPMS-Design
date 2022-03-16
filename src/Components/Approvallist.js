import React from 'react'

const Approvallist = () => {
  return (
    <div className='card carddash'>
            <div className='card-body'>
                <h6>Approvel List</h6>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Table No</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table 1</td>
                            <td><button className='btn bookbtn'>Approve</button> <button className='btn reschdulebtn'>Reschedule</button></td>
                        </tr>
                        <tr>
                            <td>Table 1</td>
                            <td><button className='btn bookbtn'>Approve</button> <button className='btn reschdulebtn'>Reschedule</button></td>
                        </tr>
                        <tr>
                            <td>Table 1</td>
                            <td><button className='btn bookbtn'>Approve</button> <button className='btn reschdulebtn'>Reschedule</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Approvallist