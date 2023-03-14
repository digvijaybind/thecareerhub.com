import React from "react";
import Link from "next/link";
import RelatedCollegeItem from './RelatedCollegeItem';



class BestColleges extends React.Component {
  render() {
    const model =this.props;
    const relatedCollege = this.props.relatedCollege?.map((item,i) => 
      <RelatedCollegeItem key={`college_item_${i}`} college={item} model={this.props.model}/>);
    return (
      <div className="row " id="similarcollege">
          <div className="col-md-12">
              <div className="">
                <h4 className="pb-2">Explore related Colleges</h4>
                {relatedCollege}
              </div>
              <div><Link target="_blank" href="/college" className="viewallbtn">View All Related College List</Link></div>
          </div>
      </div>
    );
  }
}
export default BestColleges;