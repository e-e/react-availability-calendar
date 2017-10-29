import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { binDates, mapDays, daysInMonth } from '../utils/utils';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: 9, year: 2017, bins: mapDays() };
  }

  render() {
    let bins = binDates(this.state.year, this.state.month);
    return (
      <div>
        <CalendarHeader />
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
