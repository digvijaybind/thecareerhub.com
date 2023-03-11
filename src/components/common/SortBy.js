import React from "react";

class SortBy extends React.Component {
  onSortChange = (value) => {
    this.props.onSortChange(value);
  }

  render() {
    return (
      <select className="form-select m-sortselect sortselect" aria-label="Default select example" 
        onChange={evt => this.onSortChange(evt.target.value)}>
        <option value=''>Sort By</option>
        <option value='1'>Alphabeticaly (A-Z)</option>
        <option value='-1'>Alphabeticaly (Z-A)</option>
      </select>
    );
  }
}
export default SortBy;
