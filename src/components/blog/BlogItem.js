import React from "react";
import Link from "next/link";
import Const from "../../util/Constants";

class IndustryItem extends React.Component {
  render() {
    const url = Const.backendLink;
    // const model = this.props.model;
    const blog = this.props.blog;
    const description = blog.content;
    const result = description.split(' ').slice(0, 20).join(' ');
    // let category = Util.multiLabel(model, 'category', blog.category);
    return (
      <div className="col-md-12">
        <div className="card main-card">
          <div className="card-body card-one ">
            <Link href={`/blog/${blog.sef_url}`}>
            <div className="row">
              <div className="col-md-4 careerimageonlist">
                <img src={url+blog.banner_image} alt={blog.title}  width="100%"/>
              </div>
              <div className="col-md-8">
                <h5 className="card-title">{blog.title}</h5>
                <div className="badge job-tags">
                  {/* <span>{category}</span> */}
                </div>
                <div className="badge job-tags">
                  <span>Author: {blog.author}</span>
                </div>
                <div className="badge job-tags">
                  <span>{blog.date}</span>
                </div>
                <div className="detail pt-2">
                  <p className="text-medium">
                    {result && result+' ...'}
                  </p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default IndustryItem;
