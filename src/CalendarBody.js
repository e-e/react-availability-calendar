import React from 'react';
import CalendarColumn from './CalendarColumn';
import { DAYS_OF_WEEK } from './utils/constants';
import { binDates } from './utils/utils';

class CalendarBody extends React.Component {
  constructor(props) {
    super(props);
  }
  renderColumns(bins) {
    return DAYS_OF_WEEK.map(dow => {
      return (
        <CalendarColumn
          year={this.props.year}
          month={this.props.month}
          dayOfWeek={dow}
          days={bins[dow]}
        />
      );
    });
  }
  render() {
    let bins = binDates(this.props.year, this.props.month);
    return <div style={styles}>{this.renderColumns(bins)}</div>;
  }
}
const styles = {
  // display: 'grid'
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch'
};
export default CalendarBody;
