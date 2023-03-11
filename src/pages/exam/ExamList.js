import React from "react";
import HtmlHeader from "../components/common/HtmlHeader";
import Header from "../components/common/Header";
import PageHeading from "../components/common/PageHeading";
import ExamListFilter from "../components/exam/ExamListFilter";
import ExamListDetail from "../components/exam/ExamListDetail";
import ExamAPI from "../api/ExamAPI";
import Loader from "../components/common/Loader";
import ModelAPI from "../api/ModelAPI";
import Constants from '../util/Constants';


class ExamList extends React.Component {
  constructor(props) {
    super(props);
    // this.model = this.props.model;
    this.model = null;
    this.exam = null;
    this.filter = { status: 1 };
    this.order_by = 1;
    this.limit = Constants.LIMIT

    this.state = { filters: [], search: "", inApiCall: true };
  }

  componentDidMount() {
    this.loadExamList();
  }

  loadExamList = () => {
    const page = {
      filter: this.filter,
      order_by: this.order_by,
      offset: 0,
      limit: this.limit,
    };
    ExamAPI.list(page, this.onRecieved, this.props.failure, this.props.logout);
    ModelAPI.getExamModel(this.onModel, this.props.failure, this.props.logout);
  };

  onModel = (res) => {
    this.model = res.exam;
    this.apiCallStatus();
  };

  onRecieved = (res) => {
    this.exam = res.data;
    this.examCount = res.count;
    this.apiCallStatus();
    // this.setState({...this.state, inApiCall: false});
  };

  apiCallStatus = () => {
    if (this.exam && this.model)
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  clearFilter = () => {
    this.filter = {};
    this.setState({ ...this.state, filters: [], search: "", inApiCall: false });
    this.loadExamList();
  };

  addFilter = (filter) => {
    if (!this.filter[filter.type]) {
      this.filter[filter.type] = [];
    }
    this.filter[filter.type].push(filter.id);
    const filters = [...this.state.filters];
    filters.push(filter);
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadExamList();
  };

  removeFilter = (filter) => {
    this.filter[filter.type] = this.filter[filter.type].filter(
      (item) => item !== filter.id
    );
    let filters = [...this.state.filters];
    filters = filters.filter(
      (item) => item.type !== filter.type || item.id !== filter.id
    );
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadExamList();
  };

  rangeFilter = (type, min, max) => {
    this.filter[type] =
      this.model[type].min !== min || this.model[type].max !== max
        ? { min, max }
        : undefined;
    this.setState({ ...this.state, inApiCall: false });
    this.loadExamList();
  };

  onSearchValueChange = (field, value) => {
    this.filter[field] = value.length > 0 ? [value] : undefined;
    this.setState({ ...this.state, inApiCall: false, search: value });
    this.loadExamList();
  };

  onSortChange = (value) => {
    this.order_by = value ? value : 1;
    this.loadExamList();
  };

  loadmore = () => {
    this.limit = this.limit + Constants.LIMIT;
    this.loadExamList();
  }

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
        <HtmlHeader title="Exam" description="description" />
        <Header />
        <PageHeading headingmain="Find your Exams" />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 mrtp16 hide-on-mobile">
                <ExamListFilter
                  model={this.model}
                  filters={this.state.filters}
                  onAddFilter={this.addFilter}
                  onRemoveFilter={this.removeFilter}
                  rangeFilter={this.rangeFilter}
                  onClearFilter={this.clearFilter}
                  page="exam"
                />
              </div>
              <div className="col-md-9">
                <ExamListDetail
                  filters={this.state.filters}
                  onRemoveFilter={this.removeFilter}
                  data={this.exam}
                  inApiCall={this.state.inApiCall}
                  count={this.examCount}
                  search={this.state.search}
                  onSearchChange={this.onSearchValueChange}
                  model={this.model}
                  onSortChange={this.onSortChange}
                  loadmore ={this.loadmore}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ExamList;
