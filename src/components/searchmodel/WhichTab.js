import React from "react";

import Tab from './Tab';
import CourcesTab from './CourcesTab';
import CareerTab from './CareerTab';
import ExamTab from './ExamTab';
import CollegesTab from './CollegesTab';
import IndustryTab from './IndustryTab';


class WhichTab extends React.Component {
  render() {
    return (
      <div className="content-box">
        <Tab 
          coursecount={this.props.course.count} 
          careercount={this.props.career.count} 
          collegecount={this.props.college.count}
          examcount={this.props.exam.count}
          industrycount={this.props.industry.count}
          />
        <div className="tab-content" id="nav-tabContent">
            <CareerTab data={this.props.career.data} />
            <CourcesTab data={this.props.course.data} />
            <CollegesTab data={this.props.college.data} />
            <ExamTab data={this.props.exam.data} />
            <IndustryTab data={this.props.industry.data} />
        </div>
      </div>
    );
  }
}
export default WhichTab;