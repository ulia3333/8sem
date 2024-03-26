import React from 'react';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';
import '../styles/Calendar.css'

export default class Calendar extends React.Component {
  constructor() {
    super();

    this.weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.state = {
      selectedDays: [],
      currentDay: new Date(),
    }
  }

  changeSelectedDay = (day) => {
    const dateStr = day.date.toDateString();
    if (this.state.selectedDays.some(d => d.toDateString() === dateStr)) {
      this.setState(prevState => ({
        selectedDays: prevState.selectedDays.filter(d => d.toDateString() !== dateStr),
      }));
    } else {
      this.setState(prevState => ({
        selectedDays: [...prevState.selectedDays, new Date(day.year, day.month, day.number)],
      }));
    }
  }
  

  previousMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setMonth(this.state.currentDay.getMonth() - 1)) })
  }

  nextMonth = () => {
    this.setState({ currentDay: new Date(this.state.currentDay.setMonth(this.state.currentDay.getMonth() + 1)) })
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar-body">
          <CalendarHeader
                currentDay={this.state.currentDay}
                selectedDays={this.state.selectedDays}
                previousMonth={this.previousMonth}
                nextMonth={this.nextMonth}/>
          <CalendarBody 
  day={this.state.currentDay} 
  selectedDays={this.state.selectedDays} 
  changeSelectedDay={this.changeSelectedDay} />

        </div>
      </div>
    )
  }
}