import React from 'react';
import CalendarOuter from './CalendarOuter';

import Calendar from './Calendar';
import CalendarForm from './CalendarForm';

const DEFAULTS = {
  fontFamily: 'Times New Roman'
};

class AvailabilityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'calendar' };
    let userStyles = this.gatherUserStyles();
    this.styles = Object.assign(DEFAULTS, userStyles);
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({ view });
  }
  gatherUserStyles() {
    let userStyles = {};
    let styles = Object.keys(DEFAULTS);
    styles.forEach(style => {
      if (this.props.hasOwnProperty(style)) {
        userStyles[style] = this.props[style];
      }
    });
    return userStyles;
  }
  renderForm() {
    return (
      <CalendarForm onChangeView={this.changeView} events={this.props.events} />
    );
  }
  renderCalendar() {
    return (
      <Calendar onChangeView={this.changeView} events={this.props.events} />
    );
  }
  renderView() {
    switch (this.state.view) {
      case 'form':
        return this.renderForm();
      case 'calendar':
      default:
        return this.renderCalendar();
    }
  }
  render() {
    return (
      <CalendarOuter style={this.styles}>{this.renderView()}</CalendarOuter>
    );
  }
}

export default AvailabilityCalendar;
