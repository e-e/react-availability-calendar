import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../actions';

class CalendarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: '', date: '' };
    this.onCancelForm = this.onCancelForm.bind(this);
  }
  onCancelForm(e) {
    this.props.setView('calendar');
  }
  onDescrChange() {}
  render() {
    return (
      <div>
        <div>
          <div className="">
            <label for="event_description">Event Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })}
            />
          </div>
        </div>
        <div>
          <button onClick={this.onCancelForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setView }, dispatch);
}

export default connect(null, mapDispatchToProps)(CalendarForm);
