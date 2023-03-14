import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";
import CareerExploreRelated from "../career/CareerExploreRelated";
class CourseItem extends React.Component {
  render() {
    const url = Const.OldUrl;
    const career = this.props.career;
    const model = this.props.model;
    const modelCareer = this.props.modelCareer;
    // let category = Util.multiLabel(model, 'category', career.career_categories);
    // category = category && <div className="badge job-tags"><span>{category}</span></div>;
    let streams = Util.multiLabel(modelCareer, 'streams', this.props.career.streams);
    return (
        <div className="col-md-12">
            <div className="card main-card">
            <Link target="_blank" href={"/career/"+career.sef_url}>
                <div className="card-body card-one ">
                    <div className="row">
                        <div className="col-md-4 careerimageonlist">
                            <img src={url+career.media_path} alt="img" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h5 className="card-title">{career.name}</h5>
                            {/* {category} */}
                            <div className="detail pt-2">
                            {   
                                career.qualification.primary_qualification ? 
                                <span><img src="/images/course.png" alt="img" className="img-fluid" />&nbsp;
                                {career.qualification.primary_qualification}</span>
                                : null
                            }    
                            {   
                                streams ?
                                <span><img src="/images/stream.png" alt="img" className="img-fluid" />&nbsp;
                                {streams}</span>
                                : null
                            }    
                                <span> <img src="/images/salary2.png" alt="img" className="img-fluid" /> <strong> ₹ {career.min_salary} - {career.max_salary} </strong> <small>salary /annum</small></span>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className="card-body career-card-two">
                <div className=" row">
                    <div className="col-md-12">
                    <Link target="_blank" href={"/career/"+career.sef_url}>View Details</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
export default CourseItem;










































