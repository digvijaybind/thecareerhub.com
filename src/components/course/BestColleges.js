import React from "react";
import Link from "next/link";
import RelatedCollegeItem from './RelatedCollegeItem';


class BestColleges extends React.Component {
  render() {
    const relatedCollege = this.props.relatedCollege.map((item,i) => 
    <RelatedCollegeItem key={`college_item_${i}`} college={item} model={this.props.model} 
    />);
    return (
      <div className="row pt-5" id="colleges">
          <div className="col-md-12">
              <div className="content-box">
                <p className="orangetxt">Colleges</p>
                <h4>Which are the  <span className="boldtxt"> best colleges to attend </span>for {this.props.course.name}?</h4>
                {relatedCollege}
                <div><Link href="/college" className="viewallbtn">View All Related College List</Link></div>
              </div>
          </div>
      </div>
    );
  }
}
export default BestColleges;