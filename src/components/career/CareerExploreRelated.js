import React from "react";
import RelatedCareerItem from "./RelatedCareerItem";

class CareerExploreRelated extends React.Component {
  render() {
    const relatedCareer =
      this.props.relatedCareer &&
      this.props.relatedCareer?.map((item, i) => (
        <RelatedCareerItem
          key={`career_item_${i}`}
          career={item}
          model={this.props.model}
        />
      ));
    return (
      <>
        <div className="list-colright detail-list-colright">
          <div className="hide-mobile">
            <div className="row mb-4">
              <div className="col-md-12">
                <span className="Explore-related-care">
                  Explore related career
                </span>
              </div>
            </div>
            {relatedCareer}
          </div>
        </div>
      </>
    );
  }
}
export default CareerExploreRelated;
