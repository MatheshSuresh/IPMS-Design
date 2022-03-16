import React from 'react'
import Occupaidlist from '../Components/Occupaidlist'
import Vacantlist from '../Components/Vacantlist'
import Approvallist from '../Components/Approvallist'

const Dashboard = () => {
  return (
    <div>
      <b>DASHBOARD</b>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <Occupaidlist />
        </div>
        <div className='col-md-4'>
          <Vacantlist />
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <Approvallist />
        </div>
        
      </div>
      
    </div>
  )
}

export default Dashboard