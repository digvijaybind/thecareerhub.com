import React from "react";
import Link from "next/link";
import Const from "../../util/Constants";

class Banner extends React.Component {
  render() {
   const myStyle={
        backgroundImage: "url(./images/banner.png)",
        backgroundColor: '#013388',
        backgroundRepeat: 'no-repeat',
    };
    const testlink = Const.testlink;
    return (
      <>
      <div className="section2 afternavsec">
         <div className="container-fluid banner-sec" style={myStyle} >
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-mask">
                     <h5>Take the world’s most advanced </h5>
                     <h1 className="bntitle">Interest Aptitude Test</h1> 
                     <p>Using advanced machine learning, psychometrics, and career satisfaction data, we’ve reimagined what a career test can be</p>
                     <div className="row pt-4 pb-3">
                        <div className="col-md-12 secg">
                            <div className="banner-mdtxt growth2">
                              <span>4 Min</span>
                              <div className="banner-small"><img src="images/duration.png" alt="img" /> Time Taken </div>
                            </div>
                            <div className="banner-mdtxt growth2">
                              <span>2 Min</span>
                              <div className="banner-small"><img src="images/duration.png" alt="img" /> Report Generated </div>
                            </div>
                            <div className="banner-mdtxt">
                              <span>1500+</span>
                              <div className="banner-small"><img src="images/duration.png" alt="img" /> Course & Colleges </div>
                            </div>
                        </div>
                     </div>
                     <Link target="_blank"  href={testlink}>
                        <button type="button" className="btn btn-take-test">Take a free test now</button>
                      </Link>
                  </div>
              </div>
           </div>
        </div>
     </div>
      </>
    );
  }
}
export default Banner;
