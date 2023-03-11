import React from "react";

import HtmlHeader from '../common/HtmlHeader';
import Header from '../common/Header';
import PageDetailHeading from '../common/PageDetailHeading';
import CourseDetailSidebar from './CourseDetailSidebar';
import BestColleges from './BestColleges';
import CourseImage from './CourseImage';
import TypicalDayAtWork from './TypicalDayAtWork';
import CourseExploreRelated from './CourseExploreRelated';

import Loader from '../common/Loader';
import CourseExploreRelatedEnd from './CourseExploreRelatedEnd';
import CourseAPI from '../../api/CourseAPI';
import ModelAPI from '../../api/ModelAPI';

import { withRouter } from "next/router";

class CourseDetails extends React.Component {

  constructor(props) {
    super(props);
    const sef = props.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.model = {course:null,college:null, career:null} 
    // this.model = this.props.model;
    this.state = { inApiCall: true, active: 'overview' };
    this.course = null;
    
    this.relatedCareer = null;
    this.related_course = null;
    this.relatedCollege = null;
    
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    window.addEventListener('scroll', this.onScroll, true);
    const sef = nextProps.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadCourseDetail();
  }

  componentDidMount() { 
    // window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('scroll', this.onScroll, true);
    this.loadCourseDetail();
  }

  setActive = active => {
    this.setState({ ...this.state, active });
  };

  
  onScroll = () => {
    let coursesdesc = document.querySelector('#coursesdesc');
    if(coursesdesc) {
      coursesdesc = coursesdesc.getBoundingClientRect();
      if(coursesdesc.top < window.innerHeight && coursesdesc.bottom >= 0) { this.setActive('coursesdesc'); }
    }

    let od = document.querySelector('#od');
    if(od) {
      od = od.getBoundingClientRect();
      if(od.top < window.innerHeight && od.bottom >= 0) { this.setActive('od'); }
    }

    let eligibility = document.querySelector('#eligibility');
    if(eligibility) {
      eligibility = eligibility.getBoundingClientRect();
      if(eligibility.top < window.innerHeight && eligibility.bottom >= 0) { this.setActive('eligibility'); }
    }

    let careers = document.querySelector('#careers');
    if(careers) {
      careers = careers.getBoundingClientRect();
      if(careers.top < window.innerHeight && careers.bottom >= 0) { this.setActive('careers'); }
    }
    
    let colleges = document.querySelector('#colleges');
    if(colleges) {
      colleges = colleges.getBoundingClientRect();
      if(colleges.top < window.innerHeight && colleges.bottom >= 0) { this.setActive('colleges'); }
    }
    
    let relatedcourses = document.querySelector('#relatedcourses');
    if(relatedcourses) {
      relatedcourses = relatedcourses.getBoundingClientRect();
      if(relatedcourses.top < window.innerHeight && relatedcourses.bottom >= 0) { this.setActive('relatedcourses'); }
    }
  }

  loadCourseDetail = () => {
    if(this.id !== 0) {
      const page = { id:this.id, limit: 4 };
      CourseAPI.related_course(page, this.onResRelatedCourse, this.props.failure, this.props.logout);
      CourseAPI.relatedCollege(page, this.onResRelatedCollege, this.props.failure, this.props.logout);
      CourseAPI.relatedCareer(page, this.onResRelatedCareer, this.props.failure, this.props.logout);
      CourseAPI.details(this.id, this.onRecieved, this.props.failure, this.props.logout);
      ModelAPI.getCareerModel(this.onCareerModel, this.props.failure, this.props.logout);
      ModelAPI.getCourseModel(this.onCourseModel, this.props.failure, this.props.logout);
      ModelAPI.getCollegeModel(this.onCollegeModel, this.props.failure, this.props.logout);
    }
  }

  onCourseModel = res => {
    this.model.course = res.course;
    this.apiCallStatus();
  }

  onCollegeModel = res => {
    this.model.college = res.college; 
    this.apiCallStatus();
  }

  onCareerModel = res => {
    this.model.career = res.career;
    this.apiCallStatus();
  }

  onRecieved = res => {
    this.course = res ? res[0] : {};
    this.pagetitle = this.course && this.course.name;
    this.apiCallStatus();
  }

  onResRelatedCourse = res => {
    this.related_course = res.data;
    this.apiCallStatus();
  }
  onResRelatedCollege = res => {
    this.relatedCollege = res.data;
    this.apiCallStatus();
  }
  onResRelatedCareer = res => {
    this.relatedCareer = res.data;
    this.apiCallStatus();
  }

  apiCallStatus = () => {
    if(this.model.career && this.model.course && this.model.college && this.relatedCollege && this.relatedCareer && this.related_course && this.course)
      this.setState({ ...this.state, inApiCall: false });
    else
      this.setState({ ...this.state, inApiCall: true });
  }

  onCourseViewDetails = () => {
    window.scrollTo(0, 0);
  }

  render() {
    if(this.state.inApiCall) return(<Loader />);
    const title = "Course Detail - The Career hub";
    const description = "fdsfsdf";
    return (
      <>
        <HtmlHeader title={title} description={description} />
        <Header />
        <PageDetailHeading model={this.model.course} title={this.pagetitle} course={this.course} />
          
        <div className="section3">
              <div className="container-fluid padding-left-right">
                  <div className="row ">
                      <div className="col-md-3 mr-5">
                      <div className="scroll-sidebar">
                          <CourseDetailSidebar active={this.state.active} setActive={this.setActive} />
                      </div>
                      </div>
                      <div className="col-md-8">
                          <div className="list-colright detail-list-colright">
                              <CourseImage model={this.model.course} course={this.course}/>
                              <TypicalDayAtWork model={this.model.course} course={this.course} />
                              <CourseExploreRelated model={this.model.course} modelCareer={this.model.career} course={this.course} relatedCareer = {this.relatedCareer}/>
                              <BestColleges model={this.model.college} course={this.course}  relatedCollege = {this.relatedCollege}/>
                          </div>
                          <CourseExploreRelatedEnd model={this.model} onCourseViewDetails={this.onCourseViewDetails} course={this.course} related_course = {this.related_course}/>
                      </div>
                  </div>
              </div>
        </div>
      </>
    );
  }
}
export default withRouter(CourseDetails);
