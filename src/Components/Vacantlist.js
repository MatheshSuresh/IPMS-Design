import React from 'react'


const Vacantlist = () => {
    return (
        <div className='card carddash'>
            <div className='card-body'>
                <h6>Vacant List</h6>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Table No</th>
                            <th scope="col">Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Table 1</td>
                            <td><button className='btn bookbtn'>Book</button></td>
                        </tr>
                        <tr>
                            <td>Table 1</td>
                            <td><button className='btn bookbtn'>Book</button></td>
                        </tr>
                        <tr>
                            <td>Table 1</td>
                            <td><button className='btn bookbtn'>Book</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Vacantlist