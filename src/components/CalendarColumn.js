import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CalendarDay from './CalendarDay';
import { DAYS_OF_WEEK } from '../utils/constants';
import { daysInMonth } from '../utils/utils';

class CalendarColumn extends React.Component {
  renderColumn() {
    const days = this.props.calendar[this.props.dayOfWeek];
    // console.log('calendar', this.props.calendar);
    return days.map(day => {
      if (!day)
        return (
          <CalendarDay
            color={this.props.color}
            key={`column-${this.props.date.year}-${this.props.date
              .month}-${day}-${this.props.dayOfWeek}-${Math.floor(
              Math.random() * 1000
            )}`}
          />
        );
      else
        return (
          <CalendarDay
            key={`day-${this.props.date.year}-${this.props.date
              .month}-${day}-${this.props.dayOfWeek}`}
            year={this.props.date.year}
            month={this.props.date.month}
            day={day}
            onChangeView={this.props.onChangeView}
          />
        );
    });
  }

  render() {
    console.log('dayOfWeek: ', this.props.dayOfWeek);
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

function mapStateToProps(state) {
  return { date: state.date, calendar: state.calendar };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ setYear, setMonth }, dispatch);
// }

export default connect(mapStateToProps, null)(CalendarColumn);
