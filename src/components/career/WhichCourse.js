import React from "react";
import WhichCourseTab from './WhichCourseTab';
import DegreeTab from './DegreeTab';
import DiplomaTab from './DiplomaTab';
import DoctarateTab from './DoctarateTab';
import MasterTab from './MasterTab';
import OthersTab from './OthersTab';



class WhichCourse extends React.Component {
  
  constructor(props){
    super(props);
    this.diplomaCourse = [];
    const relatedCourse = this.props.relatedCourse && this.props.relatedCourse; 
    if(relatedCourse)
    {
      this.diplomaCourse = relatedCourse.filter((item) => { 
        return item.course_level_id === 1 ? item : null;
      })

      this.degreeCourse = relatedCourse.filter((item) => { 
        return item.course_level_id === 2 ? item : null;
      })

      this.masterCourse = relatedCourse.filter((item) => { 
        return item.course_level_id === 3 ? item : null;
      })

      this.doctrateCourse = relatedCourse.filter((item) => { 
        return item.course_level_id === 4 ? item : null;
      })

      this.otherCourse = relatedCourse.filter((item) => { 
        return item.course_level_id > 4 ? item : null;
      })
    }

  }

  render() {
    return (
      <div className="row" id="courses">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Courses</p>
                <h4>Which <span className="boldtxt"> course I can pursue?</span></h4>
                  <WhichCourseTab />
                <div className="tab-content" id="nav-tabContent">
                    <DiplomaTab model={this.props.model} jobid={this.props.jobid} course={this.diplomaCourse && this.diplomaCourse}/>
                    <DegreeTab model={this.props.model} jobid={this.props.jobid} course={this.degreeCourse && this.degreeCourse}/>
                    <MasterTab model={this.props.model} jobid={this.props.jobid} course={this.masterCourse && this.masterCourse}/>
                    <DoctarateTab model={this.props.model} jobid={this.props.jobid} course={this.doctrateCourse && this.doctrateCourse}/>
                    <OthersTab model={this.props.model} jobid={this.props.jobid} course={this.otherCourse && this.otherCourse}/>
                </div>
              </div>
          </div>
      </div>
    );
  }
}
export default WhichCourse;