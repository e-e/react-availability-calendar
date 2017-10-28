import React from 'react';

class CalendarForm extends React.Component {
  constructor(props) {
    super(props);
    this.onCancelForm = this.onCancelForm.bind(this);
  }
  onCancelForm(e) {
    this.props.onChangeView('calendar');
  }
  render() {
    return (
      <div>
        <div>CalendarForm</div>
        <div>
          <button onClick={this.onCancelForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default CalendarForm;
