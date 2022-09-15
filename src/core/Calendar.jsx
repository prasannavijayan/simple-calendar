import React, { useState } from "react";
import { generateCalendar } from "./utils";
import { MONTHS } from "./constants";

const Calendar = (props) => {

    const _generateCalendar = (_current) => {
        return generateCalendar(
            _current,
            props.useShortWeekDays
        );
    }

    // Current Date
    const [currentDate, setCurrentDate] = useState(new Date());
    const [calendarUI, setCalendarUI] = useState(_generateCalendar(currentDate));

    const month = MONTHS[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const getPreviousMonth = () => {
        let date = currentDate;
        if (date.getMonth() === 0) {
            date = new Date(date.getFullYear() - 1, 11);
            setCurrentDate(date);
            setCalendarUI(_generateCalendar(date));
        } else {
            date = new Date(date.getFullYear(), date.getMonth() - 1)
            setCurrentDate(date);
            setCalendarUI(_generateCalendar(date));
        }
    }

    const getNextMonth = () => {
        let date = currentDate;
        if (date.getMonth() === 11) {
            date = new Date(date.getFullYear() + 1, 0);
            setCurrentDate(date);
            setCalendarUI(_generateCalendar(date));
        } else {
            date = new Date(date.getFullYear(), date.getMonth() + 1)
            setCurrentDate(date);
            setCalendarUI(_generateCalendar(date));
        }
    }

    return <div id="sc-main" className="container">
        <div className="sc-month-toggler">
            <h1 className="text-center">
                <a id="left" href="#" onClick={getPreviousMonth}> &larr; </a>
                <span id="month">{month}</span>
                <span>&nbsp;</span>
                <span id="year">{year}</span>
                <a id="right" href="#" onClick={getNextMonth}> &rarr; </a>
            </h1>
        </div>
        <div className="row">
            <div>
                <table className="sc-table">
                    {calendarUI}
                </table>
            </div>
        </div>
    </div>
};

export default Calendar;