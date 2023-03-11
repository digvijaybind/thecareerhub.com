import React from "react";

import Chip from './FilterChip';
import SortBy from './SortBy';

class ListDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ShowSearch: false};
  }

  showSearchbar = () => {
    if(!this.state.ShowSearch){
      this.setState({...this.state,  ShowSearch: true});
    }
    else
    {
      this.setState({ ...this.state, ShowSearch: false});
    }
  }

  handleChange = value => {
    this.props.onValueChange('name', value);
  }

  render() {
    const chips = this.props.filters.map((filter, i) =>
      <Chip key={`chip_${i}`} filter={filter} onRemoveFilter={this.props.onRemoveFilter} /> );
        // console.log(this.props.title);
    return (
      <>
        <div className="row hide-on-mobile">
          <div className="col-md-5">
            <div className="search-right">
              <form className="d-flex">
                <span className="input-group-append">
                  <button className="btn bg-bg"><i className="fa fa-search"></i></button>
                </span>
                <input className="form-control search2" type="search"
                  placeholder={`Type for ${this.props.title}`} 
                  onChange={event => this.handleChange(event.target.value)}
                  value={this.props.search} name="name" 
                  onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }} />        
              </form>
            </div>
          </div>
          <div className="col-md-3 sort">sort by</div>
          <div className="col-md-4 p-0">
            <SortBy onSortChange={this.props.onSortChange}/>
          </div>
        </div>

        <div className="row desktop-hide  mobile-pt-pb">
          <div className="col-md-4">
            <span className="icon-filtter"><i className="fa fa-search" onClick={() => this.showSearchbar() }></i></span>
          </div>
          <div className="col-md-8">
            <span className="icon-filtter"><i className="fa fa-filter" data-toggle="modal"
              data-target="#exampleModalLong"></i></span>
            <SortBy onSortChange={this.props.onSortChange}/>
          </div>
          { this.state.ShowSearch &&
            <input className="mobilesearchbar" type="search"
                  placeholder={`Type for ${this.props.title}`} 
                  onChange={event => this.handleChange(event.target.value)}
                  value={this.props.search} name="name" />
            }
        </div>

        <div className="row">
          <div className="tags col-md-12">{chips}</div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p className="smalltxt">{this.props.title === 'Industry' ? "Industries" : this.props.title+"s"} found - <i>{this.props.count}</i></p>
          </div>
        </div>
      </>
    );
  }
}
export default ListDetail;