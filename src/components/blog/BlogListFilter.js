import React from 'react';
import SelectFilterWithoutSearch from '../common/SelectFilterWithoutSearch';

class BlogListFilter extends React.Component {
  
  render() {
    return (
      <>
      <div className="leftsidebar hide-on-mobile">
         <div className="row tlpanel">
          <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span></h6>
          <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
            <span>Clear All</span>
          </p>
        </div>
        <SelectFilterWithoutSearch { ...this.props } type="category" title="Category"/> <hr />
      </div>

      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body-filter">
                  

                  <div className="leftsidebar ">
                     <div className="row tlpanel">
                      <h6 className="col-md-6 align-items-start filtertxt"><span>Filters</span> 
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button></h6>
                      <p className="col-md-6 text-right clrall" onClick={this.props.onClearFilter}>
                        <span>Clear All</span>
                      </p>
                    </div>
                    <SelectFilterWithoutSearch { ...this.props } type="category" title="Category"/> <hr />
                    </div>
                </div>
              </div>
            </div>
      </div>
      </>
    );
  }
}
export default BlogListFilter;