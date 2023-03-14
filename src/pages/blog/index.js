import React from "react";
import BlogPageHeading from "../../components/common/BlogPageHeading";
import ModelAPI from "../../api/ModelAPI";
import BlogAPI from "../../api/BlogAPI";
import Loader from "../../components/common/Loader";
import dateFormat from "dateformat";
import Util from "../../util/Util";
import Const from "../../util/Constants";
import BlogListItem from '../../components/blog/BlogListItem';
import Link from "next/link";
import HtmlHeader from "../../components/common/HtmlHeader";
import config from "../../config/config";
class BlogList extends React.Component {
  constructor(props) {
    super(props);
    const {data}=props;
    // this.model = this.props.model;
    this.model = null;
    this.blog = data.data || [];
    this.recent=data.recentlyadded || [];
    this.popularblog =data.mostpopular?.data || [];
    this.filter = { status: 1 };
    this.PopularFilter =  { status: 1, "for": "blog_" }
    this.order_by = 1;
    this.state = { filters: [], search: "", inApiCall: true };
    debugger
  }

  componentDidMount() {
    this.loadBlogList();
  }

  loadBlogList = () => {
    const page = {
      filter: this.filter,
      popularfilter:this.PopularFilter,
      order_by: this.order_by,
      offset: 0,
      limit: 10,
    };
    BlogAPI.list(page, this.onRecieved, this.props.failure, this.props.logout);
    ModelAPI.getBlogModel(this.onModel, this.props.failure, this.props.logout);
  };

  onModel = (res) => {
    this.model = res.blog;
    this.apiCallStatus();
  };

  onRecieved = (res) => {
    this.blog = res.data;
    this.recent = res.recentlyadded;
    this.popularblog = res.mostpopular.data;
    this.blogCount = res.count;
    this.apiCallStatus();
    // this.setState({...this.state, inApiCall: false});
  };

  apiCallStatus = () => {
    if (this.blog && this.blogCount && this.model)
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  clearFilter = () => {
    this.filter = {};
    this.setState({ ...this.state, filters: [], search: "", inApiCall: true });
    this.loadBlogList();
  };

  addFilter = (filter) => {
    if (!this.filter[filter.type]) {
      this.filter[filter.type] = [];
    }
    this.filter[filter.type].push(filter.id);
    const filters = [...this.state.filters];
    filters.push(filter);
    this.setState({ ...this.state, inApiCall: true, filters });
    this.loadBlogList();
  };
  removeFilter = (filter) => {
    this.filter[filter.type] = this.filter[filter.type].filter(
      (item) => item !== filter.id
    );
    let filters = [...this.state.filters];
    filters = filters.filter(
      (item) => item.type !== filter.type || item.id !== filter.id
    );
    this.setState({ ...this.state, inApiCall: true, filters });
    this.loadBlogList();
  };

  rangeFilter = (type, min, max) => {
    // console.log(this.model[type], min, max);
    this.filter[type] =
      this.model[type].min !== min || this.model[type].max !== max
        ? { min, max }
        : undefined;
    this.setState({ ...this.state, inApiCall: true });
    this.loadBlogList();
  };

  onSearchValueChange = (field, value) => {
    this.filter[field] = value.length > 0 ? [value] : undefined;
    this.setState({ ...this.state, inApiCall: true, search: value });
    this.loadBlogList();
  };

  onSortChange = (value) => {
    this.order_by = value ? value : 1;
    this.loadBlogList();
  };

  render() {
    const url = Const.backendLink;
    if (this.props.router?.isFallback) return <Loader />;
    const blogitem = this.blog && this.blog.map((item,i) => 
      <BlogListItem key={i} blog={item} model = {this.model} />);
    const blogcategory = this.model?.category?.map((item,i) => <li key={i}>{item.name}({item.blog ? item.blog :0})</li>);
    return (
      <>
      <HtmlHeader title={"Blogs - The Career Hub"} description={"Blogs - The Career Hub"} />
      <BlogPageHeading
        headingmain="Blogs"
        subheading="Discover about a variety of topics related to careers, courses and industries and get useful in-depth information"
      />
      <div className="section3">
        <div className="container-fluid padding-left-right pb-5">
          <div className="row">
            <div className="col-md-12">
              <h3 className="blog-heading">Most Popular</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
            <Link target="_blank" href={"/blog/"+this.popularblog[0].sef_url}>
              <div className="bloglist">
                <img
                  src={this.popularblog[0].banner_image ? url+this.popularblog[0].banner_image : `${"/images/2.png"}`}
                  width="100%"
                  alt="img"
                  className="bloglist-image"
                />
                <div className="blog-list-text">
                  <span>
                  {this.model && Util.multiLabel(this.model, 'category', this.popularblog[0].category)}
                  </span>
                  <p className="blogtitle">
                    {this.popularblog[0].title}
                  </p>
                  <p className="blog-date">{this.popularblog &&
                  dateFormat(`${this.popularblog[0].date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link target="_blank" href={"/blog/"+this.popularblog[1].sef_url}>
              <div className="blogrelated">
                <img
                  src={this.popularblog[1].banner_image ? url+this.popularblog[1].banner_image : `${"/images/2.png"}`}
                  width="100%"
                  alt="img"
                  className="bloglist-image"
                />
                <div className="blog-list-one">
                  <span> 
                  {this.model && Util.multiLabel(this.model, 'category', this.popularblog[1].category)}
                  </span>
                  <p className="blogtitle">
                  {this.popularblog[1].title}
                  </p>
                  <p className="blog-date">{this.popularblog &&
                  dateFormat(`${this.popularblog[1].date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
            </Link>
            <Link target="_blank" href={"/blog/"+this.popularblog[2].sef_url}>
              <div className="blogrelated">
                <img
                  src={this.popularblog[2].banner_image ? url+this.popularblog[2].banner_image : `${"/images/2.png"}`}
                  width="100%"
                  alt="img"
                  className="bloglist-image"
                />
                <div className="blog-list-one">
                  <span> 
                  {this.model && Util.multiLabel(this.model, 'category', this.popularblog[2].category)}
                  </span>
                  <p className="blogtitle">
                    {this.popularblog[2].title}
                  </p>
                  <p className="blog-date">{this.popularblog &&
                  dateFormat(`${this.popularblog[2].date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid padding-left-right pb-5">
          <div className="row">
            <div className="col-md-12">
              <h3 className="blog-heading2">Recently Added</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            <Link target="_blank" href={"/blog/"+this.recent[0].sef_url}>
              <div className="blogrelated">
              <img
                  src={this.recent[0].banner_image ? url+this.recent[0].banner_image : `${"/images/2.png"}`}
                  width="100%"
                  alt="img"
                  className="bloglist-image"
                />
                <div className="blog-list-one">
                  <span> 
                  {this.model && Util.multiLabel(this.model, 'category', this.recent[0].category)}
                  </span>
                  <p className="blogtitle">
                    {this.recent[0].title}
                  </p>
                  <p className="blog-date">{this.recent &&
                  dateFormat(`${this.recent[0].date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link target="_blank" href={"/blog/"+this.recent[1].sef_url}>
              <div className="blogrelated">
              <img
                  src={this.recent[1].banner_image ? url+this.recent[1].banner_image : `${"/images/2.png"}`}
                  width="100%"
                  alt="img"
                  className="bloglist-image"
                />
                <div className="blog-list-one">
                  <span> 
                  {this.model && Util.multiLabel(this.model, 'category', this.recent[1].category)}
                  </span>
                  <p className="blogtitle">
                    {this.recent[1].title}
                  </p>
                  <p className="blog-date">{this.recent &&
                  dateFormat(`${this.recent[1].date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-4">
            <Link target="_blank" href={"/blog/"+this.recent[2].sef_url}>
              <div className="blogrelated">
              <img
                  src={this.recent[2].banner_image ? url+this.recent[2].banner_image : `${"/images/2.png"}`}
                  width="100%"
                  alt="img"
                  className="bloglist-image"
                />
                <div className="blog-list-one">
                  <span> 
                  {this.model && Util.multiLabel(this.model, 'category', this.recent[2].category)}
                  </span>
                  <p className="blogtitle">
                    {this.recent[2].title}
                  </p>
                  <p className="blog-date">{this.recent &&
                  dateFormat(`${this.recent[2].date}`, " dS mmmm, yyyy")}</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid padding-left-right pb-5">
          <div className="row">
            <div className="col-md-12">
              <h3 className="blog-heading2">Blogs and Articles</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="blog-sidebar">
                <ul>
                  {blogcategory}
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="row ">
                {blogitem}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}
export default BlogList;
export async function getStaticProps(context) {
  const page = {
    filter: { status: 1 },
    limit: 10,
    offset: 0,
    order_by: 1,
    popularfilter: { status: 1, for: "blog_" },
  };
  const response = await fetch(config.link + "blog/list", {
    method: "POST",
    headers:config.Api_headers,
    body: JSON.stringify(page),
  });
  const data = await response.json();

  console.log(`Res`,data);

  return {
    props: {
      data: data,
    },
  };
}