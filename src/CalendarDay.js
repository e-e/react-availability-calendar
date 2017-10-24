import React from 'react';

class CalendarDay extends React.Component {
  render() {
    return (
      <div style={styles}>
        <div>{this.props.day}</div>
      </div>
    );
  }
}
const styles = {
  border: '1px solid blue',
  flex: 1
};
export default CalendarDay;
