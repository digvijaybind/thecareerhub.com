import React from "react";
import Link from "next/link";
import Util from "../../util/Util";

class CourseItem extends React.Component {
   onCourseViewDetails = () => {
      // console.log('item');
      this.props.onCourseViewDetails();
    }
  render() {
    const model = this.props.model.course;
    const course = this.props.course;
    let category = Util.multiLabel(model, 'category', course.course_category_ids);
    category = category && <div className="badge job-tags"><span>{category}</span></div>;
    return (
        <div className="col-md-12">
            <div className="card main-card">
            <Link target="_blank"  href={"/course/"+course.sef_url}>
            <div className="card-body card-one">
            <h5 className="card-title">{course.name}</h5>
                {category}
                <div className="detail detailCareer pt-2">
                    <span> <img src="/images/salary.png" alt="img" className="img-fluid" /> {course.min_fees} - {course.max_fees} <small>fees/year</small></span> 
                    <span><img src="/images/study-mode.png" alt="img" className="img-fluid" /> {course && course.course_level}</span> 
                    <span><img src="/images/duration.png" alt="img" className="img-fluid" /> {course && Util.singleLabel(model, 'duration', course.duration)}</span> 
                    <span><img src="/images/time.png" alt="img" className="img-fluid" />  {course && course.study_mode && Util.multiLabel(model, 'study_mode', course.study_mode)}</span>
                </div>
            </div>
            </Link>
            <div className="card-body career-card-two">
                <div className=" row">
                    <div className="col-md-12">
                    <Link target="_blank"  href={"/course/"+course.sef_url} onClick={this.onCourseViewDetails} >View Details</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
export default CourseItem;



































<div className="col-md-12">
                 <div className="card main-card">
                    <div className="card-body card-one">
                       <h5 className="card-title">PhD in Homeopathic Medicine and Surgery</h5>
                       <div className="badge job-tags">
                          <span>Computer & IT</span>
                       </div>
                       <div className="detail detailCareer pt-2">
                          <span> <img src="./images/salary.png" alt="img" className="img-fluid" /> 40,000 - 1,00,000 <small>fees/year</small></span> 
                          <span><img src="./images/study-mode.png" alt="img" className="img-fluid" /> PG</span> 
                          <span><img src="./images/duration.png" alt="img" className="img-fluid" /> 5+ Years</span> 
                          <span><img src="./images/time.png" alt="img" className="img-fluid" />  Full Time</span>
                       </div>
                    </div>
                    <div className="card-body career-card-two">
                       <div className=" row">
                          <div className="col-md-12">
                             <Link target="_blank"  href="#"  className="">View Details</Link>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>