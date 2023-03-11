import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";

class IndustryItem extends React.Component {
  render() {
    // console.log(this.props);

    const url = Const.OldUrl;
    const industry = this.props.industry;
    const description = industry.description;
    // let result = description.slice(0, 20) + (description.length > 20 ? "..." : "");
    const result = description.split(' ').slice(0, 20).join(' ');
    // var result = description.length();
    
    const model = this.props.model;
    let category = Util.multiLabel(model,"category",industry.categories);
    category = category.split(',').map(function (cat, index) {
        return <span>{ cat }</span>; 
    });

    return (
      <div className="col-md-12">
        <div className="card main-card"  >
        <Link href={"/industry/"+industry.sef_url}>
          <div className="card-body card-one lightbluemain" width="100%">
            <div className="row">
              <div className="col-md-4 careerimageonlist">
                <img src={url+industry.image_path} alt={industry.imgalt}  width="100%"/>
              </div>
              <div className="col-md-8">
                <h5 className="card-title">{industry.name}</h5>
                <div className="industrybadge job-tags">
                 {category}
                </div>
                <div className="detail pt-2">
                  <p className="text-medium">
                    {result && result+' ...'}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <div className="card-body card-two">
            <div className="boxwcolor row">
              <div className="col-md-12">
                <Link href={"/career"}> 
                <div className="btn-detail" lightbluemain>{industry.careerCount ? industry.careerCount : 0} Career Options</div>
                </Link>
                <Link href={"/course"}>
                <div className="btn-detail" lightbluemain>{industry.courseCount ? industry.courseCount : 0} Courses Options</div>
                </Link>
                <Link href={"/industry/"+industry.sef_url}>
                <div className="btn-detail bttn-yellow-detail">
                  View Details
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default IndustryItem;
