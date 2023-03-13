import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";

class RelatedCareerItem extends React.Component {
  render() {
    const url = Const.OldUrl;
    const model = this.props.model;
    const career = this.props.career;
    const jobid= this.props.career.id;
    let category = Util.multiLabel(model, 'category', career.career_categories);
    category = category && <div className="badge job-tags"><span>{category}</span></div>;
    let streams = Util.multiLabel(model, 'streams', this.props.career.streams);
    const isMobile = window.matchMedia('(max-width: 600px)').matches
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card main-card">
                <Link target="_blank"  href={"/career/"+this.props.career.sef_url}>    
                    <div className="card-body card-one ">
                        <div className="row">
                            <div className="col-md-4 careerimageonlist">
                                <img src={url+career.media_path} alt="img" width="100%" />
                            </div>
                            <div className="col-md-8">
                                <h5 className="card-title">{career.name}</h5>
                                {category}
                                <div className="detail pt-2">
                                {
                                    career.qualification.primary_qualification ? 
                                    <span><img src="/images/course.png" alt="course level"/> &nbsp; 
                                    {career.qualification.primary_qualification} </span>
                                    : null
                                }
                                {
                                    streams ? <span><img src="/images/stream.png" alt="streams"/> &nbsp; {streams} </span> : null
                                }
                                <span>
                                    <img src="/images/salary2.png" alt="salary"/> &nbsp;
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
                                <Link target="_blank"  href={"/course?jobid="+jobid}>
                                <div className="btn btn-detail">{career.courseCount ? career.courseCount : 0} Courses Options</div> 
                                </Link>
                                <Link target="_blank"  href={"/college?jobid="+jobid}>
                                <div className="btn btn-detail">{career.collegeCount ? career.collegeCount : 0} Colleges Offering</div>
                                </Link>
                                {!isMobile ? <Link target="_blank"  href={"/career/"+this.props.career.sef_url}>
                                <div className="btn btn-detail bttn-yellow-detail">View Details</div></Link> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default RelatedCareerItem;