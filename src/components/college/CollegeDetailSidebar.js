import React from "react";

class CourseDetailSidebar extends React.Component {
  render() {
    return (
      <div className="leftsidebar leftsidebarCollege ">
        <div className="row">
          <div className="col-md-12 moblistsec">
            <div className="CareerDetailSidebar list-group">
              <ul className="moblist">
                <Link target="_blank" 
                  href="#coursesoffered"
                  onClick={() => this.props.setActive("coursesoffered")}
                >
                  <li
                    className={
                      this.props.active === "coursesoffered" ? "active" : null
                    }
                  >
                    Courses Offered
                  </li>
                </Link>

                <Link target="_blank" 
                  href="#contact"
                  onClick={() => this.props.setActive("contact")}
                >
                  <li
                    className={
                      this.props.active === "contact" ? "active" : null
                    }
                  >
                    Contact Details
                  </li>
                </Link>

                <Link target="_blank" 
                  href="#similarcollege"
                  onClick={() => this.props.setActive("similarcollege")}
                >
                  <li
                    className={
                      this.props.active === "similarcollege" ? "active" : null
                    }
                  >
                    Similar Colleges
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CourseDetailSidebar;
