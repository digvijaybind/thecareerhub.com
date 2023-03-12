import React from "react";
import { withRouter } from "next/router";
import queryString from "query-string";
import PageHeading from "../../components/common/PageHeading";
import CollegeListFilter from "../../components/college/CollegeListFilter";
import CollegeListDetail from "../../components/college/CollegeListDetail";
import CollegeAPI from "../../api/CollegeAPI";
import Constants from "../../util/Constants";
import Loader from "../../components/common/Loader";
import ModelAPI from "../../api/ModelAPI";
import HtmlHeader from "../../components/common/HtmlHeader";
class CollegeList extends React.Component {
  constructor(props) {
    super(props);
    // this.model = this.props.model;
    this.model = null;
    this.courses = null;
    this.filter = { status: 1 };
    this.order_by = 1;
    this.limit = Constants.LIMIT;

    this.state = { filters: [], search: "", inApiCall: true };
  }

  componentDidMount() {
    ModelAPI.getCollegeModel(
      this.onModel,
      this.props.failure,
      this.props.logout
    );
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.filter = { status: 1 };
    ModelAPI.getCourseModel(
      this.onModel,
      this.props.failure,
      this.props.logout
    );
    this.loadCollegeList();
  }

  loadCollegeList = () => {
    const page = {
      filter: this.filter,
      order_by: this.order_by,
      offset: 0,
      limit: this.limit,
    };
    CollegeAPI.list(
      page,
      this.onRecieved,
      this.props.failure,
      this.props.logout
    );
  };

  onModel = (res) => {
    this.model = res.college;
    this.setState({ ...this.state, filters: [] });
    const searchParam = queryString.parse(window.location.search);
    if (searchParam && searchParam.category) {
      const cat =
        this.model &&
        this.model?.category.find((item) => item.id === searchParam.category);
      if (cat) this.addFilter(cat);

      this.filter.category = [parseInt(searchParam.category)];
    }

    if (searchParam && searchParam.studyMode) {
      const studyMode =
        this.model &&
        this.model?.study_mode.find(
          (item) => item.name === searchParam.studyMode
        );
      if (studyMode) {
        this.filter.study_mode = [studyMode.name];
        this.addFilter(studyMode);
      }
    }

    if (searchParam && searchParam.states) {
      const states = this.model?.states.find(
        (item) => item.name === searchParam.states
      );
      if (states) {
        this.filter.states = [states.id];
        this.addFilter(states);
      }
    }

    if(searchParam && searchParam.jobid)
    {
      this.filter.jobid = parseInt(searchParam.jobid);
    }

    if (searchParam && searchParam.cities) {
      const cities = this.model?.cities.find(
        (item) => item.name === searchParam.cities
      );
      if (cities) {
        this.filter.cities = [cities.id];
        this.addFilter(cities);
      }
    }

    if (searchParam && searchParam.course_level) {
      const levl = this.model?.course_level.find(
        (item) => item.id === searchParam.course_level
      );
      if (levl) this.addFilter(levl);

      this.filter.course_level = [parseInt(searchParam.course_level)];
    }

    this.loadCollegeList();
  };

  onRecieved = (res) => {
    this.courses = res.data;
    this.courseCount = res.count;
    this.apiCallStatus();
  };

  apiCallStatus = () => {
    if (this.courses && this.model)
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  clearFilter = () => {
    this.filter = {};
    this.setState({ ...this.state, filters: [], search: "", inApiCall: false });
    this.loadCollegeList();
  };

  addFilter = (filter) => {
    if (!this.filter[filter.type]) {
      this.filter[filter.type] = [];
    }
    if (filter.type === "duration") this.filter[filter.type].push(filter.name);
    else this.filter[filter.type].push(filter.id);
    const filters = [...this.state.filters];
    filters.push(filter);
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadCollegeList();
  };
  removeFilter = (filter) => {
    if (filter.type === "duration") {
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
    // console.log(this.model[type], min, max);
    this.filter[type] =
      this.model[type].min !== min || this.model[type].max !== max
        ? { min, max }
        : undefined;
    this.setState({ ...this.state, inApiCall: false });
    this.loadCollegeList();
  };

  onSearchValueChange = (field, value) => {
    this.filter[field] = value.length > 0 ? [value] : undefined;
    this.setState({ ...this.state, inApiCall: false, search: value });
    this.loadCollegeList();
  };

  onSortChange = (value) => {
    this.order_by = value ? value : 1;
    this.loadCollegeList();
  };

  loadmore = () => {
    this.limit = this.limit + Constants.LIMIT;
    this.loadCollegeList();
  };

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
      <HtmlHeader title={"Colleges - The Career Hub"} description={"Colleges - The Career Hub"} />

        <PageHeading headingmain="Find your College" />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 mrtp16">
                <CollegeListFilter
                  model={this.model}
                  filters={this.state.filters}
                  onAddFilter={this.addFilter}
                  onRemoveFilter={this.removeFilter}
                  rangeFilter={this.rangeFilter}
                  onClearFilter={this.clearFilter}
                  page="college"
                />
              </div>
              <div className="col-md-9">
                <CollegeListDetail
                  filters={this.state.filters}
                  onRemoveFilter={this.removeFilter}
                  data={this.courses}
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
