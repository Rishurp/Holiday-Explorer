import React, { FC } from 'react'
import {Holiday} from "../types/Holiday"
import "./HolidayList.css"

interface ComponentProps {
    holidays : Holiday[]
}
const HolidayList:FC<ComponentProps> = ({holidays}) => {
  return (
    <div id="holiday-list" className='holidayList'>
        {holidays.map((holiday) => {
            return (
                <div key={holiday.Date} className="holidayCard ">
                    <h1 className="holidayTitle">{holiday['Holiday Name']}</h1>
                    <p className='holidayDate'>{new Date(holiday.Date).toLocaleDateString(undefined,{day: "numeric", month: "long"})}</p>
                    <p className='holidayType'>{holiday.Type}</p>
                </div>
            )    
        })}
    </div>
  )
}

export default HolidayList