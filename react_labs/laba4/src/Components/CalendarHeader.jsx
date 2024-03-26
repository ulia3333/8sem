import React from 'react';

class CalendarHeader extends React.Component {
    constructor(){
        super();
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    render() {
      const { currentDay, previousMonth, nextMonth } = this.props;
      return (
        <div className="calendar-header">
          <button onClick={previousMonth}>&lt;</button>
          <h2>{this.months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
          <button onClick={nextMonth}>&gt;</button>
        </div>
      );
    }
    
    
    
  }

export default CalendarHeader;
