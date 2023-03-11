import React from "react";
import Util from "../../util/Util";

class TypicalDayAtWork extends React.Component {
  render() {
    const course = this.props.course;
    return (
      <>
      {course && course.other_details && 
      <div className="row " id="od">
          <div className="col-md-12">
              <div className="content-box">
                <h4>Typical   <span className="boldtxt"> day at work</span></h4>
                <p>{course  && Util.htmlParse(course.other_details)}</p>
              </div>
          </div>
      </div>
      }
      {/* <div className="row pb-3" id="work">
          <div className="col-md-12">
              <div className="content-box">
                <h4>Eligibilty</h4>
                <ul className="uldetail">
                  <li>Is Dermatoglyphics testing scientific or Medical basic?</li>
                  <li>How effective is an online aptitude test?</li>
                  <li>What are the benefits of the Brainwonders Aptitude Test?</li>
                </ul>
              </div>
          </div>
      </div> */}
    
    </>
    );
  }
}
export default TypicalDayAtWork;