import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Image from "next/image";

class CourseItem extends React.Component {
  render() {
    const url = "https://alt.thecareerhub.com/";
    const model = this.props.model;
    const career = this.props.career;
    const jobid =  this.props.career.id;
    let streams = Util.multiLabel(model, 'streams', this.props.career.streams);
    let category = Util.multiLabel(model, 'category', this.props.career.career_categories);
    category = category && <div className="badge job-tags"><span>{category}</span></div>;
    return (
      <div className="col-md-12">
        <div className="card main-card">
          <Link target="_blank" href={`/career/${this.props.career.sef_url}`}>
          <div className="card-body card-one lightbluemain">
            <div className="row">
              <div className="col-md-4 careerimageonlist">
                <Image width={246} height={138} src={url+this.props.career.media_path} alt="img" />
              </div>
              <div className="col-md-8">
                <h5 className="card-title">{this.props.career.name}</h5>
                {category}
                <div className="detail pt-2">
                    {
                    career.qualification.primary_qualification ? 
                    <span><Image width={20} height={20} src="/images/career-course.svg" alt="course level"/> &nbsp; 
                      {career.qualification.primary_qualification} </span>
                     : null
                    }
                    {
                      streams ? <span><Image width={20} height={20} src="/images/career-stream.svg" alt="streams"/> &nbsp; {streams} </span> : null
                    }
                  <span>
                    <Image width={20} height={20} src="/images/career-salary.svg" alt="salary"/> &nbsp;
                    <strong> ₹ {Util.convertToMoney(this.props.career.min_salary)} - {Util.convertToMoney(this.props.career.max_salary)} </strong>{" "}
                    <small>salary /annum</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div className="card-body card-two">
            <div className="boxwcolor row">
              <div className="col-md-12">
                <Link target="_blank" href={`/course?jobid=${jobid}`}>
                <div className="btn-detail pointercss lightbluemain">{this.props.career.courseCount} Courses Options</div>
                </Link>
                <Link target="_blank" href={`/college?jobid=${jobid}`}>
                  <div className="btn-detail pointercss lightbluemain">{this.props.career.collegeCount} College Offering</div>
                </Link>
                <Link target="_blank" href={`/career/${this.props.career.sef_url}`}>
                  <div className="btn-detail bttn-yellow-detail">
                    View Details
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CourseItem;
