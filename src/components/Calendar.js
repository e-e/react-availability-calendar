import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { binDates, mapDays, daysInMonth } from '../utils/utils';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: 9, year: 2017, bins: mapDays() };
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
  }

  onMonthChange(month) {
    this.setState({ month });
  }
  onYearChange(year) {
    this.setState({ year });
  }
  render() {
    let bins = binDates(this.state.year, this.state.month);
    return (
      <div>
        <CalendarHeader
          onMonthChange={this.onMonthChange}
          onYearChange={this.onYearChange}
        />
        <CalendarBody
          month={this.state.month}
          year={this.state.year}
          bins={bins}
          onChangeView={this.props.onChangeView}
          events={this.props.events}
        />
      </div>
    );
  }
}

export default Calendar;
