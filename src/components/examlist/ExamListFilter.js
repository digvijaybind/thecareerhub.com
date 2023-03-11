import React from 'react';

import SelectFilterWithSearch from './SelectFilterWithSearch';
import SelectFilterWithoutSearch from './SelectFilterWithoutSearch';
import SelectFilterCourseFees from './SelectFilterCourseFees';


class ExamListFilter extends React.Component {

  render() {
    return (
      <div className="leftsidebar ">
        <div className="row tlpanel">
          <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span></h6>
          <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
            <span>Clear All</span>
          </p>
        </div>

        <SelectFilterWithSearch { ...this.props } type="category"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="education"/> <hr />
        <SelectFilterCourseFees { ...this.props } type="education"/> <hr />
      </div>
    );
  }
}
export default ExamListFilter;