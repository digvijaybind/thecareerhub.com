import React from "react";
import Link from "next/link";

import Util from "../../util/Util";
import Const from "../../util/Constants";

class IndustryMobileItem extends React.Component {
  render() {
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
        <div className="row">
        <div className="col-md-12">
          <div className="card main-card">
            <Link target="_blank"  href={"/industry/"+industry.sef_url}>
              <div className="card-body card-one lightbluemain">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col maxw-50">
                        <img src={url+industry.image_path} alt={industry.imgalt} width="100%"/>
                      </div>
                      <div className="col maxw-50 p-0">
                        <h5 className="card-title">{industry.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="detail pt-2">
                      <div className="industrybadge badge job-tags">
                        {category}
                      </div>
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
                 <Link target="_blank"  href={"/career"}> 
                    <div className="btn-detail" lightbluemain>88 Career Options</div>
                 </Link>
                 <Link target="_blank"  href={"/course"}>
                   <div className="btn-detail" lightbluemain>12 Courses Options</div>
                 </Link>
                 <Link target="_blank"  href={"/industry/"+industry.sef_url}>
                   <div className="btn-detail bttn-yellow-detail">
                     View Details
                   </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    //   <div className="col-md-12">
    //     <div className="card main-card">
    //     <Link target="_blank"  href={"/industry/"+industry.sef_url}>
    //       <div className="card-body card-one lightbluemain">
    //         <div className="row">
    //           <div className="col-md-4 careerimageonlist">
    //             <img src={url+industry.image_path}  width="100%"/>
    //           </div>
    //           <div className="col-md-8">
    //             <h5 className="card-title">{industry.name}</h5>
    //             <div className="badge job-tags">
    //               <span>Graphics Designer</span>
    //               <span>Engineering & Technology</span>
    //               <span>Graphics Designer</span>
    //             </div>
    //             <div className="detail pt-2">
    //               <p className="text-medium">
    //                 {result && result+' ...'}
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       </Link>
    //       <div className="card-body card-two">
    //         <div className="boxwcolor row">
    //           <div className="col-md-12">
    //             <Link target="_blank"  href={"/career"}> 
    //             <div className="btn-detail" lightbluemain>88 Career Options</div>
    //             </Link>
    //             <Link target="_blank"  href={"/course"}>
    //             <div className="btn-detail" lightbluemain>12 Courses Options</div>
    //             </Link>
    //             <Link target="_blank"  href={"/industry/"+industry.sef_url}>
    //             <div className="btn-detail bttn-yellow-detail">
    //               View Details
    //             </div>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    );
  }
}
export default IndustryMobileItem;
