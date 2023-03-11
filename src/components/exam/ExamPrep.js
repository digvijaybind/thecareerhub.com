import React from "react";


class ExamPrep extends React.Component {
  
  render() {
    const exam = this.props.exam;
    // const model = this.props.model;
    return (
      <>
      <div className="row mt-4" id="examprep">
          <div className="col-md-12">
              <div className="content-box">
                <h4>Exam Preparation </h4>
              </div>
              <table className="table">
              <tbody>
                <tr>
                  <td>Website Link</td>
                  <td>
                    <span>
                    {exam && exam.authority_website ? exam.authority_website:'NA'}
                    </span>
                    </td>
                </tr>
                <tr>
                  <td>Age Limit</td>
                  <td>
                    <span>
                    {exam && exam.age_limit ? exam.age_limit:'NA'}
                    </span>
                    </td>
                </tr>
                <tr>
                  <td>Minimum Qualification</td>
                  <td>
                    <span>
                    {exam && exam.min_qualification ? exam.min_qualification : 'NA'}
                    </span>  
                  </td>
                </tr>
                <tr>
                  <td>Subject Requirement & Minimum %</td>
                  <td>
                    <span>
                      {exam && exam.sub_percentage? exam.sub_percentage :"NA"}
                    </span>
                  </td>
                </tr>
                {/* <tr>
                  <td>Other Eligibility Criteria</td>
                  <td><span>{exam && exam.result_vaildity}</span></td>
                </tr> */}
                <tr>
                  <td>Special Provisioned for Reserved Seats</td>
                  <td><span>{exam && exam.special_provision ? exam.special_provision:"NA"}</span></td>
                </tr>
                </tbody>
              </table>
          </div>
      </div>
    </>
    );
  }
}
export default ExamPrep;