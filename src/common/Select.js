import React from 'react';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selected: this.props.value || ''
    };
    console.log('SELECT: ', this.state.value);
  }
  onSelected(option) {
    if (this.props.onSelected && typeof this.props.onSelected === 'function') {
      this.props.onSelected(option.value);
    }
    this.setState({ open: false, selected: option });
  }
  renderList() {
    if (!this.state.open) {
      return [];
    }
    // return <div>hi</div>;
    return (
      <ul style={styles.ul}>
        {this.props.options.map(option => {
          return (
            <li
              style={styles.li}
              key={option.value}
              onClick={() => this.onSelected(option)}
            >
              {option.name}
            </li>
          );
        })}
      </ul>
    );
  }
  getSelected() {
    let selected = { name: 'none selected', value: '' };
    let keep = this.props.options.filter(option => {
      return option.value === this.state.selected.value;
    });
    if (keep.length === 1) {
      selected = keep[0];
    }
    return selected;
  }
  render() {
    return (
      <div style={{ display: 'inline-block', margin: '0px 15px' }}>
        <div
          style={styles.current}
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.getSelected().name}
        </div>
        {this.renderList()}
      </div>
    );
  }
}

const styles = {
  current: {
    cursor: 'pointer'
  },
  ul: {
    display: 'inline-block',
    listStyleType: 'none',
    margin: '0px',
    padding: '0px',
    maxHeight: '150px',
    overflow: 'scroll'
  },
  li: {
    cursor: 'pointer'
  }
};

export default Select;
