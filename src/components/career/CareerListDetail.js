import React from 'react';
import Link from "next/link";
import Loader from '../common/Loader';
import {BrowserView, MobileView} from 'react-device-detect';

import ListDetail from '../common/ListDetail';
import CareerItem from './CareerItem';
import CareerMobileItem from './CareerMobileItem';

class CourseListDetail extends React.Component {
  
  render() {
    // console.log(this.data.id);
    const career = this.props.data ? this.props.data.map((item,i) => 
      <CareerItem key={`course_item_${i}`} career={item} model = {this.props.model} />) : "N data";
    const CareerMobile = this.props.data ? this.props.data.map((item,i) => 
    <CareerMobileItem key={`course_item_${i}`} career={item} model = {this.props.model} />) : "N data";
    return (
      <div className="list-colright">
        <ListDetail title="Career" count={this.props.count} filters={this.props.filters}
          onRemoveFilter={this.props.onRemoveFilter} search={this.props.search}
          onValueChange={this.props.onSearchChange} onSortChange={this.props.onSortChange}/>
        { this.props.inApiCall &&  <Loader /> }
        { !this.props.inApiCall &&
          <>
            <div className="row"> 
            <BrowserView>
              {career} 
            </BrowserView>
            <MobileView>
                {CareerMobile}
            </MobileView>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
              <span className="load-more-btn"  onClick={this.props.loadmore}>Load More</span>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
}
export default CourseListDetail;