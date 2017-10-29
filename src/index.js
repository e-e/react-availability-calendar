import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

import CalendarOuter from './components/CalendarOuter';

import Calendar from './components/Calendar';
import CalendarForm from './components/CalendarForm';

const DEFAULTS = {
  fontFamily: 'Times New Roman'
};

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

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
      <Provider store={createStoreWithMiddleware(reducers)}>
        <CalendarOuter style={this.styles}>{this.renderView()}</CalendarOuter>
      </Provider>
    );
  }
}

export default AvailabilityCalendar;
