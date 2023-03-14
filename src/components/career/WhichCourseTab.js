import Link from "next/link";
import React from "react";


class WhichCourseTab extends React.Component {
  render() {
    return (
      <>
      <nav className="project-tab">
        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
        <a className="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="nav-home" aria-selected="false">Diploma</a>

<a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="nav-profile" aria-selected="true">Degree</a>

<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="nav-contact" aria-selected="false">Master</a>

<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="nav-contact" aria-selected="false">Doctorate</a>

<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#tab5" role="tab" aria-controls="nav-contact" aria-selected="false">Others </a>
        </div>
    </nav>
    </>
    );
  }
}
export default WhichCourseTab;