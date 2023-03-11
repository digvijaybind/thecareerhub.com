import React from "react";
import Util from "../../util/Util";

class PageDetailHeadingcx extends React.Component {
  render() {
   const career = this.props.career;
   const model = this.props.model;
   let category = Util.multiLabel(model, 'category', career.career_categories);
   category = category && <div className="badge job-tags"><span>{category}</span></div>;
   return (
   <>
   <div className="section2 detail-afternavsec">
      <div className="container blbg2">
         <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9 text-left">
               <div className="Mask">
                  <h1 className="bntitle">{career.name}</h1> 
                  {category}
               </div>
            </div>
         </div>
      </div>
   </div>
   </>
   );
  }
}
export default PageDetailHeadingcx;
