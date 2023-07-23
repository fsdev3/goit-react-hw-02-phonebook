import { Component } from 'react';

export class Filter extends Component {
  nameCheck = ({ target }) => {
    const { name, value } = target;
  };

  render() {
    return (
      <div>
        <label htmlFor="Filter">Find contact by name</label>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.nameCheck}
        />
      </div>
    );
  }
}
