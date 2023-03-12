import React from "react";
import Link from "next/link";
import Util from '../../util/Util';
import dateFormat from "dateformat";
import Const from "../../util/Constants";

class IndustryItem extends React.Component {
  render() {
    const url = Const.backendLink;
    // const model = this.props.model;
    const blog = this.props.blog;
    const description = blog.content;
    const result = description.split(' ').slice(0, 20).join(' ');
    let category = Util.multiLabel(this.props.model, 'category', blog.category);
    return (
      
            
            <div className="col-md-6 mb-4">
            <Link target="_blank" href={`/blog/${blog.sef_url}`}>
              <div className="blogrelated">
                <img
                  src={blog.banner_image ? url+blog.banner_image : `${"/images/2.png"}`} alt={blog.title}
                  width="100%"
                  className="bloglist-image"
                />
                <div className="blog-list-two">
                  <span> {category} </span>
                  <p className="blogtitle">
                    {blog.title}
                  </p>
                  <p className="blog-date">{blog &&
                    dateFormat(`${blog.date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
              
            </Link>
            </div>
    );
  }
}
export default IndustryItem;
