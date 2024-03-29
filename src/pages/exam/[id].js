import React from "react";
import { withRouter } from "next/router";
import PageDetailHeading from "../../components/common/PageDetailHeading";
import ExamDetailSidebar from "../../components/exam/ExamDetailSidebar";
import Overview from "../../components/exam/Overview";
import ExamPrep from "../../components/exam/ExamPrep";
import ExamPattern from "../../components/exam/ExamPattern";
import ExamDate from "../../components/exam/ExamDate";
import Loader from "../../components/common/Loader";
import ExamAPI from "../../api/ExamAPI";
import ModelAPI from "../../api/ModelAPI";
import HtmlHeader from "../../components/common/HtmlHeader";
import config from "../../config/config";
import Constants from "../../util/Constants";


class ExamDetails extends React.Component {
  constructor(props) {
    super(props);
    const {data}=props;
    this.model = { exam: null };
    // this.model = this.props.model;
    this.state = { inApiCall: true, active: "overview" };
    this.exam = data || {};
    this.relatedCareer = null;
    this.related_course = null;
    this.relatedCollege = null;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    window.addEventListener('scroll', this.onScroll, true);
    const sef = window.location.pathname.split("/")[2];
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadExamDetail();
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('scroll', this.onScroll, true);
    const sef = window.location.pathname.split("/")[2];
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadExamDetail();
  }

  onScroll = () => {
    let overview = document.querySelector('#overview');
    if(overview) {
      overview = overview.getBoundingClientRect();
      if(overview.top < window.innerHeight && overview.bottom >= 0) { this.setActive('overview'); }
    }
    
    let examprep = document.querySelector('#examprep');
    if(examprep) {
      examprep = examprep.getBoundingClientRect();
      if(examprep.top < window.innerHeight && examprep.bottom >= 0) { this.setActive('examprep'); }
    }
    
    let exampattern = document.querySelector('#exampattern');
    if(exampattern) {
      exampattern = exampattern.getBoundingClientRect();
      if(exampattern.top < window.innerHeight && exampattern.bottom >= 0) { this.setActive('exampattern'); }
    }

    let examdate = document.querySelector('#examdate');
    if(examdate) {
      examdate = examdate.getBoundingClientRect();
      if(examdate.top < window.innerHeight && examdate.bottom >= 0) { this.setActive('examdate'); }
    }

    let successtory = document.querySelector('#successtory');
    if(successtory) {
      successtory = successtory.getBoundingClientRect();
      if(successtory.top < window.innerHeight && successtory.bottom >= 0) { this.setActive('successtory'); }
    }
  }


  setActive = (active) => {
    this.setState({ ...this.state, active });
  };

  loadExamDetail = () => {
    if (this.id !== 0) {
      // const page = { id: this.id, limit: 4 };
      ExamAPI.details(
        this.id,
        this.onRecieved,
        this.props.failure,
        this.props.logout
      );
      ModelAPI.getExamModel(
        this.onExamModel,
        this.props.failure,
        this.props.logout
      );
    }
  };

  onExamModel = (res) => {
    this.model.exam = res.exam;
    this.apiCallStatus();
  };

  onCollegeModel = (res) => {
    this.model.college = res.college;
    this.apiCallStatus();
  };

  onRecieved = (res) => {
    this.exam = res ? res[0] : {};
    this.pagetitle = this.exam && this.exam.name;
    this.categorytitle = this.exam && this.exam.category;
    this.apiCallStatus();
  };

  onResRelatedCourse = (res) => {
    this.related_course = res.data;
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
    if (this.model.exam && this.exam)
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  render() {
    if (this.state.inApiCall) return <Loader />;


    return (
      <>
       <HtmlHeader title={this.exam?.meta?.title || "Exam details - The Career Hub"} 
      description={this.exam?.meta?.description || "Exam details - The Career Hub"}
      keywords={this.exam?.meta?.keywords}
      />

        <PageDetailHeading
          model={this.model.exam}
          title={this.pagetitle}
          category={this.categorytitle}
          exam={this.exam}
        />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 my-3">
                <div className="scroll-sidebar">
                  <ExamDetailSidebar
                    active={this.state.active}
                    setActive={this.setActive}
                  />
                </div>
              </div>
              <div className="col-md-9 rightSec">
                <div className="list-colright detail-list-colright">
                  <Overview model={this.model.exam} exam={this.exam} />
                  <ExamPrep model={this.model.exam} exam={this.exam} />
                  <ExamPattern model={this.model.exam} exam={this.exam} />
                  <ExamDate model={this.model.exam} exam={this.exam} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(ExamDetails);
ExamDetails.getLayout = page => (
  <>
    {page}
  </>
)
export async function getStaticProps(context) {
  const { params } = context;
  const id = parseInt(params.id.split(/[- ]+/).pop());
  const response = await fetch(config.link + "exam/" + id, {
    method: "GET",
    headers: config.Api_headers,
  });
  const data = await response.json();
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
  const response = await fetch(config.link + "exam/list", {
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