import React from 'react';
import CalendarColumn from './CalendarColumn';
import { DAYS_OF_WEEK } from '../utils/constants';
import { binDates } from '../utils/utils';

class CalendarBody extends React.Component {
  constructor(props) {
    super(props);
  }
  renderColumns() {
    return DAYS_OF_WEEK.map(dow => {
      const key = [this.props.year, this.props.month, dow].join('-');
      return (
        <CalendarColumn
          key={`calendar-column-${key}`}
          year={this.props.year}
          month={this.props.month}
          dayOfWeek={dow}
          days={this.props.bins[dow]}
          onChangeView={this.props.onChangeView}
          events={this.props.events}
        />
      );
    });
  }
  render() {
    return <div style={styles}>{this.renderColumns()}</div>;
  }
}
const styles = {
  // display: 'grid'
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch'
};
export default CalendarBody;
