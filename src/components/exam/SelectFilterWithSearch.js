import React from 'react';

class SelectFilterWithSearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { data: [
        { id: 1, name: 'Academics & Research (121)', type: 'category' },
        { id: 2, name: 'Aviation (39)', type: 'category' },
        { id: 3, name: 'Civil Services (21)', type: 'category' },
        { id: 4, name: 'Computer & IT (45)', type: 'category' },
        { id: 5, name: 'Earth & Space Science (12)', type: 'category' },
        { id: 6, name: 'Finance and Accounts (12)', type: 'category' },
        { id: 7, name: 'Hospitality (12)', type: 'category' }
      ], search: ""
    };
  }

  onSearch = event => this.setState({ ...this.state, search: event.target.value });

  onCheck = (id, checked) => {
    const category = this.state.data.find(category => category.id === id);
    if(checked) {
      this.props.onAddFilter(category);
    } else {
      this.props.onRemoveFilter(category);
    }
  }

  categories = categories => {
    return categories.map((category, i) => {
      const checked = this.props.filters.find(filter => filter.type === 'category'
        && filter.id === category.id);
      return <div key={`filter_category_${i}`} className="form-check">
        { checked &&
          <input className="form-check-input" type="checkbox" checked 
            onChange={ event => this.onCheck(category.id, event.target.checked) } />
        }
        { !checked &&
          <input className="form-check-input" type="checkbox"
            onChange={ event => this.onCheck(category.id, event.target.checked) } />
        }
        <label className="form-check-label">{category.name}</label>
      </div>
    });
  }

  render() {
    const search = this.state.search.toLowerCase();
    const filerCategories = this.state.data.filter(filter => filter.name.toLowerCase().includes(search));
    const categories = this.categories(filerCategories);
    return (
      <div className="row pt-12">
        <div className="col-md-12">
          <div className="accordion">
            <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true">     
                  <span className="title">CATEGORIES </span>
                  <span className="accicon"><i className="fa fa-angle-down rotate-icon"></i></span>
                </div>
                <div id="collapsetwo" className="collapse show">
                  <div className="search-left">
                    <form className="d-flex">
                      <span className="input-group-append">
                        <button className="btn bg-bg"> <i className="fa fa-search"></i></button>
                      </span>
                      <input className="form-control search2" type="search" value={this.state.search}
                        placeholder="Search for Categories" onChange={this.onSearch}/>        
                    </form>
                  </div>
                  <div className="detail-accordian">
                      <div className="cate-sec">
                        <div className="checkbox-sec">
                          {categories}
                        </div>
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