import React from "react";
import WhichTab from './WhichTab';


class SearchModel extends React.Component {
  stayInfocuss = () =>{
    this.props.onDivClick();
  }
  render() {
    return (
      <>
        <div className="search-div" onClick={this.stayInfocuss} >
              <div className="container-fluid">
                  <div className="row ">
                      <div className="col-md-12">
                          <div className="">
                              <WhichTab {...this.props} />
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </>
    );
  }
}
export default SearchModel;
