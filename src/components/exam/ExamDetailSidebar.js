import React from "react";

class ExamDetailSidebar extends React.Component {
   render() {
      return (
         <div className="leftsidebar leftsidebarCourse ">
            <div className="row">
               <div className="col-md-12 moblistsec">
                  <div className="CareerDetailSidebar list-group">
                     <ul className="moblist">
                        <a href="#overview" onClick={() => this.props.setActive('overview')}>
                           <li className={this.props.active === 'overview' ? 'active' : null}>Overview</li> 
                        </a>

                        <a href="#examprep" onClick={() => this.props.setActive('examprep')}> 
                           <li className={this.props.active === 'examprep' ? 'active' : null} >
                           Exam Preparation
                           </li> 
                        </a> 

                        <a href="#exampattern" onClick={() => this.props.setActive('exampattern')} >
                           <li className={this.props.active === 'exampattern' ? 'active' : null} >
                           Exam Pattern
                           </li>
                        </a>

                        <a href="#examdate" onClick={() => this.props.setActive('examdate')} >
                           <li className={this.props.active === 'examdate' ? 'active' : null} >
                           Important Dates
                           </li>
                        </a>

                        <a href="#successtory" onClick={() => this.props.setActive('successtory')} >
                           <li className={this.props.active === 'successtory' ? 'active' : null} >
                           Success Stories
                           </li>
                        </a>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
    );
  }
}
export default ExamDetailSidebar;