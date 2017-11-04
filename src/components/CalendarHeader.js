import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setYear, setMonth, setDate } from '../actions';
import Select from '../common/Select';

import { MONTHS } from '../utils/constants';

class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.monthChange = this.monthChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
  }
  componentWillMount() {
    const today = new Date();
    this.props.setDate({ year: today.getFullYear(), month: today.getMonth() });
  }
  monthChange(month) {
    this.props.setDate({
      month: parseInt(month, 10)
    });
  }
  yearChange(year) {
    this.props.setDate({
      year: parseInt(year)
    });
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
  getMonths() {
    let months = [];
    MONTHS.forEach((name, value) => {
      months.push({ name, value });
    });
    return months;
  }
  getYears() {
    let years = [];
    for (let i = 1990; i <= 2025; i++) {
      years.push({ name: i, value: i });
    }
    return years;
  }

  render() {
    return (
      <div className="calendar-header" style={{ textAlign: 'left' }}>
        <Select
          onSelected={this.monthChange}
          value={{
            name: MONTHS[this.props.date.month],
            value: this.props.date.month
          }}
          options={this.getMonths()}
        />
        <Select
          onSelected={this.yearChange}
          value={{
            name: this.props.date.year,
            value: this.props.date.year
          }}
          options={this.getYears()}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { date: state.date };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setYear, setMonth, setDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);
