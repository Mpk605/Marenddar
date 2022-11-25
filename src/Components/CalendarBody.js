import '../Assets/Calendar.css';

function CalendarBody(props) {
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  let d = new Date();
  let length = getDaysInMonth(props.year, props.month);
  let previousMonthLength = getDaysInMonth(props.year, props.month - 1);
  let firstDay = (new Date(props.year, props.month)).getDay();

  // Build calendar array
  let days = [];
  let index = 1;
  for (let i = 0; i < 6; i++) {
    let week = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay - 1) {
        week.push({
          'type': 'previous-month',
          'value': previousMonthLength - (firstDay - 1 - j)
        });
      } else if (index > length) {
        week.push({
          'type': 'next-month',
          'value': index - length
        });
        index++;
      } else {
        week.push({
          'type': 'month',
          'value': index
        });
        index++;
      }
    }
    days.push(week);
  }

  return (
    <div className='calendar-body'>
      <table>
        <thead>
          <tr>
            <th>LU</th>
            <th>MA</th>
            <th>ME</th>
            <th>JE</th>
            <th>VE</th>
            <th>SA</th>
            <th>DI</th>
          </tr>
        </thead>
        <tbody>
          {days.map((val) => {
            return <tr>{val.map((val) => {
              return (<td><a className={(d.getDate() == val.value && d.getMonth() == props.month && d.getFullYear() == props.year) ? 'today ' : '' + val.type} href={"/meet_list?date=" + props.year + "-" + (props.month + 1) + "-" + val.value}>{val.value}</a></td>)
            })}</tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarBody;