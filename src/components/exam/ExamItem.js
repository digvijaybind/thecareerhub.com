import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Image from "next/image";

class ExamItem extends React.Component {
  render() {
    const model = this.props.model;
    const exam = this.props.exam;
    // let category = Util.multiLabel(model, 'category', exam.exam_category);
    // category = category && <div className="badge job-tags"><span>{category}</span></div>;
    // let location = Util.address(model, this.props.college.address);
    // location = location && <><i className="fa fa-map-marker" aria-hidden="true"></i>{location} </>;
    return (
      <div className="col-md-12">
        <div className="card main-card">
        <Link target="_blank" href={"/exam/"+exam.sef_url}>
          <div className="card-body card-one lightbluemain">
            <div className="row">
              <div className="col-md-12">
                <h5 className="card-title">
                  <span style={{fontSize :"18px"}}>{exam.short_name ? exam.short_name+' - ' : ''}</span>
                  <span style={{fontSize :"14px"}}>{exam.name}</span>
                </h5>
                <div className="badge job-tags">
                  <span>Pharmacy</span>
                </div>
                <div className="detail pt-2">
                  <span>
                    <div className="main-text">
                      {exam.exam_frequency ? <>
                        <div className="fade-text">EXAM FREQUENCY</div>
                        <Image width={20} height={20} src="/images/exam-frequency.svg" alt="frequency"/> 
                        {Util.singleLabel(model, 'exam_frequency', exam.exam_frequency)}
                      </> : ""}
                    </div>
                  </span>
                  <span>
                    <div className="main-text">
                      {exam.language ? <>
                        <div className="fade-text">LANGUAGE</div>
                        <Image width={20} height={20} src="/images/exam-language.svg" alt="language"/>{" "}
                        {Util.multiLabel(model, 'exam_lang', exam.language)}
                      </> : ""}
                    </div>
                  </span>
                  {/* <span>
                    <div className="fade-text">Min Qualification</div>
                    <div className="main-text">
                      <i className="fa fa-university" aria-hidden="true"></i>{" "}
                      {exam.min_qualification}
                    </div>
                  </span> */}
                  <span>
                    <div className="main-text">
                      {/* <i className="fa fa-pencil" aria-hidden="true"></i>{" "}
                      Written / &nbsp;
                      <i
                        className="fa fa-mouse-pointer"
                        aria-hidden="true"
                      ></i>{" "}
                      Online */}
                      {exam.exam_mode ? <>
                        <div className="fade-text">EXAM TYPE</div>
                        {exam.exam_mode === 1 ? <Image width={20} height={20} src="/images/exam-written.svg" alt="exam_mode"/> : exam.exam_mode === 2 ? <Image width={20} height={20} src="/images/exam-online.svg" alt="exam_mode"/> : <><Image width={20} height={20} src="/images/offlineexam.webp" alt="exam_mode"/> | <Image width={20} height={20} src="/images/onlineexam.webp" alt="exam_mode"/></>  } 
                        {Util.singleLabel(model, 'exam_mode', exam.exam_mode)}
                      </> : ""}
                      
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div className="card-body card-two">
            <div className="boxwcolor row">
              <div className="col-md-12">
                <Link target="_blank" href={"/college"}>
                <div className="btn-detail lightbluemain">{exam.collegeCount ? exam.collegeCount : 0} Colleges Options</div>
                </Link>
                <Link target="_blank" href={"/course"}>
                <div className="btn-detail lightbluemain">{exam.courseCount ? exam.courseCount : 0} Courses Offering</div>
                </Link>
                <Link target="_blank" href={"/exam/"+exam.sef_url}>
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
export default ExamItem;
