import React from 'react';
import CalendarColumn from './CalendarColumn';

class CalendarBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles}>
        <CalendarColumn
          dayOfWeek="Sunday"
          month={this.props.month}
          year={this.props.year}
        />
        <CalendarColumn
          dayOfWeek="Monday"
          month={this.props.month}
          year={this.props.year}
        />
        <CalendarColumn
          dayOfWeek="Tuesday"
          month={this.props.month}
          year={this.props.year}
        />
        <CalendarColumn
          dayOfWeek="Wednesday"
          month={this.props.month}
          year={this.props.year}
        />
        <CalendarColumn
          dayOfWeek="Thursday"
          month={this.props.month}
          year={this.props.year}
        />
        <CalendarColumn
          dayOfWeek="Friday"
          month={this.props.month}
          year={this.props.year}
        />
        <CalendarColumn
          dayOfWeek="Saturday"
          month={this.props.month}
          year={this.props.year}
        />
      </div>
    );
  }
}
const styles = {
  // display: 'grid'
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch'
};
export default CalendarBody;
