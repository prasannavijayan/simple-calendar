import React from "react";
import { MONTHS, WEEKDAYS, WEEKDAYS_SHORT } from "./constants";

// Date :: Prototype
Date.prototype.monthDays = function() {
    const d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    return d.getDate();
};

// generateCalendar
const generateCalendar = (date, useShortWeekDays = false) => {
    const details = {
        // totalDays: monthDays(d.getMonth(), d.getFullYear()),
        totalDays: date.monthDays(),
        weekDays: useShortWeekDays ? WEEKDAYS_SHORT : WEEKDAYS,
        months: MONTHS
    };

    var start = new Date(date.getFullYear(), date.getMonth()).getDay();
    var day = 1;

    const getCalendarDays = (i, j) => {
        let dayHTML = <></>;
        if (i == 0) {
            dayHTML = <th>{details.weekDays[j]}</th>;
        } else if (day > details.totalDays) {
            dayHTML = <td></td>;
        } else {
            if (i === 1 && j < start) {
                dayHTML = <td></td>
            } else {
                dayHTML = <td className="day">{day++}</td>
            }
        }
    
        return dayHTML;
    };

    return <tbody>
        {[...Array(7)].map((x, i) => (
            <tr key={i+2}>
                {[...Array(7)].map((y, j) => {
                    return <React.Fragment key={j+10}>
                        {getCalendarDays(i, j)}
                    </React.Fragment>
                })}
            </tr>   
        ))}
    </tbody>
}


export {
    generateCalendar
}