import React from 'react';
import CalendarOuter from './CalendarOuter';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { binDates, mapDays, daysInMonth } from './utils/utils';

const DEFAULTS = {
  fontFamily: 'Times New Roman'
};

class AvailabilityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { month: 9, year: 2017, bins: mapDays() };
    this.onMonthChange = this.onMonthChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);

    let userStyles = this.gatherUserStyles();
    this.styles = Object.assign(DEFAULTS, userStyles);
  }

  gatherUserStyles() {
    let userStyles = {};
    let styles = Object.keys(DEFAULTS);
    styles.forEach(style => {
      if (this.props.hasOwnProperty(style)) {
        userStyles[style] = this.props[style];
      }
    });
    return userStyles;
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
      <CalendarOuter style={this.styles}>
        <CalendarHeader
          onMonthChange={this.onMonthChange}
          onYearChange={this.onYearChange}
        />
        <CalendarBody
          month={this.state.month}
          year={this.state.year}
          bins={bins}
        />
      </CalendarOuter>
    );
  }
}

export default AvailabilityCalendar;
