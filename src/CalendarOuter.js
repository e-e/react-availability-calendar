import React from 'react';

class CalendarOuter extends React.Component {
  render() {
    return <div style={styles}>{this.props.children}</div>;
  }
}
const styles = {
  display: 'grid',
  gridTemplateRows: '1fr 4fr',
  boxSizing: 'border-box',
  border: '1px solid black',
  height: '100%'
};
export default CalendarOuter;
