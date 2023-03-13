import React from "react";
import Link from "next/link";
import RelatedCareerItem from './RelatedCareerItem';
class CareerExploreRelated extends React.Component {
  render() {
      const relatedCareer = this.props.relatedCareer && this.props.relatedCareer.map((item,i) => <RelatedCareerItem key={`career_item_${i}`} career={item} model = {this.props.model} modelCareer = {this.props.modelCareer} />);
      return (
      <div className="div-c" id="career">
        <div className="hide-mobile">
            <div className="row mb-4">
                <div className="col-md-12">
                    <h4>Which   <span className="boldtxt"> career I can pursue?</span></h4>
                </div>
            </div>
            <div className="row">
                {relatedCareer}
            </div>
            <div><Link target="_blank"  href="/career" className="viewallbtn">View All Related Career List</Link></div>
        </div>
    </div>
    );
  }
}
export default CareerExploreRelated;