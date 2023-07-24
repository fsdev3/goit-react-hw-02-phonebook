import { Component } from 'react';

export class Filter extends Component {
  handleFind = ({ target }) => {
    this.props.handleFind('filter', target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="Filter">Find contact by name </label>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleFind}
        />
      </div>
    );
  }
}
