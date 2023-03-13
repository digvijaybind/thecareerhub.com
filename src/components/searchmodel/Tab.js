import React from "react";

class Tab extends React.Component {
  render() {
    return (
    <>
      <nav className="project-tab search-tab">
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
          <Link target="_blank"  className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" 
            href="#tab1" role="tab" aria-controls="nav-home" aria-selected="true">
              Career({this.props.careercount ? this.props.careercount : 0})
          </Link>
          
          <Link target="_blank"  className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" 
            href="#tab2" role="tab" aria-controls="nav-profile" aria-selected="false">
              Courses({this.props.coursecount ? this.props.coursecount : 0})
          </Link>

          <Link target="_blank"  className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" 
            href="#tab3" role="tab" aria-controls="nav-contact" aria-selected="false">
              Colleges({this.props.collegecount ? this.props.collegecount : 0})
          </Link>

          <Link target="_blank"  className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" 
            href="#tab4" role="tab" aria-controls="nav-contact" aria-selected="false">
              Exam({this.props.examcount ? this.props.examcount : 0})
          </Link>

          <Link target="_blank"  className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" 
            href="#tab5" role="tab" aria-controls="nav-contact" aria-selected="false">
              Industry({this.props.industrycount ? this.props.industrycount : 0}) 
          </Link>
        </div>
      </nav>
    </>
    );
  }
}
export default Tab;