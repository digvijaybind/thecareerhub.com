import React from "react";

class SelectFilterWithSearch extends React.Component {
  constructor(props) {
    super(props);
    const data = props.model && props.type && props.model[props.type] ? props.model[props.type] : [];
    data.map(item => item.type = props.type);
    this.state = { data, search: "" };
  }

  onSearch = (event) =>
    this.setState({ ...this.state, search: event.target.value });

  onCheck = (id, checked) => {
    const category = this.state.data.find((category) => category.id === id);
    if (checked) {
      this.props.onAddFilter(category);
    } else {
      this.props.onRemoveFilter(category);
    }
  };

  categories = (categories) => {
    return categories.map((category, i) => {
      const checked = this.props.filters.find(
        (filter) => filter.type === this.props.type && filter.id === category.id
      );
      return (
        <div key={`filter_category_${i}`} className="form-check">
          {checked && (
            <>
            <input
              id={category.name +'_'+ i}
              className="form-check-input"
              type="checkbox"
              checked
              onChange={(event) =>
                this.onCheck(category.id, event.target.checked)
              }
            />
            <span class="checkmark"></span>
            </> 
          )}
          {!checked && (
            <>
            <input
              id={category.name +'_'+ i}
              className="form-check-input"
              type="checkbox"
              onChange={(event) =>
                this.onCheck(category.id, event.target.checked)
              }
            />
            <span class="checkmark"></span>
            </>
          )}
          <label className={ checked ? 'form-check-label activefilter' : 'form-check-label'} 
            htmlFor={category.name +'_'+ i}>{this.props.type && this.props.type =='cities' ? category.name.toUpperCase() : category.name}&nbsp;
            ({this.filtercount(category)})</label>
        </div>
      );
    });
  };

  filtercount = (cat) => {
    if(this.props.page && this.props.page === 'career'){return cat.career}
    if(this.props.page && this.props.page === 'course'){return cat.course}
    if(this.props.page && this.props.page === 'college'){return cat.college}
    if(this.props.page && this.props.page === 'industry'){return cat.industry}
    if(this.props.page && this.props.page === 'exam'){return cat.exam}
    if(this.props.page && this.props.page === 'blog'){return cat.blog}
  }

  render() {
    const search = this.state.search.toLowerCase();
    const filerCategories = this.state.data.filter((filter) =>
      filter.name.toLowerCase().includes(search)
    );
    const categories = this.categories(filerCategories);
    return (
      <div className="row pt-12">
        <div className="col-md-12">
          <div className="accordion">
            <div className="card">
              <div
                className="card-header"
                data-toggle="collapse"
                data-target={`#collapse_${this.props.type}`}
                aria-expanded="true"
              >
                <span className="title">{this.props.title} </span>
                <span className="accicon">
                  <i className="fa fa-angle-down rotate-icon"></i>
                </span>
              </div>
              <div id={`collapse_${this.props.type}`} className="collapse show">
                <div className="search-left">
                  <form className="d-flex">
                    <span className="input-group-append">
                      <button className="btn bg-bg">
                        {" "}
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                    <input
                      className="form-control search2"
                      type="search"
                      value={this.state.search}
                      placeholder={`Search for ${this.props.title}`}
                      onChange={this.onSearch}
                    />
                  </form>
                </div>
                <div className="detail-accordian">
                  <div className="cate-sec">
                    <div className="checkbox-sec">{categories}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SelectFilterWithSearch;
