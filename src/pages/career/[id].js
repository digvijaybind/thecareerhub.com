import React from "react";

import HtmlHeader from '../common/HtmlHeader';
import Header from '../common/Header';
import PageDetailHeading from '../common/PageDetailHeading';
import CareerDetailSidebar from './CareerDetailSidebar';
import CareerExploreRelated from './CareerExploreRelated';
import CareerImage from './CareerImage';
import Overview from './Overview';
import TypicalDayAtWork from './TypicalDayAtWork';
import Pathways from './Pathways';
import WorkInternCareer from './WorkInternCareer';
import WhichCourse from './WhichCourse';
import BestColleges from './BestColleges';
import Loader from '../common/Loader';

import CareerAPI from '../../api/CareerAPI';
import ModelAPI from '../../api/ModelAPI';

import { withRouter } from "next/router";

class CareerDetails extends React.Component {
  constructor(props) {
    super(props);
    const sef = props.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.model = {course:null,college:null};
    // this.model = this.props.model;
    this.state = { inApiCall: true, active: 'overview' };
    this.college ={};
    this.career = {};
    this.relatedCareer = [];
    this.relatedCourse = [];
    this.relatedCollege = [];
  }

  componentDidMount() { 
    window.addEventListener('scroll', this.onScroll, true);
    this.loadCareerDetail();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    window.addEventListener('scroll', this.onScroll, true);
    const sef = nextProps.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    // this.state = { inApiCall: true};
    this.loadCareerDetail();
  }

  setActive = active => {
    this.setState({ ...this.state, active });
  };

  onScroll = () => {
    let industries = document.querySelector('#industries');
    if(industries) {
      industries = industries.getBoundingClientRect();
      if(industries.top < window.innerHeight && industries.bottom >= 0) { this.setActive('industries'); }
    }
    
    let career = document.querySelector('#career');
    if(career) {
      career = career.getBoundingClientRect();
      if(career.top < window.innerHeight && career.bottom >= 0) { this.setActive('career'); }
    }
    
    let internship = document.querySelector('#internship');
    if(internship) {
      internship = internship.getBoundingClientRect();
      if(internship.top < window.innerHeight && internship.bottom >= 0) { this.setActive('internship'); }
    }
    
    let colleges = document.querySelector('#colleges');
    if(colleges){
    
      colleges = colleges.getBoundingClientRect()
      if(colleges.top < window.innerHeight && colleges.bottom >= 0) { this.setActive('colleges'); }
    }
    
    let courses = document.querySelector('#courses');
    if(courses){
      courses = courses.getBoundingClientRect();
      if(courses.top < window.innerHeight && courses.bottom >= 0) { this.setActive('courses'); }
    }

    let entrance = document.querySelector('#entrance');
    if(entrance){
      entrance = entrance.getBoundingClientRect();
      if(entrance.top < window.innerHeight && entrance.bottom >= 0) { this.setActive('entrance'); }
    }
    
    

    // var entrance = document.querySelector('#entrance').getBoundingClientRect();
    // if(entrance.top < window.innerHeight && entrance.bottom >= 0) { this.setActive('entrance'); }
    
    let pathways = document.querySelector('#pathways');
    if(pathways){
      pathways = pathways.getBoundingClientRect();
      if(pathways.top < window.innerHeight && pathways.bottom >= 0) { this.setActive('pathways'); }
    }

    let abilities = document.querySelector('#abilities');
    if(abilities)
    {
      abilities = abilities.getBoundingClientRect();
      if(abilities.top < window.innerHeight && abilities.bottom >= 0) { this.setActive('abilities'); }
    }

    let work = document.querySelector('#work');
    if(work){
      work = work.getBoundingClientRect();
      if(work.top < window.innerHeight && work.bottom >= 0) { this.setActive('work'); }
    }

    let overview = document.querySelector('#overview');
    if(overview){
      overview = overview.getBoundingClientRect();
      if(overview.top < window.innerHeight && overview.bottom >= 0) { this.setActive('overview'); }
    }
  }

  loadCareerDetail = () => {
    if(this.id !== 0) {
      const page = { id:this.id, limit: 4 };
      CareerAPI.relatedCourse(page, this.onResRelatedCourse, this.props.failure, this.props.logout);
      CareerAPI.relatedCollege(page, this.onResRelatedCollege, this.props.failure, this.props.logout);
      CareerAPI.relatedCareer(page, this.onResRelatedCareer, this.props.failure, this.props.logout);
      CareerAPI.details(this.id, this.onRecieved, this.props.failure, this.props.logout);
      ModelAPI.getCareerModel(this.onCareerModel, this.props.failure, this.props.logout);
      ModelAPI.getCourseModel(this.onCourseModel, this.props.failure, this.props.logout);
      ModelAPI.getCollegeModel(this.onCollegeModel, this.props.failure, this.props.logout);
    }
  }
  
  onCareerModel = res => {
    this.model.career = res.career;
    this.apiCallStatus();
  }

  onCourseModel = res => {
    this.model.course = res.course;
    this.apiCallStatus();
  }

  onCollegeModel = res => {
    this.model.college = res.college; 
    this.apiCallStatus();
  }

  onRecieved = res => {
    this.career = res && res[0] ? res[0] : {};
    this.pagetitle = this.career && this.career.name;
    this.apiCallStatus();
  }
  
  onResRelatedCourse = res => {
    this.relatedCourse = res.data;
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
    if(this.model.college && this.college && this.model.course && this.model.career && this.career && this.relatedCourse && this.relatedCareer && this.relatedCollege){
      this.setState({ ...this.state, inApiCall: false });
    }      
    else
    {
      this.setState({ ...this.state, inApiCall: true });
    }
  }

  render() {
    if(this.state.inApiCall) return(<Loader />);
    const title = (this.career && this.career.meta && this.career.meta.title) ? this.career.meta.title : "Career Detail - The Career hub";
    const description = (this.career && this.career.meta && this.career.meta.description) ? this.career.meta.description : 'sdfdskl';
    return (
      <>
        <HtmlHeader title={title} description={description} />
        <Header />
        <PageDetailHeading model={this.model.career} title={this.pagetitle}  career={this.career}/>
        <div className="section3">
              <div className="container-fluid padding-left-right">
                  <div className="row ">
                      <div className="col-md-3 mr-5">
                      <div className="scroll-sidebar">
                          <CareerDetailSidebar active={this.state.active} setActive={this.setActive} />
                      </div>
                      </div>
                      <div className="col-md-8">
                          <div className="list-colright detail-list-colright">
                              <CareerImage model={this.model.career} career={this.career} />
                              <Overview model={this.model.career} career={this.career} />
                              <TypicalDayAtWork model={this.model} career={this.career} />
                              <Pathways courseLevel={this.model.course.course_level} career={this.career} />
                              <WhichCourse model={this.model} career={this.career} jobid={this.career.id} relatedCourse = {this.relatedCourse} />
                              <br/><br/>
                              <BestColleges model={this.model.college} career={this.career} relatedCollege = {this.relatedCollege} jobid={this.career.id}/>
                              <WorkInternCareer model={this.model} career={this.career} />
                          </div>
                          <CareerExploreRelated model={this.model.career} career={this.career} relatedCareer = {this.relatedCareer} />
                      </div>
                  </div>
              </div>
        </div>
      </>
    );
  }
}
export default withRouter(CareerDetails);