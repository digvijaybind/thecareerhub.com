import React from "react";
import Util from "../../util/Util";



class Overview extends React.Component {
  
  render() {
    const career = this.props.career;
    return (
      <>
      <div className="row" id="overview">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Overview</p>
                <h4>Who is <span className="boldtxt"> {career.name}?</span></h4>
                <p className="ptserif">{career.how_to_become && Util.htmlParse(career.how_to_become)}</p>
              </div>
          </div>
      </div>
    </>
    );
  }
}
export default Overview;