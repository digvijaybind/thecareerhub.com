import Link from "next/link";
import React from "react";

class IndustryDetailSidebar extends React.Component {
   render() {
      return (
         <div className="leftsidebar leftsidebarCourse ">
            <div className="row">
               <div className="col-md-12 moblistsec">
                  <div className="CareerDetailSidebar list-group">
                     <ul className="moblist">
                        <Link href="#overview" onClick={() => this.props.setActive('overview')}>
                           <li className={this.props.active === 'overview' ? 'active' : null}>Description</li> 
                        </Link>

                        <Link href="#career" onClick={() => this.props.setActive('career')}> 
                           <li className={this.props.active === 'career' ? 'active' : null} >
                           Careers
                           </li> 
                        </Link> 

                        <Link href="#coursesoffered" onClick={() => this.props.setActive('coursesoffered')} >
                           <li className={this.props.active === 'coursesoffered' ? 'active' : null} >
                           Courses
                           </li>
                        </Link>

                        <Link href="#colleges" onClick={() => this.props.setActive('colleges')} >
                           <li className={this.props.active === 'colleges' ? 'active' : null} >
                           Colleges
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
export default IndustryDetailSidebar;