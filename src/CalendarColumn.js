import React from 'react';
import CalendarDay from './CalendarDay';
import { DAYS_OF_WEEK } from './utils/constants';
import { daysInMonth } from './utils/utils';

class CalendarColumn extends React.Component {
  renderColumn() {
    return this.props.days.map(day => {
      if (!day)
        return (
          <CalendarDay
            color={this.props.color}
            key={`column-${this.props.year}-${this.props.month}-${day}-${this
              .props.dayOfWeek}-${Math.floor(Math.random() * 1000)}`}
          />
        );
      else
        return (
          <CalendarDay
            color={this.props.color}
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
    border: '1px solid red'
  },
  header: {
    flex: 1
  }
};

export default CalendarColumn;
