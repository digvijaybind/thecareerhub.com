import React from "react";


class ExamPattern extends React.Component {
  
  render() {
    const exam = this.props.exam;
    // const model = this.props.model;
    return (
      <>
      <div className="row mt-4" id="exampattern">
          <div className="col-md-12">
              <div className="content-box">
                <h4>Exam Pattern </h4>
              </div>
              <table className="table">
              <tbody>
                <tr>
                  <td>Duration</td>
                  <td>
                    <span>
                    {exam && exam.exam_duration ? exam.exam_duration:'NA'}
                    </span>
                    </td>
                </tr>
                <tr>
                  <td>Exam Question</td>
                  <td>
                    <span>
                    {exam && exam.total_question ? exam.total_question:'NA'}
                    </span>
                    </td>
                </tr>
                
                <tr>
                  <td>Fees</td>
                  <td>
                    <span>
                    {exam && exam.fees ? exam.fees:'NA'}
                    </span>
                    </td>
                </tr>
                <tr>
                  <td>Format</td>
                  <td>
                    <span>
                    {exam && exam.format ? exam.format : 'NA'}
                    </span>  
                  </td>
                </tr>
                <tr>
                  <td>Domain Tested (Syllabus)</td>
                  <td>
                    <span>
                      {exam && exam.domain_tested? exam.domain_tested :"NA"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Exam Reference</td>
                  <td><span>{exam && exam.mandatory_refrence ? exam.mandatory_refrence:"NA"}</span></td>
                </tr>
                <tr>
                  <td>Exam Domain Question</td>
                  <td><span>{exam && exam.domain_question ? exam.domain_question:"NA"}</span></td>
                </tr>
                <tr>
                  <td>Weightage given to each Domain</td>
                  <td><span>{exam && exam.domain_question ? exam.domain_question:"NA"}</span></td>
                </tr>
                </tbody>
              </table>
          </div>
      </div>
    </>
    );
  }
}
export default ExamPattern;