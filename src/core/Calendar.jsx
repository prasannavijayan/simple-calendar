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


// $(document).ready(function() {
//     var currentDate = new Date();
//     function generateCalendar(d) {
//       function monthDays(month, year) {
//         var result = [];
//         var days = new Date(year, month, 0).getDate();
//         for (var i = 1; i <= days; i++) {
//           result.push(i);
//         }
//         return result;
//       }
//       Date.prototype.monthDays = function() {
//         var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
//         return d.getDate();
//       };
//       var details = {
//         // totalDays: monthDays(d.getMonth(), d.getFullYear()),
//         totalDays: d.monthDays(),
//         weekDays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//         months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
//       };
//       var start = new Date(d.getFullYear(), d.getMonth()).getDay();
//       var cal = [];
//       var day = 1;
//       for (var i = 0; i <= 6; i++) {
//         cal.push(['<tr>']);
//         for (var j = 0; j < 7; j++) {
//           if (i === 0) {
//             cal[i].push('<td>' + details.weekDays[j] + '</td>');
//           } else if (day > details.totalDays) {
//             cal[i].push('<td>&nbsp;</td>');
//           } else {
//             if (i === 1 && j < start) {
//               cal[i].push('<td>&nbsp;</td>');
//             } else {
//               cal[i].push('<td class="day">' + day++ + '</td>');
//             }
//           }
//         }
//         cal[i].push('</tr>');
//       }
//       cal = cal.reduce(function(a, b) {
//         return a.concat(b);
//       }, []).join('');
//       $('table').append(cal);
//       $('#month').text(details.months[d.getMonth()]);
//       $('#year').text(d.getFullYear());
//       $('td.day').mouseover(function() {
//         $(this).addClass('hover');
//       }).mouseout(function() {
//         $(this).removeClass('hover');
//       });
//     }
//     $('#left').click(function() {
//       $('table').text('');
//       if (currentDate.getMonth() === 0) {
//         currentDate = new Date(currentDate.getFullYear() - 1, 11);
//         generateCalendar(currentDate);
//       } else {
//         currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
//         generateCalendar(currentDate);
//       }
//     });
//     $('#right').click(function() {
//       $('table').html('<tr></tr>');
//       if (currentDate.getMonth() === 11) {
//         currentDate = new Date(currentDate.getFullYear() + 1, 0);
//         generateCalendar(currentDate);
//       } else {
//         currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
//         generateCalendar(currentDate);
//       }
//     });
//     generateCalendar(currentDate);
//   });