import React from "react";

class ExamDetailSidebar extends React.Component {
   render() {
      return (
         <div className="leftsidebar leftsidebarCourse ">
            <div className="row">
               <div className="col-md-12 moblistsec">
                  <div className="CareerDetailSidebar list-group">
                     <ul className="moblist">
                        <Link target="_blank"  href="#overview" onClick={() => this.props.setActive('overview')}>
                           <li className={this.props.active === 'overview' ? 'active' : null}>Overview</li> 
                        </Link>

                        <Link target="_blank"  href="#examprep" onClick={() => this.props.setActive('examprep')}> 
                           <li className={this.props.active === 'examprep' ? 'active' : null} >
                           Exam Preparation
                           </li> 
                        </Link> 

                        <Link target="_blank"  href="#exampattern" onClick={() => this.props.setActive('exampattern')} >
                           <li className={this.props.active === 'exampattern' ? 'active' : null} >
                           Exam Pattern
                           </li>
                        </Link>

                        <Link target="_blank"  href="#examdate" onClick={() => this.props.setActive('examdate')} >
                           <li className={this.props.active === 'examdate' ? 'active' : null} >
                           Important Dates
                           </li>
                        </Link>

                        <Link target="_blank"  href="#successtory" onClick={() => this.props.setActive('successtory')} >
                           <li className={this.props.active === 'successtory' ? 'active' : null} >
                           Success Stories
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
export default ExamDetailSidebar;