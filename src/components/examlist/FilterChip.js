import React from 'react';

class FilterChip extends React.Component {
  render() {
    return (
      <span className="badge bg-tags">{this.props.filter.name}
        <button type="button" className="close" aria-label="Close"
          onClick={() => this.props.onRemoveFilter(this.props.filter)}>
          <span aria-hidden="true" className="close-x">&times;</span>
        </button>
      </span>
    );
  }
}
export default FilterChip;