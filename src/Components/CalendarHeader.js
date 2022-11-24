import '../Assets/Calendar.css';

function CalendarHeader(props) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="calendar-header">
      <button onClick={() => { props.changeMonth(-1) }}>{"<<"}</button> {monthNames[props.month]} <button onClick={() => { props.changeMonth(1) }}>{">>"}</button> <br />
      <button onClick={() => { props.changeYear(-1) }}>{"<<"}</button> {props.year} <button onClick={() => { props.changeYear(1) }}>{">>"}</button> <br />
    </div>
  );
}

export default CalendarHeader;