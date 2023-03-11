import React from "react";


class BlogPageHeading extends React.Component {
  render() {
    return (
      <>
      <div className="section2 afternavsec">
         <div className="container-fluid blbg2">
            <div className="row">
               <div className="col-md-12 text-center">
                   <div className="container">
                       <div className="row">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-10">
                                <div className="Mask">
                                    <h1 className="bntitle">{this.props.headingmain}</h1> 
                                    <h4>{this.props.subheading}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </>
    );
  }
}
export default BlogPageHeading;
