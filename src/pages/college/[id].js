import React from "react";
import CollegePageDetailHeading from '../../components/common/CollegePageDetailHeading';
import CollegeDetailSidebar from '../../components/college/CollegeDetailSidebar';
import BestColleges from '../../components/college/BestColleges';
import CollegeImage from '../../components/college/CollegeImage';
import WhichCourse from '../../components/college/WhichCourse';
import CollegeContactInfo from '../../components/college/CollegeContactInfo';
import CollegeAPI from '../../api/CollegeAPI';
import Loader from '../../components/common/Loader';
import ModelAPI from '../../api/ModelAPI';
import { withRouter } from "next/router";
import HtmlHeader from "../../components/common/HtmlHeader";
import Constants from "../../util/Constants";
import config from "../../config/config";

class CollegeDetail extends React.Component {
  
  constructor(props) {
    super(props);
   const {data}=props;
    this.model = {course:null,college:null} 
    // this.model = this.props.model;
    this.state = { inApiCall: true, active: 'overview' };
    this.college = data || {};
    this.relatedCareer = [];
    this.related_course = [];
    this.relatedCollege = [];
    
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    window.addEventListener('scroll', this.onScroll, true);
    const sef = window.location.pathname.split("/")[2];
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadCollegeDetail();
  }

  componentDidMount() { 
    // window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('scroll', this.onScroll, true);
    const sef = window.location.pathname.split("/")[2];
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadCollegeDetail();
  }

  onScroll = () => {
    let coursesoffered = document.querySelector('#coursesoffered');
    if(coursesoffered) {
      coursesoffered = coursesoffered.getBoundingClientRect();
      if(coursesoffered.top < window.innerHeight && coursesoffered.bottom >= 0) { this.setActive('coursesoffered'); }
    }
    
    let contact = document.querySelector('#contact');
    if(contact) {
      contact = contact.getBoundingClientRect();
      if(contact.top < window.innerHeight && contact.bottom >= 0) { this.setActive('contact'); }
    }
    
    let similarcollege = document.querySelector('#similarcollege');
    if(similarcollege) {
      similarcollege = similarcollege.getBoundingClientRect();
      if(similarcollege.top < window.innerHeight && similarcollege.bottom >= 0) { this.setActive('similarcollege'); }
    }
  }


  setActive = active => {
    this.setState({ ...this.state, active });
  };

  loadCollegeDetail = () => {
    if(this.id !== 0) {
      const page = { id:this.id, limit: 4 };
      CollegeAPI.related_course(page, this.onResRelatedCourse, this.props.failure, this.props.logout);
      CollegeAPI.relatedCollege(page, this.onResRelatedCollege, this.props.failure, this.props.logout);
      CollegeAPI.details(this.id, this.onRecieved, this.props.failure, this.props.logout);
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

  onRecieved = res => {
    this.college = res && res[0] ? res[0] : {};
    this.pagetitle = this.college.name;
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

  apiCallStatus = () => {
    if(this.college && this.relatedCourse && this.model.course && this.model.college)
      this.setState({ ...this.state, inApiCall: false });
    else
      this.setState({ ...this.state, inApiCall: true });
  }
  
   
  render() {
    if(this.state.inApiCall) return(<Loader />);
    const title = "College Detail - The Career hub";
    const description = "fdsfsdf";
    
    return (
      <>
      <HtmlHeader title={"College details - The Career Hub"} description={"College details - The Career Hub"} />
       
        <CollegePageDetailHeading model={this.model.college} title={this.pagetitle} data={this.college} />
          
        <div className="section3">
              <div className="container-fluid padding-left-right">
                  <div className="row ">
                      <div className="col-md-3 mr-5">
                      <div className="scroll-sidebar">
                          <CollegeDetailSidebar active={this.state.active} setActive={this.setActive} />
                      </div>
                      </div>
                      <div className="col-md-8">
                          <div className="list-colright detail-list-colright">
                              <CollegeImage model={this.model.college} college={this.college}/>
                              <WhichCourse model={this.model} college={this.college} relatedCourse = {this.relatedCourse}/>
                              <CollegeContactInfo model={this.model} college={this.college}/>
                          </div>
                          <div className="list-colright">
                              <BestColleges model={this.model.college} college={this.college} relatedCollege = {this.relatedCollege}/>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </>
    );
  }
}
export default withRouter(CollegeDetail);
CollegeDetail.getLayout = page => (
  <>
    {page}
  </>
)
export async function getStaticProps(context) {
  const { params } = context;
  const id = parseInt(params.id.split(/[- ]+/).pop());
  console.log(id)
  const response = await fetch(config.link + "college/" + id, {
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
  const response = await fetch(config.link + "college/list", {
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