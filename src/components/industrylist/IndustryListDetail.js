import React from "react";
import Link from "next/link";

import FilterChip from './FilterChip';

class IndustryListDetail extends React.Component {

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
                                  <div className="col-md-3">
                                      <img src="./images/cs.png" alt="img" />
                                  </div>
                                  <div className="col-md-9">
                                      <h5 className="card-title">Information Technology Company</h5>
                                      <div className="badge job-tags">
                                          <span>Graphics Designer</span>
                                          <span>Engineering & Technology</span>
                                          <span>Graphics Designer</span>
                                          <span>UX Designer </span>
                                          <span>30+</span>
                                      </div>
                                      <div className="detail pt-2">
                                          <p className="text-medium">An accountant is a practitioner of accounting or accountancy. Accountants who have demonstrated competency through their professional associations’…..</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="card-body card-two">
                              <div className="boxwcolor row">
                                  <div className="col-md-12">
                                      <div className="btn-detail">88 Career Options</div> 
                                      <div className="btn-detail">12 Courses Options</div>
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
export default IndustryListDetail;