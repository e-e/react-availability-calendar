import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setEvents } from '../actions';

import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { binDates, mapDays, daysInMonth } from '../utils/utils';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.setEvents(this.props.eventData);
  }

  render() {
    return (
      <div>
        <CalendarHeader />
        <CalendarBody />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setEvents }, dispatch);
}

export default connect(null, mapDispatchToProps)(Calendar);
