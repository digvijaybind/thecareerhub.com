import React from 'react';
import Link from "next/link";
import Loader from '../common/Loader';

import ListDetail from '../common/ListDetail';
import CourseItem from './CourseItem';

class CourseListDetail extends React.Component {
  
  render() {
    const courses = this.props.data && this.props.data.map((item,i) => <CourseItem key={`course_item_${i}`} course={item} model = {this.props.model} />);
    return (
      <div className="list-colright">
        <ListDetail title="Course" count={this.props.count} filters={this.props.filters}
          onRemoveFilter={this.props.onRemoveFilter} search={this.props.search}
          onValueChange={this.props.onSearchChange} onSortChange={this.props.onSortChange}/>
        { this.props.inApiCall &&  <Loader /> }
        { !this.props.inApiCall &&
          <>
            <div className="row"> {courses} </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <span className="load-more-btn" onClick={this.props.loadmore}>Load More</span>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
}
export default CourseListDetail;