import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";
import Image from "next/image";

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
            <div className="col-md-12">
                <div className="card main-card">
                  <Link target="_blank" href={"/career/"+this.props.career.sef_url}>
                    <div className="card-body card-one lightbluemain">
                        <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                            <div className="col maxw-50">
                                <Image width={20} height={40} src={url+this.props.career.media_path} alt="img" />
                            </div>
                            <div className="col maxw-70 p-0">
                                <h5 className="card-title">
                                {this.props.career.name}
                                </h5>
                                {category}
                            </div>
                            </div>
                        </div>
                        <div className="col-md-12">
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
                                    <Image width={20} height={20} src="/images/career-salary.svg" alt="salary" />{" "}
                                    &nbsp;
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
                        <Link target="_blank" href="/course">
                            <div className="btn-detail pointercss lightbluemain">
                            {this.props.career.courseCount}  Courses Options
                            </div>
                        </Link>
                        <Link target="_blank" href="/college">
                            <div className="btn-detail pointercss lightbluemain">
                            {this.props.career.collegeCount} Colleges Offering
                            </div>
                        </Link>
                        {!isMobile ? <Link target="_blank" href={"/career/"+this.props.career.sef_url}>
                            <div className="btn-detail bttn-yellow-detail">
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
    //       <Link target="_blank" href={"/career/"+this.props.career.sef_url}>
    //       <div className="card-body card-one lightbluemain">
    //         <div className="row">
    //           <div className="col-md-4 careerimageonlist">
    //             <Image width={200} height={400} src={url+this.props.career.media_path} alt="img" width="100%" />
    //           </div>
    //           <div className="col-md-8">
    //             <h5 className="card-title">{this.props.career.name}</h5>
    //             {category}
    //             <div className="detail pt-2">
    //                 {
    //                 career.qualification.primary_qualification ? 
    //                 <span><Image width={200} height={400} src="/images/course.png" alt="course level"/> &nbsp; 
    //                   {career.qualification.primary_qualification} </span>
    //                  : null
    //                 }
    //                 {
    //                   streams ? <span><Image width={200} height={400} src="/images/stream.png" alt="streams"/> &nbsp; {streams} </span> : null
    //                 }
    //               <span>
    //                 <Image width={200} height={400} src="/images/salary2.png" alt="salary"/> &nbsp;
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
    //             <Link target="_blank" href={"/course"}>
    //             <div className="btn-detail pointercss lightbluemain">{this.props.career.courseCount} Courses Options</div>
    //             </Link>
    //             <Link target="_blank" href={"/college"}>
    //               <div className="btn-detail pointercss lightbluemain">122 Colleges Offering</div>
    //             </Link>
    //             <Link target="_blank" href={"/career/"+this.props.career.sef_url}>
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
