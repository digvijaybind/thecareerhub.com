import React from "react";
import Link from "next/link";

import FilterChip from './FilterChip';

class ExamListDetail extends React.Component {

  filterChips() {
    return this.props.filters.map((filter, i) => 
      <FilterChip key={`filter_chip_${i}`} filter={filter}
        onRemoveFilter={this.props.onRemoveFilter} /> 
    );
  }
  render() {
    const chips = this.filterChips();
    return (
      <div className="list-colright">
          <div className="row hide-on-mobile">
            <div className="col-md-5">
              <div className="search-right">
                <form className="d-flex">
                  <span className="input-group-append">
                    <button className="btn bg-bg"><i className="fa fa-search"></i></button>
                  </span>
                  <input className="form-control search2" type="search" placeholder="Type for Careers" />        
                </form>
              </div>
            </div>
            <div className="col-md-3 sort">sort by</div>
            <div className="col-md-4 p-0">
              <select className="form-select sortselect" aria-label="Default select example">
                <option>Alphabeticaly (A-Z)</option>
                <option>Alphabeticaly (Z-A)</option>
              </select>
            </div>
          </div>
          <div className="row show-mobile mobile-pt-pb">
            <div className="col-md-12">
              <span className="icon-filtter"><i className="fa fa-search"></i></span>
              <span className="icon-filtter"><i className="fa fa-filter"></i></span>
              <select className="form-select m-sortselect" aria-label="Default select example">
                <option selected="">Sort By</option>
                <option >Alphabeticaly (A-Z)</option>
                <option value="1">Alphabeticaly (Z-A)</option>
              </select>
            </div>
          </div>

          <div className="row"><div className="tags col-md-12">{chips}</div></div>

          <div className="row">
              <div className="col-md-12">
                  <p className="smalltxt">Careers found - <i>(824)</i></p>
              </div>
          </div>

          <div className="hide-mobile">
              <div className="row">

                  <div className="col-md-12">
                      <div className="card main-card">
                          <div className="card-body card-one ">
                              <div className="row">
                                  <div className="col-md-12">
                                      <h5 className="card-title">UPSEE 2021 (Uttar Pradesh State Entrance Examination)</h5>
                                      <div className="badge job-tags">
                                          <span>Pharmacy</span>
                                      </div>
                                      <div className="detail pt-2">
                                          <span>
                                            <div className="fade-text">Exam Frequency</div>
                                            <div className="main-text"><i className="fa fa-book" aria-hidden="true"></i> Annual</div>
                                          </span>
                                          <span>
                                            <div className="fade-text">Languange</div>
                                            <div className="main-text"><i className="fa fa-language" aria-hidden="true"></i> English</div>
                                          </span>
                                          <span>
                                            <div className="fade-text">Min Qualification</div>
                                            <div className="main-text"><i className="fa fa-university" aria-hidden="true"></i> 12th</div>
                                          </span>
                                          <span>
                                            <div className="fade-text">Exam type</div>
                                            <div className="main-text">
                                            <i className="fa fa-pencil" aria-hidden="true"></i> Written  / &nbsp;
                                            <i className="fa fa-mouse-pointer" aria-hidden="true"></i> Online 
                                            </div>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card-body card-two">
                              <div className="boxwcolor row">
                                  <div className="col-md-12">
                                      <div className="btn-detail">12 Colleges Options</div> 
                                      <div className="btn-detail">88 Courses Offering</div>
                                      <div className="btn-detail bttn-yellow-detail"><Link href="#">View Details</Link></div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="row">
                      <div className="col-md-12 text-center">
                          <Link href='#' className="load-more-btn">Load More</Link>
                      </div>
                  </div>
          </div>
      </div>
    );
  }
}
export default ExamListDetail;