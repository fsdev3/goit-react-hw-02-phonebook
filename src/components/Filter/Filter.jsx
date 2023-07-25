import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterDiv } from './Filter.styled';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <FilterDiv>
        <label>Find contact by Name: </label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        ></input>
      </FilterDiv>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
