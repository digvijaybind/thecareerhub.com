import React from "react";
import SortBy from '../../components/common/SortBy';
import WhichCourseTab from './WhichCourseTab';
import DegreeTab from './DegreeTab';
import DiplomaTab from './DiplomaTab';
import DoctarateTab from './DoctarateTab';
import MasterTab from './MasterTab';
import OthersTab from './OthersTab';


// import { models } from "mongoose";

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

  handleChange = value => {
    this.props.onValueChange('name', value);
  }
  
  render() {    
    return (
      <div className="row" id="coursesoffered">
          <div className="col-md-12">
              <div className="content-box">
                <h4 className="pt-3"><span className="nor-txt"> Which </span><span className="boldtxt"> course I can pursue?</span></h4>
                
                {/* <div className="row pt-3 pb-3">
                    <div className="col-md-5">
                      <div className="search-right">
                        <form className="d-flex">
                          <span className="input-group-append">
                            <button className="btn bg-bg"><i className="fa fa-search"></i></button>
                          </span>
                          <input className="form-control search2" type="search"
                            placeholder={`Type for Course`} 
                            onChange={event => this.handleChange(event.target.value)}
                            value={this.props.search} name="name" />        
                        </form>
                      </div>
                    </div>
                    <div className="col-md-3 sort tocapitalize">Select Stream </div>
                    <div className="col-md-4 p-0">
                      <SortBy onSortChange={this.props.onSortChange}/>
                    </div>
                  </div> */}

                  <WhichCourseTab />
                    <div className="tab-content" id="nav-tabContent">
                    <DiplomaTab model={this.props.model} course={this.diplomaCourse && this.diplomaCourse}/>
                    <DegreeTab model={this.props.model} course={this.degreeCourse && this.degreeCourse}/>
                    <MasterTab model={this.props.model} course={this.masterCourse && this.masterCourse}/>
                    <DoctarateTab model={this.props.model} course={this.doctrateCourse && this.doctrateCourse}/>
                    <OthersTab model={this.props.model} course={this.otherCourse && this.otherCourse}/>
                </div>
              </div>
          </div>
      </div>
    );
  }
}
export default WhichCourse;