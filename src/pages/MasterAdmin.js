import React from 'react'
import Employeeprofile from '../Components/Employeeprofile'
import History from '../Components/History'

const MasterAdmin = () => {
    return (
        <div>
            <b>MASTER ADMIN</b>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <Employeeprofile />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-12'>
                    <History />
                </div>
            </div>
        </div>
    )
}

export default MasterAdmin