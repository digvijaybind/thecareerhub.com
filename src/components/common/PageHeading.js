import React from "react";


class PageHeading extends React.Component {
  render() {
    return (
      <>
      <div className="section2 afternavsec">
         <div className="container-fluid blbg2">
            <div className="row">
               <div className="col-md-12 text-center">
                  <div className="Mask">
                        <h1 className="bntitle">{this.props.headingmain}</h1> 
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
    );
  }
}
export default PageHeading;
