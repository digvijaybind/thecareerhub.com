import React from "react";
import Util from "../../util/Util";


class WorkInternCareer extends React.Component {
  render() {
    const career = this.props.career;
    return (
      <>
      <div className="row" id="industries">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Industries</p>
                <h4>Which  <span className="boldtxt"> Industries are open</span>  for {career.name}? </h4>
                {career.industry_detail && Util.htmlParse(career.industry_detail)}
              </div>
          </div>
      </div>
      <div className="row" id="internship">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">internship</p>
                <h4>Are there <span className="boldtxt"> internships available</span>  for {career.name}?     </h4>
                <p>{career.internship_detail && Util.htmlParse(career.internship_detail)}</p>
              </div>
          </div>
      </div>
      <div className="row" id="career">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Career outlook</p>
                <h4>What does  <span className="boldtxt">the future look like</span>  for {career.name}?  </h4>
                <p>{career.job_outlook && Util.htmlParse(career.job_outlook)}</p>
              </div>
          </div>
      </div>
    </>
    );
  }
}
export default WorkInternCareer;