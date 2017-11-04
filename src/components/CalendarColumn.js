import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import '../../styles/CalendarColumn.css';
import CalendarDay from './CalendarDay';
import { DAYS_OF_WEEK } from '../utils/constants';
import { daysInMonth } from '../utils/utils';

class CalendarColumn extends React.Component {
  renderColumn() {
    const days = this.props.calendar[this.props.dayOfWeek];
    return days.map(day => {
      if (!day)
        return (
          <CalendarDay
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
    return (
      <div className="CalendarColumn-wrap">
        <div className="CalendarColumn-header">{this.props.dayOfWeek}</div>
        <div className="CalendarColumn-days">{this.renderColumn()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { date: state.date, calendar: state.calendar };
}

export default connect(mapStateToProps, null)(CalendarColumn);
