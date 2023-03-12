import Link from "next/link";
import React from "react";

class CourseDetailSidebar extends React.Component {
   render() {
      return (
         <div className="leftsidebar leftsidebarCourse ">
            <div className="row">
               <div className="col-md-12 moblistsec">
                  <div className="CareerDetailSidebar list-group">
                     <ul className="moblist">
                        <Link target="_blank" href="#coursesdesc" onClick={() => this.props.setActive('coursesdesc')}>
                           <li className={this.props.active === 'coursesdesc' ? 'active' : null}>Course Description</li> 
                        </Link>

                        <Link target="_blank" href="#od" onClick={() => this.props.setActive('od')}> 
                           <li className={this.props.active === 'od' ? 'active' : null} >
                           Other Details
                           </li> 
                        </Link> 

                        <Link target="_blank" href="#eligibility" onClick={() => this.props.setActive('eligibility')} >
                           <li className={this.props.active === 'eligibility' ? 'active' : null} >
                           Eligibility
                           </li>
                        </Link>

                        <Link target="_blank" href="#careers" onClick={() => this.props.setActive('careers')} >
                           <li className={this.props.active === 'careers' ? 'active' : null} >
                           Careers
                           </li>
                        </Link>

                        <Link target="_blank" href="#colleges" onClick={() => this.props.setActive('colleges')} >
                           <li className={this.props.active === 'colleges' ? 'active' : null} >
                           Colleges
                           </li>
                        </Link>

                        <Link target="_blank" href="#relatedcourses" onClick={() => this.props.setActive('relatedcourses')} >
                           <li className={this.props.active === 'relatedcourses' ? 'active' : null} >
                           Related Courses
                           </li>
                        </Link>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
    );
  }
}
export default CourseDetailSidebar;