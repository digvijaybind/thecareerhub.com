import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";

class CareerMobileItem extends React.Component {
  render() {
    const url = Const.OldUrl;
    const model = this.props.model;
    const career = this.props.career;
    let streams = Util.multiLabel(model, 'streams', this.props.career.streams);
    let category = Util.multiLabel(model, 'category', this.props.career.career_categories);
    category = category && <div className="badge job-tags"><span>{category}</span></div>;
    const isMobile = window.matchMedia('(max-width: 600px)').matches
    return (
        <div className="row">
            <div class="col-md-12">
                <div class="card main-card">
                  <Link href={"/career/"+this.props.career.sef_url}>
                    <div class="card-body card-one lightbluemain">
                        <div class="row">
                        <div class="col-md-12">
                            <div class="row">
                            <div class="col maxw-50">
                                <img src={url+this.props.career.media_path} alt="img" width="100%" />
                            </div>
                            <div class="col maxw-70 p-0">
                                <h5 class="card-title">
                                {this.props.career.name}
                                </h5>
                                {category}
                            </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="detail pt-2">
                                {
                                career.qualification.primary_qualification ? 
                                <span><img src="/images/career-course.svg" alt="course level"/> &nbsp; 
                                    {career.qualification.primary_qualification} </span>
                                    : null
                                }
                                {
                                    streams ? <span><img src="/images/career-stream.svg" alt="streams"/> &nbsp; {streams} </span> : null
                                }
                                <span>
                                    <img src="/images/career-salary.svg" alt="salary" />{" "}
                                    &nbsp;
                                    <strong> ₹ {Util.convertToMoney(this.props.career.min_salary)} - {Util.convertToMoney(this.props.career.max_salary)} </strong>{" "}
                                    <small>salary /annum</small>
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Link>
                    <div class="card-body card-two">
                    <div class="boxwcolor row">
                        <div class="col-md-12">
                        <Link href="/course">
                            <div class="btn-detail pointercss lightbluemain">
                            {this.props.career.courseCount}  Courses Options
                            </div>
                        </Link>
                        <Link href="/college">
                            <div class="btn-detail pointercss lightbluemain">
                            {this.props.career.collegeCount} Colleges Offering
                            </div>
                        </Link>
                        {!isMobile ? <Link href={"/career/"+this.props.career.sef_url}>
                            <div class="btn-detail bttn-yellow-detail">
                            View Details
                            </div>
                        </Link> : ''}
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    //   <div className="col-md-12">
    //     <div className="card main-card">
    //       <Link href={"/career/"+this.props.career.sef_url}>
    //       <div className="card-body card-one lightbluemain">
    //         <div className="row">
    //           <div className="col-md-4 careerimageonlist">
    //             <img src={url+this.props.career.media_path} alt="img" width="100%" />
    //           </div>
    //           <div className="col-md-8">
    //             <h5 className="card-title">{this.props.career.name}</h5>
    //             {category}
    //             <div className="detail pt-2">
    //                 {
    //                 career.qualification.primary_qualification ? 
    //                 <span><img src="/images/course.png" alt="course level"/> &nbsp; 
    //                   {career.qualification.primary_qualification} </span>
    //                  : null
    //                 }
    //                 {
    //                   streams ? <span><img src="/images/stream.png" alt="streams"/> &nbsp; {streams} </span> : null
    //                 }
    //               <span>
    //                 <img src="/images/salary2.png" alt="salary"/> &nbsp;
    //                 <strong> ₹ {Util.convertToMoney(this.props.career.min_salary)} - {Util.convertToMoney(this.props.career.max_salary)} </strong>{" "}
    //                 <small>salary /annum</small>
    //               </span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       </Link>
    //       <div className="card-body card-two">
    //         <div className="boxwcolor row">
    //           <div className="col-md-12">
    //             <Link href={"/course"}>
    //             <div className="btn-detail pointercss lightbluemain">{this.props.career.courseCount} Courses Options</div>
    //             </Link>
    //             <Link href={"/college"}>
    //               <div className="btn-detail pointercss lightbluemain">122 Colleges Offering</div>
    //             </Link>
    //             <Link href={"/career/"+this.props.career.sef_url}>
    //               <div className="btn-detail bttn-yellow-detail">
    //                 View Details
    //               </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
  }
}
export default CareerMobileItem;
