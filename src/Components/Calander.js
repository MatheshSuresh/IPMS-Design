import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Calander = () => {
    const [value, onChange] = useState(new Date());
    console.log(value)
    var selecteddate = moment(value).format("DD-MM-YYYY")
    sessionStorage.setItem("seleteddate", selecteddate)
    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}

export default Calander