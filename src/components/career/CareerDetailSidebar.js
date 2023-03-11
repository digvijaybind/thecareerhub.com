import React from "react";

class CareerDetailSidebar extends React.Component {
   render() {
      return (
         <div className="leftsidebar leftsidebarCareer ">
            <div className="row">
               <div className="col-md-12 moblistsec">
                  <div className="CareerDetailSidebar list-group">
                     <ul className="moblist">
                        <a href="#overview" onClick={() => this.props.setActive('overview')}>
                           <li className={this.props.active === 'overview' ? 'active' : null}>Overview</li> 
                        </a>
                        <a href="#work"  onClick={() => this.props.setActive('work')}>
                           <li className={this.props.active === 'work' ? 'active' : null}>
                              Typical day at work
                           </li>
                        </a>
                        <a href="#abilities" onClick={() => this.props.setActive('abilities')}>
                           <li className={this.props.active === 'abilities' ? 'active' : null}>
                              Abilities & aptitude needed
                           </li>
                        </a>

                        <a href="#pathways" onClick={() => this.props.setActive('pathways')}> 
                           <li className={this.props.active === 'pathways' ? 'active' : null} >
                               Pathways
                           </li> 
                        </a> 

                        <a href="#entrance" onClick={() => this.props.setActive('entrance')} >
                           <li className={this.props.active === 'entrance' ? 'active' : null} >
                              Entrance Exam 
                           </li>
                        </a>

                        <a href="#courses" onClick={() => this.props.setActive('courses')} >
                           <li className={this.props.active === 'courses' ? 'active' : null} >
                              Courses
                           </li>
                        </a>

                        <a href="#colleges" onClick={() => this.props.setActive('colleges')} >
                           <li className={this.props.active === 'colleges' ? 'active' : null} >
                              Best colleges
                           </li>
                        </a>
                        <a href="#industries" onClick={() => this.props.setActive('industries')} >
                           <li className={this.props.active === 'industries' ? 'active' : null} >
                              Industries
                           </li>
                        </a>
                        <a href="#internship" onClick={() => this.props.setActive('internship')} >
                           <li className={this.props.active === 'internship' ? 'active' : null} >
                              Internship
                           </li>
                        </a>

                        <a href="#career" onClick={() => this.props.setActive('career')} >
                           <li className={this.props.active === 'career' ? 'active' : null} > 
                              Career Outlook
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
export default CareerDetailSidebar;