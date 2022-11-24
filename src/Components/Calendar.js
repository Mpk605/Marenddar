import '../Assets/Calendar.css';

import React, { useState, useEffect } from "react";

import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

function Calendar() {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  const d = new Date();

  function mod(n, m) {
    return ((n % m) + m) % m;
  }

  function changeMonth(increment) {
    setMonth(mod(month + increment, 12));
  }

  function changeYear(increment) {
    setYear(year + increment);
  }

  useEffect(() => {
    setYear(d.getFullYear());
    setMonth(d.getMonth());
  }, []);

  return (
    <div>
      <CalendarHeader year={year} month={month} changeMonth={changeMonth} changeYear={changeYear} />

      <CalendarBody year={year} month={month} />
    </div>
  );
}

export default Calendar;
