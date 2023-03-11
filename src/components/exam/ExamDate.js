import React from "react";


class ExamDate extends React.Component {
  
  render() {
    const exam = this.props.exam;
    // const model = this.props.model;
    return (
      <>
      <div className="row mt-4" id="examdate">
          <div className="col-md-12">
              <div className="content-box">
                <h4>Important Dates </h4>
              </div>
              <table className="table">
              <tbody>
                <tr>
                  <td>Announcement of the Exam</td>
                  <td>
                    <span>
                    {exam && exam.exam_announcement ? exam.exam_announcement:'NA'}
                    </span>
                    </td>
                </tr>
                <tr>
                  <td>Application Timeline</td>
                  <td>
                    <span>
                    {exam && exam.application_timeline ? exam.application_timeline : 'NA'}
                    </span>  
                  </td>
                </tr>
                <tr>
                  <td>Provision of Admit Cards</td>
                  <td>
                    <span>
                      {exam && exam.admin_card_provision? exam.admin_card_provision :"NA"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Date Of Exam</td>
                  <td>
                    <span>
                      {exam && exam.exam_date? exam.exam_date :"NA"}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Result Declaration</td>
                  <td>
                    <span>
                      {exam && exam.result_declaration? exam.result_declaration :"NA"}
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
          </div>
      </div>
    </>
    );
  }
}
export default ExamDate;