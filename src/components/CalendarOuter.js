import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setEvents } from '../actions';

import Calendar from './Calendar';
import CalendarForm from './CalendarForm';

class CalendarOuter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.setEvents(this.props.eventData);
  }
  renderCalendar() {
    return <Calendar />;
  }
  renderForm() {
    return <CalendarForm onCreateEvent={this.props.onCreateEvent} />;
  }
  renderView() {
    console.log('EVENTS: ', this.props.events);
    switch (this.props.view) {
      case 'form':
        return this.renderForm();
      case 'calendar':
      default:
        return this.renderCalendar();
    }
  }
  render() {
    return <div style={styles}>{this.renderView()}</div>;
  }
}
const styles = {
  display: 'grid',
  gridTemplateRows: '1fr 4fr',
  boxSizing: 'border-box',
  border: '1px solid black',
  height: '100%'
};
function mapStateToProps(state) {
  return { view: state.view, events: state.events };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setEvents }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CalendarOuter);
