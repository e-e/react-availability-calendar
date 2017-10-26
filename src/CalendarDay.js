import React from 'react';

class CalendarDay extends React.Component {
  render() {
    return (
      <div style={styles}>
        <div>{this.props.day || 'x'}</div>
      </div>
    );
  }
}
let styles = {
  boxSizing: 'border-box',
  border: '1px solid blue',
  flex: 1
};
export default CalendarDay;

// rgb(253, 0, 67)
// rgb(242, 225, 50)
