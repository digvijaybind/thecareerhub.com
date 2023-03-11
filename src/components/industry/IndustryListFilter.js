import React from 'react';

import SelectFilterWithoutSearch from '../common/SelectFilterWithoutSearch';
import RangeFilter from '../common/RangeFilter';



class IndustryListFilter extends React.Component {

  render() {
    return (
      <div className="leftsidebar ">
        <div className="row tlpanel">
          <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span></h6>
          <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
            <span>Clear All</span>
          </p>
        </div>
        
        <SelectFilterWithoutSearch { ...this.props } type="streams" title="STREAMS"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="course_level" title="REQUIRED EDUCATION"/> <hr />
        <RangeFilter { ...this.props } type="salary" title="SALARY"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="features" title="FEATURES"/> <hr />
      </div>
    );
  }
}
export default IndustryListFilter;