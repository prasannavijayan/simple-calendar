import { MONTHS, WEEKDAYS } from "./constants";

// Date :: Prototype
Date.prototype.monthDays = function() {
    const d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    return d.getDate();
};

// generateCalendar
const generateCalendar = (date) => {
    const details = {
        // totalDays: monthDays(d.getMonth(), d.getFullYear()),
        totalDays: date.monthDays(),
        weekDays: WEEKDAYS,
        months: MONTHS
    };

    var start = new Date(date.getFullYear(), date.getMonth()).getDay();
    var cal = [];
    var day = 1;
    for (var i = 0; i <= 6; i++) {
        cal.push(['<tr>']);
        for (var j = 0; j < 7; j++) {
            if (i === 0) {
                cal[i].push('<td>' + details.weekDays[j] + '</td>');
            } else if (day > details.totalDays) {
                cal[i].push('<td>&nbsp;</td>');
            } else {
                if (i === 1 && j < start) {
                    cal[i].push('<td>&nbsp;</td>');
                } else {
                    cal[i].push('<td class="day">' + day++ + '</td>');
                }
            }
        }
        cal[i].push('</tr>');
    }
    cal = cal.reduce((a, b) => a.concat(b), []).join('');

    return cal;
}


export {
    generateCalendar
}