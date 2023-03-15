import React from 'react';
import Link from "next/link";
import Util from '../../util/Util';
import Image from 'next/image';

class CourseItem extends React.Component {
  render() {
    const model = this.props.model;
    const course = this.props.course;
    const category = Util.multiLabel(model, 'category', this.props.course.course_category_ids);
    const categorydiv = category && <div className="badge job-tags"><span>{category}</span></div>;
    const isMobile = window.matchMedia('(max-width: 600px)').matches
    return (
      <div className="col-md-12 col-md-12p">
        <div className="card main-card">
        <Link target="_blank" href={"/course/"+this.props.course.sef_url}>
          <div className="card-body card-one lightbluemain">
            <div className="row">
              <div className="col-md-12">
                <h5 className="card-title">{this.props.course.name}</h5>
                {categorydiv}
                <div className="detail pt-2">
                  <span>
                    <Image width={20} height={20} src="/images/course-salary.svg" alt="img" /> &nbsp; 
                    {Util.convertToMoney(this.props.course.min_fees)} - {Util.convertToMoney(this.props.course.max_fees)}
                    <small>&nbsp;fees/year</small>
                  </span> 
                    {course.course_level_id ?
                     <span><Image width={20} height={20} src="/images/course-type.svg" alt="img" /> &nbsp; 
                     {Util.singleLabel(model, 'course_level', course.course_level_id)}</span> 
                     : null}
                    {course.duration ? <span>
                      <Image width={20} height={20} src="/images/course-duration.svg" alt="img" /> &nbsp; 
                      {Util.singleLabel(model, 'duration', course.duration)}
                    </span> : null}
                    {course.study_mode && course.study_mode.length > 0 ? <span>
                      <Image width={20} height={20} src="/images/course-time.svg" alt="img" /> &nbsp; 
                      {Util.multiLabel(model, 'study_mode', this.props.course.study_mode)}
                    </span> 
                    : null}
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div className="card-body card-two">
            <div className="boxwcolor row">
              <div className="col-md-12 btn-listpage">
                <Link target="_blank" href="/college">
                <div className="btn-detail lightbluemain">{this.props.course.collegeCount} Colleges Offering</div>
                </Link>
                <Link target="_blank" href="/career">
                <div className="btn-detail lightbluemain">{this.props.course.careerCount} Careers Options</div> 
                </Link>
                {!isMobile ? <Link target="_blank" href={"/course/"+this.props.course.sef_url}>
                <div className="btn-detail bttn-yellow-detail">
                View Details
                </div>
                </Link> : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CourseItem;