import React from "react";
import Util from "../../util/Util";


class TypicalDayAtWork extends React.Component {
  render() {
    const career = this.props.career;
    return (
      <>
      <div className="row" id="work">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Typical day at work</p>
                <h4>What does  <span className="boldtxt"> {career.name} do?</span></h4>
                <p className="ptserif">{career.what_does_do && Util.htmlParse(career.what_does_do)}</p>
              </div>
          </div>
      </div>
      <div className="row" id="abilities">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Abilities and Aptitude needed</p>
                <h4>What are the   <span className="boldtxt"> skills, abilities & aptitude</span> needed to become {career.name}?</h4>
                <p className="ptserif">{career.ability_needed && Util.htmlParse(career.ability_needed)}</p>
              </div>
          </div>
      </div>
    </>
    );
  }
}
export default TypicalDayAtWork;