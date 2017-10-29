import React from 'react';
import CalendarDay from './CalendarDay';
import { DAYS_OF_WEEK } from '../utils/constants';
import { daysInMonth } from '../utils/utils';

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
            onChangeView={this.props.onChangeView}
            events={this.props.events}
          />
        );
    });
  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.header}>{this.props.dayOfWeek}</div>
        <div>{this.renderColumn()}</div>
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
    justifyContent: 'flex-start'
  },
  header: {
    flex: 1,
    backgroundColor: '#555',
    padding: '3px 0px',
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    // backgroundColor: 'rgb(253, 0, 67)',
    color: 'white'
  }
};

export default CalendarColumn;
