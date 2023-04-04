import React from "react";

import SelectFilterWithSearch from "../common/SelectFilterWithSearch";
import SelectFilterWithoutSearch from "../common/SelectFilterWithoutSearch";
import RangeFilter from "../common/RangeFilter";

class CourseListFilter extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = 0;
  }

  internshipFilter = () => {
    if (this.toggle === 0) {
      this.toggle = 1;
    } else {
      this.toggle = 0;
    }
    this.props.internshipfilter(this.toggle);
  };
  render() {
    return (
      <>
        <div className="leftsidebar hide-on-mobile">
          <div className="row tlpanel">
            <h6 className="col-md-6 align-items-start filtertxt">
              <span>Filters</span>
            </h6>
            <p
              className="col-md-6 text-right clrall"
              onClick={this.props.onClearFilter}
            >
              <span>Clear All</span>
            </p>
          </div>
          <SelectFilterWithSearch
            {...this.props}
            type="category"
            title="CATEGORIES"
          />{" "}
          <hr />
          <SelectFilterWithoutSearch
            {...this.props}
            type="course_level"
            title="REQUIRED EDUCATION"
          />{" "}
          <hr />
          <SelectFilterWithoutSearch
            {...this.props}
            type="streams"
            title="STREAMS"
          />{" "}
          <hr />
          <RangeFilter {...this.props} type="expenses" title="EXPENSES" />{" "}
          <hr />
          <RangeFilter {...this.props} type="salary" title="SALARY" /> <hr />
          <SelectFilterWithoutSearch
            {...this.props}
            type="work_location"
            title="LOCATION OF WORK"
          />{" "}
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="switch">
                <p className="title">INTERNSHIPs available</p>
                <input type="checkbox" id="toggleAll" />
                
                <label
                  htmlFor="toggleAll"
                  onClick={this.internshipFilter}
                ></label>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalLong"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
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
                  </div>
                  <SelectFilterWithSearch
                    {...this.props}
                    type="category"
                    title="CATEGORIES"
                  />{" "}
                  <hr />
                  <SelectFilterWithoutSearch
                    {...this.props}
                    type="course_level"
                    title="REQUIRED EDUCATION"
                  />{" "}
                  <hr />
                  <SelectFilterWithoutSearch
                    {...this.props}
                    type="streams"
                    title="STREAMS"
                  />{" "}
                  <hr />
                  <RangeFilter
                    {...this.props}
                    type="expenses"
                    title="EXPENSES"
                  />{" "}
                  <hr />
                  <RangeFilter
                    {...this.props}
                    type="salary"
                    title="SALARY"
                  />{" "}
                  <hr />
                  <SelectFilterWithoutSearch
                    {...this.props}
                    type="work_location"
                    title="LOCATION OF WORK"
                  />{" "}
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CourseListFilter;
