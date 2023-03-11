import React from 'react';

import SelectFilterWithSearch from '../common/SelectFilterWithSearch';
import SelectFilterWithoutSearch from '../common/SelectFilterWithoutSearch';
import RangeFilter from '../common/RangeFilter';

class CollegeListFilter extends React.Component {
  
  render() {
    return (
      <>
      <div className="leftsidebar hide-on-mobile">
         <div className="row tlpanel">
          <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span></h6>
          <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
            <span>Clear All</span>
          </p>
        </div>

        <SelectFilterWithSearch { ...this.props } type="category" title = "CATEGORIES"/> <hr />
        <SelectFilterWithSearch { ...this.props } type="states" title = "STATES"/> <hr />
        <SelectFilterWithSearch { ...this.props } type="cities" title = "CITIES"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="college_type" title="COLLEGE TYPE"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="course_level" title="COURSE TYPE"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="entrance_exam" title="ENTRANCE EXAM"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="streams" title="STREAMS"/> <hr />
        <RangeFilter { ...this.props } type="fees" title="AVG FEES PER YEAR"/> <hr />
      </div>

      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body-filter">
                  <div className="leftsidebar ">
                     <div className="row tlpanel">
                     <div className="col-md-12">
                          <div className="align-items-start filtertxt">
                              <span className="f-heading">Filters</span>
                              {/* <span className="text-right clrall span-margin" >
                                Clear All
                              </span> */}
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClearFilter}>
                              <span className="span-margin">Clear All</span>
                              </button>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span className="span-margin">Cancel</span>
                              </button>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span className="span-margin">Apply</span>
                              </button>
                            </div>
                          </div>
                      {/* <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span> 
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button></h6>
                      <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
                        <span>Clear All</span>
                      </p> */}
                    </div>

                    <SelectFilterWithSearch { ...this.props } type="category" title = "CATEGORIES"/> <hr />
                    <SelectFilterWithSearch { ...this.props } type="states" title = "STATES"/> <hr />
                    <SelectFilterWithSearch { ...this.props } type="cities" title = "CITIES"/> <hr />
                    <SelectFilterWithoutSearch { ...this.props } type="college_type" title="COLLEGE TYPE"/> <hr />
                    <SelectFilterWithoutSearch { ...this.props } type="course_level" title="COURSE TYPE"/> <hr />
                    <SelectFilterWithoutSearch { ...this.props } type="entrance_exam" title="ENTRANCE EXAM"/> <hr />
                    <SelectFilterWithoutSearch { ...this.props } type="streams" title="STREAMS"/> <hr />
                  </div>
                </div>
              </div>
            </div>
      </div>
      </>
    );
  }
}
export default CollegeListFilter;