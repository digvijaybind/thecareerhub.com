import React from "react";

import HtmlHeader from "../common/HtmlHeader";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Loader from "../common/Loader";

import BlogAPI from "../../api/BlogAPI";
import ModelAPI from "../../api/ModelAPI";
import dateFormat from "dateformat";
import Util from "../../util/Util";
import Const from "../../util/Constants";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Link from "next/link";
import { withRouter } from "next/router";


class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
    const sef = props.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    // this.model = this.props.model;
    this.model = null;
    this.state = { inApiCall: true, active: "overview" };
    this.blog = {};
  }

  componentDidMount() {
    this.loadBlogDetail();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const sef = nextProps.match.params.id;
    this.id = parseInt(sef.split(/[- ]+/).pop());
    this.loadBlogDetail();
  }

  loadBlogDetail = () => {
    if (this.id !== 0) {
      // const page = { id:this.id, limit: 4 };
      BlogAPI.details(
        this.id,
        this.onRecieved,
        this.props.failure,
        this.props.logout
      );
      ModelAPI.getBlogModel(
        this.onModel,
        this.props.failure,
        this.props.logout
      );
    }
  };

  onModel = (res) => {
    this.model = res.blog;
    this.apiCallStatus();
  };

  onRecieved = (res) => {
    // console.log(res);
    this.blog = res.data && res.data[0] ? res.data[0] : {};
    this.comment = res.comment.data;
    this.relatedpost = res.relatedpost;
    this.pagetitle = this.blog && this.blog.title;
    this.apiCallStatus();
  };

  apiCallStatus = () => {
    if (this.blog && this.model) {
      this.setState({ ...this.state, inApiCall: false });
    } else {
      this.setState({ ...this.state, inApiCall: true });
    }
  };

  render() {
    if (this.state.inApiCall) return <Loader />;
    const title = "Blog Detail - The Career hub";
    const description = "fdsfsdf";
    const url = Const.backendLink;
    // const model = this.model;
    let category = this.blog && this.blog.category ? Util.multiLabel(this.model, 'category', this.blog.category):null;
    const blogcategory = this.model.category.map((item) => <li>{item.name}({item.blog ? item.blog :0})</li>);
    // console.log('gere', this.relatedpost);
    const relatedpost = this.relatedpost && this.relatedpost.map((item) => <>
      <div className="blogrelated">
        <img
          src={
              item.banner_image
              ? url + item.banner_image
              : `${"/images/2.png"}`
          }
          width="100%"
          alt="img"
          className="bloglist-image"
        />
        <div className="blog-detail-text1 blogbtnn left-blog">
         <span>
          {item.category ? Util.multiLabel(this.model, 'category', item.category) : null}
          </span>
          <p className="blogtitileside bmt-16">
            {item.title}
          </p>
          <p className="blog-date">{item.date ? 
                    dateFormat(`${item.date}`, " dS mmmm, yyyy") : null}</p>
        </div>
      </div>
    </>);

    const comment = this.comment && this.comment.map((item,i) => <div className="comment  row ">
    <div className="col-md-1">
      <img src="/images/career-test-icon.png" alt="blog_image" />
    </div>
    <div className="col-md-11">
      <h3 className="c-name">{item && item.user_name ? item.user_name : "Heather McLaughlin"}</h3>
      <h3 className="c-date">{item && item.date ? dateFormat(`${item.date}`, " dS mmmm, yyyy") : "Jan 23, 2020"}</h3>
    </div>
    <div>
      <p className="blog-comment">
      {item && item.text ? item.text : ""}
      </p>
    </div>
  </div>);

    return (
      <>
        <HtmlHeader title={title} description={description} />
        <Header />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row">
              <div className="col-md-12">
                <div className="detail-list-colright pt-0 mt-3"></div>
                <p className="mt-4">
                  <u>
                    <Link href="/blog" className="btb">
                      Back to Blogs
                    </Link>
                  </u>
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-8">
                <div className="blog-detail-title mb-1">
                  {this.blog && this.blog.title}
                </div>
                <div className="blog-detail-category mt-2 mb-3">
                  <span> {category} </span>
                </div>
                <p className="blog-detail-date">
                  {this.blog && this.blog.author},
                  {this.blog && this.blog.date ? 
                    dateFormat(`${this.blog.date}`, " dS mmmm, yyyy") : null}
                </p>
                <div className="blogimg mt-3 mb-2">
                  <img
                    src={
                      this.blog && this.blog.banner_image
                        ? url + this.blog.banner_image
                        : `${"/images/2.png"}`
                    }
                    alt="blog_image"
                    width="100%"
                  />
                </div>
                <div className="blog-detail-content ptserif mb-4">
                  {this.blog && ReactHtmlParser(this.blog.content)}
                </div>
                <div className="row mt-4">
                  <div className="like-comment col-md-4">
                    <span>
                      <img src="/images/like-icon.png" alt="like" />
                    </span>
                    <span>
                      <img src="/images/comment-icon.png" alt="comment" />
                    </span>
                  </div>
                  <div className="blog-social col-md-8">
                    <span>
                    <a href="https://www.linkedin.com/in/thecareerhub/" target="blank">
                      <img src="/images/social/li.png" alt="social" /></a>
                    </span>
                    <span>
                    <a href="https://www.facebook.com/The-Career-Hub-110040528233534/" target="blank">
                      <img src="/images/social/fb.png" alt="social" /></a>
                    </span>
                    <span>
                    <a href="https://www.instagram.com/thecareerhubindia/" target="blank">
                      <img src="/images/social/ig.png" alt="social" /></a>
                    </span>
                    <span>
                    <a href="https://twitter.com/TheCareerH" target="blank">
                      <img src="/images/social/tw.png" alt="social" /></a>
                    </span>
                  </div>
                </div>
                <div className="blog-detail-divider mt-4 mb-4"></div>

                {comment}
                
                <div className="lm">
                  <p>Load More</p>
                </div>
              </div>
              <div className="col-md-4 rpost-div">
                <h3>Related Post</h3>
               {relatedpost}
                {/* <div className="Blog">
                  <img
                    src="/images/2.png"
                    width="100%"
                    alt="img"
                    className="bloglist-image"
                  />
                  <div className="blog-detail-text1 blogbtnn left-blog">
                    <span> Science </span>
                    <span> Engineering and Technology </span>
                    <span> Management </span>
                    <p className="blogtitileside bmt-16">
                      3 Steps To Make A Subject Interesting For Your Child
                    </p>
                    <p className="blog-date">19 October 2018</p>
                  </div>
                </div>

                <div className="Blog">
                  <img
                    src="/images/2.png"
                    width="100%"
                    alt="img"
                    className="bloglist-image"
                  />
                  <div className="blog-detail-text2 blogbtnn left-blog">
                    <span> Science </span>
                    <span> Engineering and Technology </span>
                    <span> Management </span>
                    <p className="blogtitileside bmt-16">
                      3 Steps To Make A Subject Interesting For Your Child
                    </p>
                    <p className="blog-date">19 October 2018</p>
                  </div>
                </div>

                <div className="Blog">
                  <img
                    src="/images/2.png"
                    width="100%"
                    alt="img"
                    className="bloglist-image"
                  />
                  <div className="blog-detail-text3  blogbtnn left-blog">
                    <span> Science </span>
                    <span> Engineering and Technology </span>
                    <span> Management </span>
                    <p className="blogtitileside bmt-16">
                      3 Steps To Make A Subject Interesting For Your Child
                    </p>
                    <p className="blog-date">19 October 2018</p>
                  </div>
                </div> */}

                <div className="blog-sidebar deatil-sidebar">
                  <ul>
                    {blogcategory}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default withRouter(BlogDetails);
