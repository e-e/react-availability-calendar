import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../actions';

class CalendarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', date: '' };
    this.onCancelForm = this.onCancelForm.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onCancelForm(e) {
    this.props.setView('calendar');
  }
  onSubmitForm(event) {
    event.preventDefault();
    console.log(this.state.title, this.state.description);
    this.props.onCreateEvent(
      this.props.currentDate.year,
      this.props.currentDate.month + 1,
      this.props.currentDate.day,
      this.state.title,
      this.state.description,
      () => {
        this.props.setView('calendar');
      }
    );
  }
  onDescrChange() {}
  render() {
    const { year, month, day } = this.props.currentDate;
    return (
      <div style={{ textAlign: 'left' }}>
        <div>
          {year}-{month + 1}-{day}
        </div>
        <div>
          <div className="">
            <label htmlFor="event_description" style={{ display: 'block' }}>
              Event Title
            </label>
            <input
              type="text"
              value={this.state.title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </div>
          <div className="">
            <label htmlFor="event_description" style={{ display: 'block' }}>
              Event Description
            </label>
            <textarea
              type="text"
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })}
            />
          </div>
        </div>
        <div>
          <button onClick={this.onSubmitForm}>Save</button>
          <button onClick={this.onCancelForm}>Cancel</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { currentDate: state.currentDate };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setView }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarForm);
