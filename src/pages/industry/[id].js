import React from "react";
import { withRouter } from "next/router";

import HtmlHeader from "../common/HtmlHeader";
import Header from "../common/Header";
import PageDetailHeading from "../common/PageDetailHeading";
import IndustryDetailSidebar from "./IndustryDetailSidebar";
import IndustryImage from "./IndustryImage";
import CareerExploreRelated from "./CareerExploreRelated";
import WhichCourse from "./WhichCourse";
import BestColleges from "./BestColleges";
import Loader from "../common/Loader";
import IndustryAPI from "../../api/IndustryApi";
import ModelAPI from "../../api/ModelAPI";


class IndustryDetail extends React.Component {
  constructor(props) {
    super(props);
    const sef = props.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.model = { industry: null };
    // this.model = this.props.model;
    this.state = { inApiCall: true, active: "overview" };
    this.industry = null;
    this.relatedCareer = null;
    this.relatedCourse = null;
    this.relatedCollege = null;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    window.addEventListener('scroll', this.onScroll, true);
    const sef = nextProps.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadIndustryDetail();
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('scroll', this.onScroll, true);
    this.loadIndustryDetail();
  }

  onScroll = () => {
    let overview = document.querySelector('#overview');
    if(overview){
      overview = overview.getBoundingClientRect();
      if(overview.top < window.innerHeight && overview.bottom >= 0) { this.setActive('overview'); }
    }
    
    let career = document.querySelector('#career');
    if(career) {
      career = career.getBoundingClientRect();
      if(career.top < window.innerHeight && career.bottom >= 0) { this.setActive('career'); }
    }

    let coursesoffered = document.querySelector('#coursesoffered');
    if(coursesoffered){
      coursesoffered = coursesoffered.getBoundingClientRect();
      if(coursesoffered.top < window.innerHeight && coursesoffered.bottom >= 0) { this.setActive('coursesoffered'); }
    }
    
    let colleges = document.querySelector('#colleges');
    if(colleges){
      colleges = colleges.getBoundingClientRect()
      if(colleges.top < window.innerHeight && colleges.bottom >= 0) { this.setActive('colleges'); }
    }
  }

  setActive = (active) => {
    this.setState({ ...this.state, active });
  };

  loadIndustryDetail = () => {
    if (this.id !== 0) {
      const page = { id: this.id, limit: 4 };
      IndustryAPI.details(
        this.id,
        this.onRecieved,
        this.props.failure,
        this.props.logout
      );
      IndustryAPI.relatedCareer(
        page,
        this.onResRelatedCareer,
        this.props.failure,
        this.props.logout
      );
      IndustryAPI.related_course(
        page,
        this.onResRelatedCourse,
        this.props.failure,
        this.props.logout
      );
      IndustryAPI.relatedCollege(
        page,
        this.onResRelatedCollege,
        this.props.failure,
        this.props.logout
      );
      ModelAPI.getIndustryModel(
        this.onIndustryModel,
        this.props.failure,
        this.props.logout
      );
      ModelAPI.getCareerModel(
        this.onCareerModel,
        this.props.failure,
        this.props.logout
      );
      ModelAPI.getCourseModel(
        this.onCourseModel,
        this.props.failure,
        this.props.logout
      );
      ModelAPI.getCollegeModel(
        this.onCollegeModel,
        this.props.failure,
        this.props.logout
      );
    }
  };

  onIndustryModel = (res) => {
    this.model.industry = res.industry;
    this.apiCallStatus();
  };

  onCareerModel = (res) => {
    this.model.career = res.career;
    this.apiCallStatus();
  };

  onCourseModel = (res) => {
    this.model.course = res.course;
    this.apiCallStatus();
  };

  onCollegeModel = (res) => {
    this.model.college = res.college;
    this.apiCallStatus();
  };

  onRecieved = (res) => {
    this.industry = res ? res[0] : {};
    this.pagetitle = this.industry && this.industry.name;
    this.apiCallStatus();
  };

  onResRelatedCourse = (res) => {
    this.relatedCourse = res.data;
    this.apiCallStatus();
  };

  onResRelatedCollege = (res) => {
    this.relatedCollege = res.data;
    this.apiCallStatus();
  };

  onResRelatedCareer = (res) => {
    this.relatedCareer = res.data;
    this.apiCallStatus();
  };

  apiCallStatus = () => {
    if (
      this.model.industry &&
      this.industry &&
      this.relatedCourse &&
      this.relatedCareer &&
      this.relatedCollege &&
      this.model.career &&
      this.model.course &&
      this.model.college
    )
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  render() {
    if (this.state.inApiCall) return <Loader />;
    const title = "Industry Detail - The Career hub";
    const description = "fdsfsdf";

    return (
      <>
        <HtmlHeader title={title} description={description} />
        <Header />
        <PageDetailHeading
          model={this.model.industry}
          title={this.pagetitle}
          industry={this.industry}
        />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 mr-5">
                <div className="scroll-sidebar">
                  <IndustryDetailSidebar
                    active={this.state.active}
                    setActive={this.setActive}
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="list-colright detail-list-colright">
                  <IndustryImage
                    model={this.model.industry}
                    industry={this.industry}
                  />
                  <CareerExploreRelated
                    model={this.model.career}
                    industry={this.industry}
                    modelCareer={this.model.career}
                    relatedCareer={this.relatedCareer}
                  />
                  <WhichCourse
                    model={this.model.course}
                    industry={this.industry}
                    relatedCourse={this.relatedCourse}
                  />
                  <BestColleges
                    model={this.model.college}
                    industry={this.industry}
                    relatedCollege={this.relatedCollege}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(IndustryDetail);
