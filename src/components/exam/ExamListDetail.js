import React from 'react';
import Link from "next/link";
import Loader from '../common/Loader';

import ListDetail from '../common/ListDetail';
import ExamItem from './ExamItem';

class ExamListDetail extends React.Component {
  
  render() {
    const college = this.props.data.map((item,i) => <ExamItem key={`exam_item_${i}`} exam={item} model = {this.props.model} />);
    return (
      <div className="list-colright">
        <ListDetail title="Exam" count={this.props.count} filters={this.props.filters}
          onRemoveFilter={this.props.onRemoveFilter} search={this.props.search}
          onValueChange={this.props.onSearchChange} onSortChange={this.props.onSortChange}/>
        { this.props.inApiCall &&  <Loader /> }
        { !this.props.inApiCall &&
          <>
            <div className="row"> {college} </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <Link target="_blank"  href='#' className="load-more-btn" onClick={this.props.loadmore}>Load More</Link>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
}
export default ExamListDetail;