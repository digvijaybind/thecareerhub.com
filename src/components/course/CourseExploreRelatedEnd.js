import React from "react";
import Link from "next/link";
import RelatedCourseItem from './RelatedCourseItem';
class CourseExploreRelatedEnd extends React.Component {
 
  render() {
   const related_course = this.props.related_course && this.props.related_course.map((item,i) => 
    <RelatedCourseItem key={`course_item_${i}`} course={item} model = {this.props.model} 
      onCourseViewDetails={this.props.onCourseViewDetails} />);
    return (
      <>
      <div className="list-colright detail-list-colright">
        <div className="hide-mobile">
          <div className="row mb-4" id="relatedcourses">
              <div className="col-md-12">
                <div className="content-box">
                  <h4>Explore related  Courses</h4>
                </div>
              </div>
          </div>
          <div className="row">
            {related_course}
          </div>
          <div><Link href="/course" className="viewallbtn">View All Related Course List</Link></div>
        </div>
      </div>
    
    </>
    );
  }
}
export default CourseExploreRelatedEnd;