import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectDay } from '../actions';

const DEFAULT_STYLE = {
  cell: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    border: '1px solid rgba(200, 200, 200, 0.4)',
    flex: 1,
    height: 'calc(100vw / 14)'
  },
  unavailableCell: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    border: '1px solid rgba(200, 200, 200, 0.4)',
    backgroundColor: 'red',
    flex: 1,
    height: 'calc(100vw / 14)'
  },
  date: {
    fontSize: '0.8em',
    textAlign: 'right',
    padding: '2px 5px',
    backgroundColor: 'rgba(200, 200, 200, 0.3)'
  }
};
class CalendarDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: JSON.parse(JSON.stringify(DEFAULT_STYLE))
    };

    this.eventkey = `${this.props.year}-${this.props.month + 1}-${this.props
      .day}`;

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.onClick = this.onClick.bind(this);
  }
  hasEvents() {
    return this.props.events.hasOwnProperty(this.eventkey);
  }
  hasAllDayEvent(eventDay) {
    if (eventDay.constructor === Array) {
      for (let i = 0; i < eventDay.length; i++) {
        if (eventDay[i].hasOwnProperty('title') && eventDay[i].isAllDay) {
          return true;
        }
      }
    } else if (
      typeof eventDay === 'object' &&
      eventDay.hasOwnProperty('title')
    ) {
      return !!eventDay.isAllDay;
    }
    return false;
  }
  isAvailable() {
    return (
      !this.hasEvents() ||
      (this.hasEvents() &&
        !this.hasAllDayEvent(this.props.events[this.eventkey]))
    );
  }
  onClick(e) {
    if (this.isAvailable()) {
      this.props.selectDay({
        view: 'form',
        date: {
          year: this.props.year,
          month: this.props.month,
          day: this.props.day
        }
      });
    }
  }
  onMouseOver() {
    let styles = JSON.parse(JSON.stringify(DEFAULT_STYLE));
    styles.date.backgroundColor = 'rgb(253, 0, 67)';
    styles.date.color = 'white';
    this.setState({ styles });
  }
  onMouseOut() {
    let styles = JSON.parse(JSON.stringify(DEFAULT_STYLE));
    this.setState({ styles });
  }
  render() {
    if (typeof this.props.day === 'number') {
      let _style = this.hasEvents()
        ? this.state.styles.unavailableCell
        : this.state.styles.cell;
      if (this.hasEvents()) {
        console.log('_style', _style);
      }

      return (
        <div
          style={_style}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          onClick={this.onClick}
        >
          <div style={this.state.styles.date}>{this.props.day}</div>
        </div>
      );
    } else {
      return (
        <div style={this.state.styles.cell}>
          <div>&nbsp;</div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { date: state.date, calendar: state.calendar, events: state.events };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDay }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDay);

// rgb(253, 0, 67)
// rgb(242, 225, 50)
