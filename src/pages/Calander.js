import React from 'react'
import Calandercom from '../Components/Calander'
import Calenderdetails from '../Components/Calenderdetails';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const Calander = () => {
  return (
    <div>
      <b>CALANDER</b>
      <div className='row mt-2'>
        <div className='col-md-4'>
          <tr>
            <th scope="row"> <button className='btn detailsbtn m-4'>Meeting Hall</button> </th>
            <td > <button className='btn detailsbtn m-2'>Hot Desking</button></td>
          </tr>
          <Calandercom />
        </div>
        <div className='col-md-8'>
        <tr>
            <th scope="row"><Link to="/occupent"><button className='btn detailsbtn m-4'>Create New Booking</button></Link></th>
          </tr>
          <Calenderdetails />
        </div>

      </div>


    </div>
  )
}

export default Calander