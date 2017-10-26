import React from 'react';
import CalendarDay from './CalendarDay';
import { DAYS_OF_WEEK } from './utils/constants';
import { daysInMonth } from './utils/utils';

class CalendarColumn extends React.Component {
  renderColumn() {
    return this.props.days.map(day => {
      // console.log(this.props.dayOfWeek, day);
      if (!day)
        return (
          <CalendarDay
            key={`column-${this.props.year}-${this.props.month}-${day}-${this
              .props.dayOfWeek}`}
          />
        );
      else
        return (
          <CalendarDay
            key={`day-${this.props.year}-${this.props.month}-${day}-${this.props
              .dayOfWeek}`}
            year={this.props.year}
            month={this.props.month}
            day={day}
          />
        );
    });
  }

  render() {
    console.log('rendering column');
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
