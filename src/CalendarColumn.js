import React from 'react';
import CalendarDay from './CalendarDay';
import { DAYS_OF_WEEK } from './utils/constants';
import { daysInMonth } from './utils/utils';

class CalendarColumn extends React.Component {
  renderColumn() {
    let dowIndex = DAYS_OF_WEEK.indexOf(this.props.dayOfWeek);
    let numDays = daysInMonth(this.props.month, this.props.year);
    let numDaysAdded = 0;
    let cells = [];
    for (let i = 1; i <= numDays; i++) {
      let date = new Date(this.props.year, this.props.month, i);
      let dow = date.getDay();
      if (DAYS_OF_WEEK[dow] === this.props.dayOfWeek) {
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
  // renderColumn() {
  //   let dowIndex = DAYS_OF_WEEK.indexOf(this.props.dayOfWeek);
  //   console.log(this.props.dayOfWeek, dowIndex);
  //   let numDays = daysInMonth(this.props.month, this.props.year);
  //   let numDaysAdded = 0;
  //   let cells = [];
  //   for (let i = 1; i <= numDays; i++) {
  //     let date = new Date(this.props.year, this.props.month, i);
  //     let dow = date.getDay();
  //     if (DAYS_OF_WEEK[dow] === this.props.dayOfWeek) {
  //       if (!cells.length && i > dowIndex + 1) {
  //         cells.push(<CalendarDay />);
  //       }
  //       cells.push(
  //         <CalendarDay
  //           key={`${this.props.year}-${this.props.month}-${i}`}
  //           year={this.props.year}
  //           month={this.props.month}
  //           day={i}
  //         />
  //       );
  //     }
  //   }
  //   console.log(this.props);
  //   return cells;
  // }
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
