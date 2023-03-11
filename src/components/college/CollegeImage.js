import React from "react";
import Util from '../../util/Util';

class CourseImage extends React.Component {
  
  render() {
    const college = this.props.college;
    const model = this.props.model;
    const nirf = college.nirf_rank && college.nirf_rank[0] && college.nirf_rank[0].rank ? <><div className="growth-c growth2"><span>NIRF Rank </span>
    <div className="ng"> <img src="/images/rank2.png" alt="img" className="img-fluid" />Nirf-{college.nirf_rank[0].rank}/100 </div></div></> :''; 
    return (
      <>
      <div id="course-desc" className="content-box-main">
        <div className="row pb-3">
            <div className="col-md-12 secg">
              {college.address && college.address.location ?
                <div className="growth-c">
                  <span>Location</span>
                  <div className="ng"><img src="/images/location.png" alt="img" className="img-fluid" />{college.address && college.address.location}</div>
                </div>
              :null}
              {college.established ?
                <div className="growth-c ">
                  <span>ESTD</span>
                  <div className="ng"><img src="/images/established.png" alt="img" className="img-fluid" />{college.established}</div>
                </div>
              :null}
              {Util.singleLabel(model,'college_type',college.ownership) ?
                <div className="growth-c ">
                  <span>Ownership</span>
                  <div className="ng"><img src="/images/programme-icon.png" alt="img" className="img-fluid" /> {Util.singleLabel(model,'college_type',college.ownership)}</div>
                </div>
              :null}
                  {nirf}
            </div>
          </div>
        </div>
    </>
    );
  }
}
export default CourseImage;