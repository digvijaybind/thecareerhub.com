import Link from "next/link";
import React from "react";

class Pathways extends React.Component {
  render() {
    const course = this.props.courseLevel;
    const paths = this.props.career.pathway?.map((path,i) => 
      <div className={i!==0? "tab-pane fade" : "tab-pane fade show active"} id={"pathtab"+i} key={i}>
        <div className="row" >
          <div className="col-md-12">
            <div className="pathway-container">
              <div className="swiper-wrapper timeline">
                <div className="swiper-slide">
                  <div className="timestamp">
                    <span className="date">10th </span>
                  </div>
                  <div className="status">
                    <span>
                      <p>SSC </p>
                    </span>
                  </div>
                </div>
                <div className="swiper-slide swiper-slide">
                  <div className="timestamp">
                    <span className="date">12th </span>
                  </div>
                  <div className="status">
                    <span>
                      <p> </p>
                    </span>
                  </div>
                </div>
                {Object.values(path).filter(item => typeof item !== "string")?.map((step,j, {length}) =>
                  <div className="swiper-slide swiper-slide3" key={j}>
                    <div className="timestamp">
                      <span className="date">{course.find(item => item.id === parseInt(step.level))? course.find(item => item.id === parseInt(step.level))['name']: "Degree"}</span>
                    </div>
                    <div className={j===length-1 ? "status statusend" : "status"} >
                      <span>
                        <ul>
                          <li>{step["course"]}</li>
                        </ul>
                      </span>
                    </div>
                  </div>
                ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const pathstab = this.props.career.pathway?.map((path,i) => 
    <>
    <Link target="_blank" className={i!==0? "nav-item nav-link" : "nav-item nav-link show active" } id="nav-home-tab" data-toggle="tab" href={"#pathtab"+i} role="tab" aria-controls="nav-home" aria-selected="true">Pathway-{i+1}</Link>
    </>
    );
              

    return (
      <>
        <div className="row" id="pathways">
          <div className="col-md-12">
            <div className="content-box">
              <p className="orangetxt">Pathways</p>
              <h4>
                How to{" "}
                <span className="boldtxt">
                  {" "}
                  become an {this.props.career.name}?
                </span>
              </h4>
              <div id="app" className="container">
              <nav className="project-tab">
                  <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                  {pathstab && pathstab.length !== 0 ? pathstab : "No Records Found"}
                  </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                {paths && paths.length !== 0 ? paths : "No Records Found"}
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Pathways;
