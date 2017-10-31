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
// let store = createStore(reducers);
let store = createStoreWithMiddleware(reducers);

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
    console.log('STORE: ', store);
    return (
      <Provider store={store}>
        <CalendarOuter
          style={this.styles}
          eventData={this.props.eventData}
          onCreateEvent={this.props.onCreateEvent}
        />
      </Provider>
    );
  }
}

export default AvailabilityCalendar;
