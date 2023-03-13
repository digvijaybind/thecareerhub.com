import React from "react";
import Link from "next/link";
import Menu from "../menu/Menu";
import SearchModel from "../../components/searchmodel/SearchModel";

import CourseAPI from "../../api/CourseAPI";
import CollegeAPI from "../../api/CollegeAPI";
import CareerAPI from "../../api/CareerAPI";
import ExamAPI from "../../api/ExamAPI";
import IndustryAPI from "../../api/IndustryApi";
import ClickAwayListener from 'react-click-away-listener';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.filter = { status: 1 };
    this.order_by = 1;
    this.CourseSearch = {};
    this.CareerSearch = {};
    this.CollegeSearch = {};
    this.ExamSearch = {};
    this.IndustrySearch = {};
    this.state = { filters: [], search: "", focus: false,toggle: false, inApiCall: false };
  };
  
  onSearchValueChange = (value) => {
    this.filter["name"] = value.length > 0 ? [value] : undefined;
    this.setState({ ...this.state, inApiCall: false, search: value });
    if (value.length > 0) {
      this.loadSearchData();
      this._onFocus(); 
    }else{
      this.handleClickAway();
    }
    
  };
  
  loadSearchData = () => {
    const page = {
      filter: this.filter,
      order_by: this.order_by,
      offset: 0,
      limit: 5,
    };
    CourseAPI.list(
      page,
      this.onCourseSearched,
      this.props.failure,
      this.props.logout
    );
    CareerAPI.list(
      page,
      this.onCareerSearched,
      this.props.failure,
      this.props.logout
    );
    CollegeAPI.list(
      page,
      this.onCollegeSearched,
      this.props.failure,
      this.props.logout
    );
    ExamAPI.list(
      page,
      this.onExamSearched,
      this.props.failure,
      this.props.logout
    );
    IndustryAPI.list(
      page,
      this.onIndustrySearched,
      this.props.failure,
      this.props.logout
    );
  };

  onCourseSearched = (res) => {
    if (res) this.CourseSearch = res;
  };

  onCareerSearched = (res) => {
    if (res) this.CareerSearch = res;
  };

  onCollegeSearched = (res) => {
    if (res) this.CollegeSearch = res;
  };
  onExamSearched = (res) => {
    if (res) this.ExamSearch = res;
  };
  onIndustrySearched = (res) => {
    if (res) this.IndustrySearch = res;
  };

  _onBlur = () => {
    if (!this.state.toggle){
      setTimeout(() => {if (this.state.focus) this.setState({ focus: false });},  0);
    }
    // this.state.toggle=false;
    // let toggle = false;
    // if (toggle){
    //   setTimeout(() => {
    //     if (this.state.focus) this.setState({ focus: true });
    //   }, 500);
    // }
    // else{
    //   setTimeout(() => {
    //     if (this.state.focus) this.setState({ focus: false });
    //   }, 500);
    // }
  };

  _onFocus = () => {
    if (!this.state.focus) {
      this.setState({ focus: true });
      this.setState({ toggle: false });
    }
  };
  _onDivFocus = () => {
    this.setState({ focus: true });
    this.setState({ toggle: true });
  };
  _onDivBlur = () => {
    setTimeout(() => {if (this.state.focus) this.setState({ focus: false });},  0);
  };
  
  handleClickAway = () => {
    setTimeout(() => {if (this.state.focus) this.setState({ focus: false });},  0);
  };

  render() {
    const {open,setOpen}=this.props;
    let searchresult = null;
    if (this.state.focus)
      searchresult = 
      (
        <SearchModel
          onDivClick={this._onDivFocus}
          course={this.CourseSearch}
          career={this.CareerSearch}
          college={this.CollegeSearch}
          exam={this.ExamSearch}
          industry={this.IndustrySearch}
        />
      );

    return (
      <div className="section1 bg-blue fixed-top">
        <div className="container-fluid">
          <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light col-md-12">
              <div className="col-md-2 plrmobile0">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <img
                    src="/images/toggler.png"
                    alt="img"
                    className="toggler"
                  />
                </button>
                <Link target="_blank"  href="/" className="navbar-brand">
                  <img src="/images/logo.png" alt="img" />
                </Link>
              </div>
              <ClickAwayListener onClickAway={this.handleClickAway}>
              <div className="col-md-5">
                <div className="input-group has-feedback">
                  <input
                    className="form-control py-2 border-right-0 border"
                    type="text"
                    placeholder="Search for your career"
                    id="example-search-input"
                    onChange={(event) =>
                      this.onSearchValueChange(event.target.value)
                    }
                    value={this.state.search}
                    name="name"
                    onFocus={this._onFocus}
                    // onBlur={this._onBlur}
                    autoComplete="off"
                  />
                  <span className="input-group-append">
                    <button className="btn searchicon">
                      <i className="fa fa-search"></i>
                    </button>
                  </span>
                </div>
                <div
                  className="searchlist"
                  style={{ background: "#fff", width: "100%" }}
                >
                  {searchresult}
                </div>
              </div>
                </ClickAwayListener>
              <Menu open={open} setOpen={setOpen}/>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
