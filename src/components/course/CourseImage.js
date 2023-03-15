import Image from "next/image";
import React from "react";
import Util from '../../util/Util';

class CourseImage extends React.Component {
  render() {
    const model = this.props.model;
    const course = this.props.course;
   return (
      <>
      <div id="courses-des" className="content-box-main">
        <div className="row pb-3">
            <div className="col-md-12 secg">
                {course && Util.singleLabel(model, 'duration', course.duration)  ?
                  <div className="growth-c">
                    <span>Duration</span>
                    <div className="ng">
                      <Image width={20} height={20} src="/images/duration-icon .png" alt="img" className="img-fluid" /> 
                      {course && Util.singleLabel(model, 'duration', course.duration)}</div>
                  </div>
                :null}
                {course && course.course_level ?
                  <div className="growth-c ">
                    <span>Level</span>
                    <div className="ng">
                      <Image width={20} height={20} src="/images/level-icon.png" alt="img" className="img-fluid" /> 
                      {course && course.course_level}
                    </div>
                  </div>
                :null}
                {course && Util.singleLabel(model, 'course_level', course.course_level_id) ?
                  <div className="growth-c ">
                    <span>Programme</span>
                    <div className="ng">
                      <Image width={20} height={20} src="/images/programme-icon.png" alt="img" className="img-fluid" />
                      {course && Util.singleLabel(model, 'course_level', course.course_level_id)}
                    </div>
                  </div>
                :null}
                {course && course.study_mode && Util.multiLabel(model, 'study_mode', course.study_mode) ?
                <div className="growth-c growth2">
                  <span>Study Mode</span>
                  <div className="ng">
                    <Image width={20} height={20} src="/images/study-mode.png" alt="img" className="img-fluid" />
                    {course && course.study_mode && Util.multiLabel(model, 'study_mode', course.study_mode)}
                  </div>
                </div>
                :null}
            </div>
          </div>
          <div className="row" >
          <div className="col-md-12">
              <div className="content-box">
                <h4>Course Description</h4>
                <p className="ptserif">{course && course.course_details}</p>
              </div>
          </div>
      </div>
        </div>
    </>
    );
  }
}
export default CourseImage;