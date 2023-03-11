import React from 'react';

import SelectFilterWithSearch from '../common/SelectFilterWithSearch';
import SelectFilterWithoutSearch from '../common/SelectFilterWithoutSearch';

class ExamListFilter extends React.Component {

  render() {
    return (
      <>
      <div className="leftsidebar ">
        <div className="row tlpanel">
          <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span></h6>
          <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
            <span>Clear All</span>
          </p>
        </div>

        <SelectFilterWithSearch { ...this.props } type="category" title = "CATEGORIES"/> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="min_qualification" title = "MIN QUALIFICATION" /> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="exam_mode" title = "EXAM MODE" /> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="exam_frequency" title = "EXAM FREQUENCY" /> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="exam_lang" title = "EXAM LANGUAGE" /> <hr />
        <SelectFilterWithoutSearch { ...this.props } type="min_percent" title = "MINIMUM PERCENTAGE" /> <hr />
      </div>

      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body-filter">
              <div className="leftsidebar ">
                  <div className="row tlpanel">
                  <div class="col-md-12">
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
              <SelectFilterWithoutSearch { ...this.props } type="min_qualification" title = "MIN QUALIFICATION" /> <hr />
              <SelectFilterWithoutSearch { ...this.props } type="exam_mode" title = "EXAM MODE" /> <hr />
              <SelectFilterWithoutSearch { ...this.props } type="exam_frequency" title = "EXAM FREQUENCY" /> <hr />
              <SelectFilterWithoutSearch { ...this.props } type="exam_lang" title = "EXAM LANGUAGE" /> <hr />
              <SelectFilterWithoutSearch { ...this.props } type="min_percent" title = "MINIMUM PERCENTAGE" /> <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
export default ExamListFilter;