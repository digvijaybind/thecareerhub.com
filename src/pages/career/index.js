import React from "react";
import { withRouter } from "next/router";
import queryString from "query-string";
import PageHeading from "../../components/common/PageHeading";
import CareerListFilter from "../../components/career/CareerListFilter";
import CareerListDetail from "../../components/career/CareerListDetail";
import Constant from "../../util/Constants.js";
import CareerAPI from "../../api/CareerAPI";
import Loader from "../../components/common/Loader";
import ModelAPI from "../../api/ModelAPI";
import HtmlHeader from "../../components/common/HtmlHeader";

class CollegeList extends React.Component {
  constructor(props) {
    super(props);
    this.filter = { status: 1 };
    //this.model = this.props.model;
    this.model = null;
    this.career = null;
    this.order_by = 1;
    this.limit = Constant.LIMIT;

    this.state = { filters: [], search: "", inApiCall: true };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.model = nextProps.model;
    this.filter = { status: 1 };
    ModelAPI.getCareerModel(
      this.onModel,
      this.props.failure,
      this.props.logout
    );
    this.loadCollegeList();
  }

  componentDidMount() {
    ModelAPI.getCareerModel(
      this.onModel,
      this.props.failure,
      this.props.logout
    );
  }

  loadCollegeList = () => {
    const page = {
      filter: this.filter,
      order_by: this.order_by,
      offset: 0,
      limit: this.limit,
    };
    // console.log('here', page);
    CareerAPI.list(
      page,
      this.onRecieved,
      this.props.failure,
      this.props.logout
    );
  };

  onModel = (res) => {
    this.model = res.career;
    this.setState({ ...this.state, filters: [] });
    const searchParam = queryString.parse(window.location.search);
    if (searchParam && searchParam.category) {
      const cat = this.model.category.find(
        (item) => item.name == searchParam.category
      );
      if (cat) {
        this.addFilter(cat);
        this.filter.category = [cat.id];
      }
    }
    if (searchParam && searchParam.course_level) {
      const levl = this.model.course_level.find(
        (item) => item.id == searchParam.course_level
      );
      if (levl) this.addFilter(levl);
      this.filter.course_level = [parseInt(searchParam.course_level)];
    }

    if (searchParam && searchParam.stream) {
      const strms = this.model.streams.find(
        (item) => item.id == searchParam.stream
      );
      if (strms) this.addFilter(strms);

      this.filter.streams = [parseInt(searchParam.stream)];
    }

    if (searchParam && searchParam.fees) {
      this.filter.expenses = {};
      const maxfees = parseInt(searchParam.fees);
      const minfees = 0;
      this.filter.expenses.max = maxfees;
      this.filter.expenses.min = minfees;
    }

    if (searchParam && searchParam.salary) {
      this.filter.salary = {};
      const maxsalary = parseInt(searchParam.salary);
      const minsalary = 0;
      this.filter.salary.max = maxsalary;
      this.filter.salary.min = minsalary;
    }
    this.loadCollegeList();
  };

  onRecieved = (res) => {
    this.career = res.data;
    this.courseCount = res.count;
    this.apiCallStatus();
    // this.setState({...this.state, inApiCall: false});
  };

  apiCallStatus = () => {
    if (this.career && this.model)
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  clearFilter = () => {
    this.filter = {};
    this.limit = Constant.LIMIT;
    this.setState({ ...this.state, filters: [], search: "", inApiCall: true });
    this.loadCollegeList();
  };

  addFilter = (filter) => {
    this.limit = Constant.LIMIT;
    if (!this.filter[filter.type]) {
      this.filter[filter.type] = [];
    }
    if (filter.type === "duration" || filter.type === "college_type")
      this.filter[filter.type].push(filter.name);
    else {
      this.filter[filter.type].push(filter.id);
    }
    let filters = [...this.state.filters];

    filters.push(filter);
    filters = filters.filter((e, i) => filters.findIndex(a => a.id === e.id) === i);
    this.setState({ ...this.state, inApiCall: false, filters }, () =>
      this.loadCollegeList()
    );
  };
  removeFilter = (filter) => {
    this.limit = Constant.LIMIT;
    if (filter.type === "duration" || filter.type === "college_type") {
      this.filter[filter.type] = this.filter[filter.type].filter(
        (item) => item !== filter.name
      );
    } else {
      this.filter[filter.type] = this.filter[filter.type].filter(
        (item) => item !== filter.id
      );
    }
    let filters = [...this.state.filters];
    filters = filters.filter(
      (item) => item.type !== filter.type || item.id !== filter.id
    );
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadCollegeList();
  };

  rangeFilter = (type, min, max) => {
    this.limit = Constant.LIMIT;
    this.filter[type] =
      this.model[type].min !== min || this.model[type].max !== max
        ? { min, max }
        : undefined;
    this.setState({ ...this.state, inApiCall: false }, () => {
      this.loadCollegeList();
    });
  };

  onSearchValueChange = (field, value) => {
    this.limit = Constant.LIMIT;
    this.filter[field] = value.length > 0 ? [value] : undefined;
    this.setState({ ...this.state, inApiCall: false, search: value });
    this.loadCollegeList();
  };

  onSortChange = (value) => {
    this.order_by = value ? value : 1;
    this.loadCollegeList();
  };

  internshipfilter = (value) => {
    this.limit = Constant.LIMIT;
    this.filter.internship = value;
    this.loadCollegeList();
  };

  loadmore = () => {
    this.limit = this.limit + Constant.LIMIT;
    // this.setState({ ...this.state, inApiCall: false});
    this.loadCollegeList();
  };

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
        <HtmlHeader
          title={"Careers - The Career Hub"}
          description={"Careers - The Career Hub"}
        />

        <PageHeading headingmain="Find your Career" />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 mrtp16">
                <CareerListFilter
                  model={this.model}
                  filters={this.state.filters}
                  onAddFilter={this.addFilter}
                  onRemoveFilter={this.removeFilter}
                  rangeFilter={this.rangeFilter}
                  onClearFilter={this.clearFilter}
                  internshipfilter={this.internshipfilter}
                  page="career"
                />
              </div>
              <div className="col-md-9">
                <CareerListDetail
                  filters={this.state.filters}
                  onRemoveFilter={this.removeFilter}
                  data={this.career}
                  inApiCall={this.state.inApiCall}
                  count={this.courseCount}
                  search={this.state.search}
                  onSearchChange={this.onSearchValueChange}
                  model={this.model}
                  onSortChange={this.onSortChange}
                  loadmore={this.loadmore}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CollegeList);
