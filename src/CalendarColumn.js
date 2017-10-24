import React from 'react';
import CalendarDay from './CalendarDay';

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const DOW = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

class CalendarColumn extends React.Component {
  renderColumn() {
    let dowIndex = DOW.indexOf(this.props.dayOfWeek);
    console.log(this.props.dayOfWeek, dowIndex);
    let numDays = daysInMonth(this.props.month, this.props.year);
    let cells = [];
    for (let i = 1; i <= numDays; i++) {
      let date = new Date(this.props.year, this.props.month, i);
      let dow = date.getDay();
      if (DOW[dow] === this.props.dayOfWeek) {
        if (!cells.length && i > dowIndex + 1) {
          cells.push(<CalendarDay />);
        }
        cells.push(
          <CalendarDay
            key={`${this.props.year}-${this.props.month}-${i}`}
            year={this.props.year}
            month={this.props.month}
            day={i}
          />
        );
      }
    }
    console.log(this.props);
    return cells;
  }
  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.header}>{this.props.dayOfWeek}</div>
        {this.renderColumn()}
      </div>
    );
  }
}

const styles = {
  wrap: {
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    border: '1px solid red'
  },
  header: {
    flex: 1
  }
};

export default CalendarColumn;
