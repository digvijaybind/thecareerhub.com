import React from 'react';
import Link from "next/link";
import Loader from '../common/Loader';
import {BrowserView, MobileView} from 'react-device-detect';

import ListDetail from '../common/ListDetail';
import CollegeItem from './CollegeItem';
import CollegeMobileItem from './CollegeMobileItem';


class CollegeListDetail extends React.Component {
  
  render() {
    const college = this.props.data?.map((item,i) => 
      <CollegeItem key={`course_item_${i}`} college={item} model = {this.props.model} />);
    const CollegeMobile = this.props.data?.map((item,i) => 
      <CollegeMobileItem key={`course_item_${i}`} college={item} model = {this.props.model} />);

    return (
      <div className="list-colright">
        <ListDetail title="College" count={this.props.count} filters={this.props.filters}
          onRemoveFilter={this.props.onRemoveFilter} search={this.props.search}
          onValueChange={this.props.onSearchChange} onSortChange={this.props.onSortChange}/>
        { this.props.inApiCall &&  <Loader /> }
        { !this.props.inApiCall &&
          <>
            <div className="row">
              <div className="col-md-12">
              <BrowserView>
                {college} 
              </BrowserView>
              <MobileView>
                  {CollegeMobile}
              </MobileView>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <span to = '#' href="" className="load-more-btn" onClick={this.props.loadmore}>Load More</span>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
}
export default CollegeListDetail;