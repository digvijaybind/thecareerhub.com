import React from "react";
import Link from "next/link";
import Util from "../../util/Util";


class MasterTab extends React.Component {
  render() {
   const jobid =  this.props.jobid;
   const model = this.props.model.course;
   const masterCourse = this.props.course;
   const courses = masterCourse?.map( (item,i) =>
      <div className="row" key={i}>
         <div className="col-md-12">
            <div className="card main-card">
            <Link target="_blank" href={"/course/"+item.sef_url}>
               <div className="card-body card-one">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="badge job-tags">
                     <span>{Util.multiLabel(model, 'category', item.course_category_ids)}</span>
                  </div>
                  <div className="detail detailCareer pt-2">
                     <span> <img src="/images/salary.png" alt="img" className="img-fluid" /> {Util.convertToMoney(item.min_fees)} - {Util.convertToMoney(item.max_fees)} <small>fees/year</small></span> 
                     <span><img src="/images/study-mode.png" alt="img" className="img-fluid" /> {item.course_level}</span> 
                     <span><img src="/images/duration.png" alt="img" className="img-fluid" /> {item.duration && Util.singleLabel(model, 'duration', item.duration)}</span> 
                     <span><img src="/images/time.png" alt="img" className="img-fluid" /> {Util.multiLabel(model, 'study_mode', item.study_mode)}</span>
                  </div>
               </div>
               </Link>
               <div className="card-body career-card-two">
                  <div className=" row">
                     <div className="col-md-12">
                        <Link target="_blank" href={"/course/"+item.sef_url}>View Details</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
   let viewdetails = courses && courses.length > 0 ? <div><Link target="_blank" href={"/course?course_level=3"} className="viewallbtn">View All Related Courses List</Link></div> : null;
   if(courses && courses.length > 0){courses.push(viewdetails)}
    return (
      <>
        <div className="tab-pane fade" id="tab3">
            {courses && courses.length !==0 ? courses : 'No Records Found'}
        </div>
      </>
    );
  }
}
export default MasterTab;