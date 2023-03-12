import React from 'react';
import Link from "next/link";
import Loader from '../common/Loader';

import ListDetail from '../common/ListDetail';
import BlogItem from './BlogItem';

class BlogListDetail extends React.Component {
  
  render() {
    const blog = this.props.data.map((item,i) => <BlogItem key={`industry_item_${i}`} blog={item} />);
    return (
      <div className="list-colright">
        <ListDetail title="Blog" count={this.props.count} filters={this.props.filters}
          onRemoveFilter={this.props.onRemoveFilter} search={this.props.search}
          onValueChange={this.props.onSearchChange} onSortChange={this.props.onSortChange}/>
        { this.props.inApiCall &&  <Loader /> }
        { !this.props.inApiCall &&
          <>
            <div className="row"> 
            {blog} 
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <Link target="_blank" href='#' className="load-more-btn">Load More</Link>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
}
export default BlogListDetail;