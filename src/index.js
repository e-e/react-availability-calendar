import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import reducers from './reducers';

import CalendarOuter from './components/CalendarOuter';

import Calendar from './components/Calendar';
import CalendarForm from './components/CalendarForm';

const DEFAULTS = {
  fontFamily: 'Times New Roman'
};

const createStoreWithMiddleware = applyMiddleware()(createStore);

class AvailabilityCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'calendar' };
    let userStyles = this.gatherUserStyles();
    this.styles = Object.assign(DEFAULTS, userStyles);
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

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <CalendarOuter style={this.styles} />
      </Provider>
    );
  }
}

export default AvailabilityCalendar;
