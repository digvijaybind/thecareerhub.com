import React from "react";
import PageDetailHeading from '../../components/common/PageDetailHeading';
import CourseDetailSidebar from '../../components/course/CourseDetailSidebar';
import BestColleges from '../../components/course/BestColleges';
import CourseImage from '../../components/course/CourseImage';
import TypicalDayAtWork from '../../components/course/TypicalDayAtWork';
import CourseExploreRelated from '../../components/course/CourseExploreRelated';
import CourseExploreRelatedEnd from '../../components/course/CourseExploreRelatedEnd';
import CourseAPI from '../../api/CourseAPI';
import ModelAPI from '../../api/ModelAPI';

import { withRouter } from "next/router";
import Loader from "../../components/common/Loader";
import HtmlHeader from "../../components/common/HtmlHeader";
import config from "../../config/config";
import Constants from "../../util/Constants";

class CourseDetails extends React.Component {

  constructor(props) {
    super(props);
    const {data}=props;
    this.model = {course:null,college:null, career:null} 
    // this.model = this.props.model;
    this.state = { inApiCall: true, active: 'overview' };
    this.course = data || {};
    this.relatedCareer = null;
    this.related_course = null;
    this.relatedCollege = null;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    window.addEventListener('scroll', this.onScroll, true);
    const sef = window.location.pathname.split("/")[2];
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadCourseDetail();
  }

  componentDidMount() { 
    // window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('scroll', this.onScroll, true);
    const sef = window.location.pathname.split("/")[2];
    this.id = parseInt(sef.split(/[- ]+/).pop());
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
    return (
      <>
      <HtmlHeader title={"Course Details - The Career Hub"} description={"Course Details - The Career Hub"} />

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
CourseDetails.getLayout = page => (
  <>
    {page}
  </>
)
export async function getStaticProps(context) {
  const { params } = context;
  const id = parseInt(params.id.split(/[- ]+/).pop());
  console.log(id)
  const response = await fetch(config.link + "course/" + id, {
    method: "GET",
    headers: config.Api_headers,
  });
  const data = await response.json();
  console.log(data)
  if (!data[0].id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: data[0],
    },
  };
}

export async function getStaticPaths() {
  const page = {
    filter: { status: 1 },
    order_by: 1,
    offset: 0,
    limit: Constants.LIMIT,
  };
  const response = await fetch(config.link + "course/list", {
    method: "POST",
    headers:config.Api_headers,
    body: JSON.stringify(page),
  });

  const data = await response.json();
  const paths = data.data.map((item) => {
    return {
      params: { id: `${item.sef_url}` },
    };
  });
  return { paths: paths, fallback: true };
}