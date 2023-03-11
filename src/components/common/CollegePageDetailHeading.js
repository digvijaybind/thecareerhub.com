import React from "react";
import Util from '../../util/Util';
import Const from "../../util/Constants";
class CollegePageDetailHeading extends React.Component {
  render() {
   const url = Const.OldUrl+"assets/imagelogo/logo/logo";
   const college = this.props.data;
   let category = Util.multiLabelDiv(this.props.model, 'category', college.college_categories);
   category = category && <div className="badge job-tags">{category}</div>;
   return (
   <>
   <div className="section2 detail-afternavsec">
      <div className="container blbg2">
         <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9 text-left">
               <div className="Mask row">
                  <div className="col-md-2">
                     <img src={url+college.logo} alt="img" className="img-fluid " style={{width:'100%'}}/> 
                  </div>
                  <div className="col-md-10">
                     <h1 className="bntitle dt-heading">{college.name}</h1> 
                     {category}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   </>
   );
  }
}
export default CollegePageDetailHeading;
