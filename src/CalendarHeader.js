import React from 'react';
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
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
      return <option value={index}>{month}</option>;
    });
  }
  renderYears() {
    const years = [];
    for (let i = 2000; i <= 2017; i++) {
      years.push(<option value={i}>{i}</option>);
    }
    return years;
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <select onChange={this.monthChange} value={this.state.month}>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <select onChange={this.yearChange} value={this.state.year}>
          {this.renderYears()}
        </select>
      </div>
    );
  }
}

export default CalendarHeader;
