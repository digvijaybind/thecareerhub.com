import React from 'react';
import queryString from "query-string"
import PageHeading from '../../components/common/PageHeading';
import CourseListFilter from '../../components/course/CourseListFilter';
import CourseListDetail from '../../components/course/CourseListDetail';
import CourseAPI from '../../api/CourseAPI';
import Loader from '../../components/common/Loader';
import ModelAPI from '../../api/ModelAPI';
import { withRouter } from 'next/router';
import Constants from '../../util/Constants.js';
import HtmlHeader from '../../components/common/HtmlHeader';

class CourseList extends React.Component {

  constructor(props) {
    super(props);
    this.model = null;
    this.courses = null;
    this.filter = { status : 1 };
    this.order_by = 1;
    this.limit = Constants.LIMIT

    this.state = { filters: [], search: "", inApiCall: true};
  }

  componentDidMount() { ModelAPI.getCourseModel(this.onModel, this.props.failure, this.props.logout); }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.filter = { status : 1};
    // let cat = {};s
    ModelAPI.getCourseModel(this.onModel, this.props.failure, this.props.logout);
    this.loadCourseList();
  }

  loadCourseList = () => {
    const page = { filter: this.filter, order_by: this.order_by, offset: 0, limit: this.limit };
    CourseAPI.list(page, this.onRecieved, this.props.failure, this.props.logout);
  }

  onModel = res => {
    this.model = res.course;

    this.setState({...this.state, filters:[]});
    const searchParam = queryString.parse(window.location.search);
    if(searchParam && searchParam.category) {
      const cat = this.model && this.model.category.find(item => item.name == searchParam.category );
      if(cat)
      {
        this.addFilter(cat);
        this.filter.category = [cat.id];
      }
        
    }

    if(searchParam && searchParam.course_level)
    {
      const levl = this.model.course_level.find(item => item.id == searchParam.course_level );
      if(levl)
      this.addFilter(levl);
      
      this.filter.course_level = [parseInt(searchParam.course_level)]
    }

    
    if(searchParam && searchParam.jobid)
    {
      this.filter.jobid = parseInt(searchParam.jobid);
    }

    if(searchParam && searchParam.studyMode) {
      const stdmode = this.model.study_mode.find(item => item.id == searchParam.studyMode );
      if(stdmode)
      this.addFilter(stdmode);
      
      this.filter.study_mode = [parseInt(searchParam.studyMode)];
    }

    if(searchParam && searchParam.fees) {
      this.filter.course_fees = {};
      const maxfees = parseInt(searchParam.fees);
      const minfees = 0;
      this.filter.course_fees.max = maxfees;
      this.filter.course_fees.min = minfees;
    }

    this.loadCourseList();

  }

  onRecieved = res => {
    this.courses = res.data;
    this.courseCount = res.count;
    this.apiCallStatus();
  }

  apiCallStatus = () => {
    if(this.courses && this.model)
      this.setState({ ...this.state, inApiCall: false });
    else
      this.setState({ ...this.state, inApiCall: true });
  }

  clearFilter = () => {
    this.filter = { };
    this.setState({ ...this.state, filters: [], search: "", inApiCall: true})
    this.loadCourseList();
  };

  addFilter = filter => {
    if(!this.filter[filter.type]) {
      this.filter[filter.type] = [ ];
    }
    this.filter[filter.type].push(filter.id);
    let filters = [...this.state.filters];
    filters.push(filter);
    filters = filters.filter((e, i) => filters.findIndex(a => a.id === e.id) === i);
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadCourseList();
  }
  removeFilter = filter => {
    this.filter[filter.type] = this.filter[filter.type].filter(item => item !== filter.id);
    
    let filters = [ ...this.state.filters ];
    filters = filters.filter(item => item.type !== filter.type || item.id !== filter.id);
    this.setState({ ...this.state, inApiCall: false, filters });
    this.loadCourseList();
  }
  
  rangeFilter = (type, min, max) => {
    this.filter[type] = this.model[type].min !== min || this.model[type].max !== max ? { min, max} : undefined;
    this.setState({ ...this.state, inApiCall: false });
    this.loadCourseList();
  }

  onSearchValueChange = (field, value) => {
    this.limit = Constant.LIMIT;
    this.filter[field] = value.length > 0 ? [ value ] : undefined;
    this.setState({ ...this.state, inApiCall: false, search: value });
    this.loadCourseList();
  }

  onSortChange = (value) => {
    this.order_by = value ? value : 1;
    this.loadCourseList();
  }

  loadmore = () => {
    this.limit = this.limit + Constants.LIMIT;
    this.loadCourseList();
  }

  render() {
    if(this.state.inApiCall) return(<Loader />);
    return (
      <>
      <HtmlHeader title={"Courses - The Career Hub"} description={"Courses - The Career Hub"} />

        <PageHeading headingmain="Find your Courses" />
          
        <div className="section3">
          <div className="container-fluid padding-left-right">
            <div className="row ">
              <div className="col-md-3 mrtp16">
                <CourseListFilter model={this.model} filters={this.state.filters}
                  onAddFilter={this.addFilter} onRemoveFilter={this.removeFilter}
                  rangeFilter={this.rangeFilter} onClearFilter={this.clearFilter} page="course"/>
              </div>
              <div className="col-md-9">
                <CourseListDetail filters={this.state.filters} onRemoveFilter={this.removeFilter}
                  data={this.courses} inApiCall={this.state.inApiCall} count={this.courseCount}
                  search={this.state.search} onSearchChange={this.onSearchValueChange} model={this.model}
                  onSortChange = {this.onSortChange} loadmore ={this.loadmore}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(CourseList);
