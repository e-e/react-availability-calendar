import React from 'react';
import { MONTHS } from './utils/constants';
class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    this.state = { month: now.getMonth(), year: now.getFullYear() };
    this.monthChange = this.monthChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
  }
  monthChange(event) {
    this.setState({ month: event.target.value });
    this.props.onMonthChange(event.target.value);
  }
  yearChange(event) {
    this.setState({ year: event.target.value });
    this.props.onYearChange(event.target.value);
  }
  renderMonths() {
    const months = [];
    return MONTHS.map((month, index) => {
      return (
        <option value={index} key={`month-${month}`}>
          {month}
        </option>
      );
    });
  }
  renderYears() {
    const years = [];
    for (let i = 2000; i <= 2017; i++) {
      years.push(
        <option value={i} key={`year-${i}`}>
          {i}
        </option>
      );
    }
    return years;
  }
  render() {
    console.log(this.state);
    return (
      <div className="calendar-header">
        <select onChange={this.monthChange} value={this.state.month}>
          {this.renderMonths()}
        </select>
        <select onChange={this.yearChange} value={this.state.year}>
          {this.renderYears()}
        </select>
      </div>
    );
  }
}

export default CalendarHeader;
