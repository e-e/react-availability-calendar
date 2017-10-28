import React from 'react';
const DEFAULT_STYLE = {
  cell: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    border: '1px solid rgba(200, 200, 200, 0.4)',
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

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }
  onMouseOver() {
    let styles = JSON.parse(JSON.stringify(DEFAULT_STYLE));
    styles.date.backgroundColor = 'rgb(253, 0, 67)';
    styles.date.color = 'white';
    styles.cell.backgroundColor = 'rgba(200, 200, 200, 0.3)';
    this.setState({ styles });
  }
  onMouseOut() {
    let styles = JSON.parse(JSON.stringify(DEFAULT_STYLE));
    this.setState({ styles });
  }
  render() {
    if (typeof this.props.day === 'number') {
      return (
        <div
          style={this.state.styles.cell}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
        >
          <div style={this.state.styles.date}>{this.props.day}</div>
        </div>
      );
    } else {
      return (
        <div style={this.state.styles.cell}>
          <div style={this.state.styles.date}>&nbsp;</div>
        </div>
      );
    }
  }
}

export default CalendarDay;

// rgb(253, 0, 67)
// rgb(242, 225, 50)
