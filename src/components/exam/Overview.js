import React from "react";
import Util from "../../util/Util";



class Overview extends React.Component {
  
  render() {
    const exam = this.props.exam;
    const model = this.props.model;
    return (
      <>
      <div className="row" id="overview">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Overview</p>
                <h4>Overview of the <span className="boldtxt"> {exam.name}.</span></h4>
                <p className="ptserif">{exam.introduction && Util.htmlParse(exam.introduction)}</p>
              </div>
              <table className="table">
              <tbody>
                <tr>
                  <td>Mode of Exam</td>
                  <td>
                    <span>
                    {exam && exam.exam_mode &&Util.singleLabel(model, 'exam_mode', exam.exam_mode)}
                    </span>
                    </td>
                </tr>
                <tr>
                  <td>Exam Frequency</td>
                  <td>
                    <span>
                    {exam && exam.exam_frequency && Util.singleLabel(model, 'exam_frequency', exam.exam_frequency)}
                    </span>  
                  </td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>
                    <span>
                      {exam && exam.language && Util.multiLabel(model,'exam_lang', exam.language)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Validity of Exam Results</td>
                  <td><span>{exam && exam.result_vaildity}</span></td>
                </tr>
                <tr>
                  <td>Affiliated Institutes</td>
                  <td><span>{exam && exam.affiliated_institutes}</span></td>
                </tr>
                </tbody>
              </table>
          </div>
      </div>
    </>
    );
  }
}
export default Overview;