import React from 'react'

const Locker = () => {
    return (
        <div className='card carddash'>
            <div className='card-body'>
                <h6>Locker Report</h6>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Level</th>
                            <th scope="col">Tables</th>
                            <th scope="col">Lockers</th>
                            <th scope="col">Spare Lockers</th>
                            <th scope="col">Available Lockers</th>
                            <th scope="col">Available Spare Lockers</th>
                            <th scope="col">Booked Spare Lockers</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>12</td>
                            <td>55</td>
                            <td>8</td>
                            <td>8</td>
                            <td>8</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>12</td>
                            <td>55</td>
                            <td>8</td>
                            <td>8</td>
                            <td>8</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>12</td>
                            <td>55</td>
                            <td>8</td>
                            <td>8</td>
                            <td>8</td>
                            <td>8</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Locker