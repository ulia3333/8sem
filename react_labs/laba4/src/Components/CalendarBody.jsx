import React from 'react';

class CalendarBody extends React.Component {
  constructor(){
    super()
    this.weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  }
    render() {

    const firstDayOfMonth = new Date(this.props.day.getFullYear(), this.props.day.getMonth(), 1)
    const weekdayOfFirstDay = firstDayOfMonth.getDay()
    let currentDays = []

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6 )
        } else if (day === 0) {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1 ))
        } else {
          firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)
        }

        let calendarDay = {
          currentMonth: (firstDayOfMonth.getMonth() === this.props.day.getMonth()),
          date: (new Date(firstDayOfMonth)),
          month: firstDayOfMonth.getMonth(),
          number: firstDayOfMonth.getDate(),
          selected: this.props.selectedDays.some(d => d.toDateString() === firstDayOfMonth.toDateString()),
          year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay)
  }

  return (
    <div>
      <div className="table-header">
          {
            this.weekdays.map((weekday, id) => {
              return <div className="weekday" key={id}><p>{weekday}</p></div>
            })
          }
          </div>
    <div className="table-content">
      {
        currentDays.map((day, id) => {
          const isToday = day.date.toDateString() === new Date().toDateString();
          let dayClass = "calendar-day";
          if (day.currentMonth) {
            dayClass += " current";
          }
          if (this.props.selectedDays.some(d => d.toDateString() === day.date.toDateString())) {
            dayClass += " selected";
          }
          if (isToday) {
            dayClass += " today"; 
          }

          return (
            <div className={dayClass} onClick={() => this.props.changeSelectedDay(day)} key={id}>
              <p>{day.number}</p>
            </div>
          );
        })
      }
    </div>
    </div>
     
  );
  }
}

export default CalendarBody;