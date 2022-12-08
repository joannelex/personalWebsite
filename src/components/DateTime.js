import React, { useState, useEffect } from 'react'
import './DateTime.css'

export const DateTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)

        return function clean() {
            clearInterval(timer)
        }
    });

    return(
        <div className="date-time-container">
            <div className="time">{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</div>
            <div className="date">{date.toLocaleDateString([], {weekday: "short"})} {date.toLocaleDateString([], {month: "short", day: "numeric"})}</div>
        </div>
    )
}

export default DateTime