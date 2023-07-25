import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div>
        <label>
          Find contact by Name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
          ></input>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
