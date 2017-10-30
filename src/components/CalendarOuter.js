import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from './Calendar';
import CalendarForm from './CalendarForm';

class CalendarOuter extends React.Component {
  renderCalendar() {
    return <Calendar />;
  }
  renderForm() {
    return <CalendarForm />;
  }
  renderView() {
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
  return { view: state.view };
}

export default connect(mapStateToProps, null)(CalendarOuter);
