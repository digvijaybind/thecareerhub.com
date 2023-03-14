import React from "react";
import PageHeading from "../../components/common/PageHeading";
import IndustryListFilter from "../../components/industry/IndustryListFilter";
import IndustryListDetail from "../../components/industry/IndustryListDetail";
import ModelAPI from "../../api/ModelAPI";
import IndustryAPI from "../../api/IndustryApi";
import Loader from "../../components/common/Loader";
import Constants from "../../util/Constants";
import HtmlHeader from "../../components/common/HtmlHeader";
import config from "../../config/config";


class IndustryList extends React.Component {
  constructor(props) {
    super(props);
    // this.model = this.props.model;
    this.model = null;
    this.industry =props.data?.data || [];
    this.filter = { status: 1 };
    this.order_by = 1;
    this.limit = Constants.LIMIT;
    this.state = { filters: [], search: "", inApiCall: true };
  }

  componentDidMount() {
    this.loadIndustryList();
  }

  loadIndustryList = () => {
    const page = {
      filter: this.filter,
      order_by: this.order_by,
      offset: 0,
      limit: this.limit,
    };
    IndustryAPI.list(
      page,
      this.onRecieved,
      this.props.failure,
      this.props.logout
    );
    ModelAPI.getIndustryModel(
      this.onModel,
      this.props.failure,
      this.props.logout
    );
  };

  onModel = (res) => {
    this.model = res.industry;
    this.apiCallStatus();
  };

  onRecieved = (res) => {
    this.industry = res.data;
    this.industryCount = res.count;
    this.apiCallStatus();
    // this.setState({...this.state, inApiCall: false});
  };

  apiCallStatus = () => {
    if (this.industry && this.model)
      this.setState({ ...this.state, inApiCall: false });
    else this.setState({ ...this.state, inApiCall: true });
  };

  clearFilter = () => {
    this.filter = {};
    this.setState({ ...this.state, filters: [], search: "", inApiCall: true });
    this.loadIndustryList();
  };

  addFilter = (filter) => {
    if (!this.filter[filter.type]) {
      this.filter[filter.type] = [];
    }
    if (filter.type === "duration" || filter.type === "college_type")
      this.filter[filter.type].push(filter.name);
    else this.filter[filter.type].push(filter.id);
    let filters = [...this.state.filters];
    filters.push(filter);
    filters = filters.filter((e, i) => filters.findIndex(a => a.id === e.id) === i);
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadIndustryList();
  };
  removeFilter = (filter) => {
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
    this.loadIndustryList();
  };

  rangeFilter = (type, min, max) => {
    this.filter[type] =
      this.model[type].min !== min || this.model[type].max !== max
        ? { min, max }
        : undefined;
    this.setState({ ...this.state, inApiCall: false });
    this.loadIndustryList();
  };

  onSearchValueChange = (field, value) => {
    this.filter[field] = value.length > 0 ? [value] : undefined;
    this.setState({ ...this.state, inApiCall: false, search: value });
    this.loadIndustryList();
  };

  onSortChange = (value) => {
    this.order_by = value ? value : 1;
    this.loadIndustryList();
  };

  loadmore = () => {
    this.limit = this.limit + Constants.LIMIT;
    this.loadIndustryList();
  };

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
      <HtmlHeader title={"Industry Details - The Career Hub"} description={"Industry Details - The Career Hub"} />

        <PageHeading headingmain="Find your Industry" />

        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 mrtp16 hide-on-mobile">
                <IndustryListFilter
                  model={this.model}
                  filters={this.state.filters}
                  onAddFilter={this.addFilter}
                  onRemoveFilter={this.removeFilter}
                  rangeFilter={this.rangeFilter}
                  onClearFilter={this.clearFilter}
                  page="industry"
                />
              </div>
              <div className="col-md-9">
                <IndustryListDetail
                  filters={this.state.filters}
                  onRemoveFilter={this.removeFilter}
                  data={this.industry}
                  inApiCall={this.state.inApiCall}
                  count={this.industryCount}
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
export default IndustryList;
export async function getStaticProps(context) {

  const page = {
    filter: { status: 1 },
    order_by: 1,
    offset: 0,
    limit: Constants.LIMIT,
  };
  const response = await fetch(config.link +"industry/list", {
    method: "POST",
    headers:config.Api_headers,
    body: JSON.stringify(page),
  });
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}