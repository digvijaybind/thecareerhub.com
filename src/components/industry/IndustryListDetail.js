import React from 'react';
import Link from "next/link";
import Loader from '../common/Loader';
import {BrowserView, MobileView} from 'react-device-detect';

import ListDetail from '../common/ListDetail';
import IndustryItem from './IndustryItem';
import IndustryMobileItem from './IndustryMobileItem';

class IndustryListDetail extends React.Component {
  
  render() {
    const Industry = this.props.data.map((item,i) => <IndustryItem key={`industry_item_${i}`} industry={item} model = {this.props.model} />);
    const IndustryMobile = this.props.data.map((item,i) => <IndustryMobileItem key={`industry_item_mobile_${i}`} industry={item} model = {this.props.model} />);
    
    return (
      <div className="list-colright">
        <ListDetail title="Industry" count={this.props.count} filters={this.props.filters}
          onRemoveFilter={this.props.onRemoveFilter} search={this.props.search}
          onValueChange={this.props.onSearchChange} onSortChange={this.props.onSortChange}/>
        { this.props.inApiCall &&  <Loader /> }
        { !this.props.inApiCall &&
          <>
            <div className="row"> 
            <BrowserView>
              {Industry}
            </BrowserView>
            <MobileView>
              {IndustryMobile}
            </MobileView>
             
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
export default IndustryListDetail;