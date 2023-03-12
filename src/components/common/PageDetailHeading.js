import React from "react";
import Util from "../../util/Util";

class PageDetailHeading extends React.Component {
  render() {
    // let category = Util.multiLabel(this.props.model, 'category', this.props.data);
    // category = category && <div className="badge job-tags"><span>{category}</span></div>;
    // const category = null;
    // const model = this.props.model;
    // if(this.props.course)
    // {
    //    category = this.props.course.course_category_ids && Util.multiLabel(model, 'category', this.props.course.course_category_ids);
    // }
    const model = this.props.model;
    let data = {};
    let cat = [];
    if (this.props.course) {
      data = this.props.course;
      cat = data.course_category_ids;
    }
    if (this.props.career) {
      data = this.props.career;
      cat = data.career_categories;
    }
    if (this.props.exam) {
      data = this.props.exam;
      cat = data.exam_category;
    }
    if (this.props.industry) {
      data = this.props.industry;
      cat = data.categories;
    }
    let category = cat && Util.multiLabel(model, "category", cat);

    if (this.props.industry) {
      category = category.split(",").map(function (cat, i) {
        return <span key={i}>{cat}</span>;
      });
    }

    return (
      <>
        <div className="section2 detail-afternavsec">
          <div className="container blbg2">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9 text-left">
                <div className="Mask">
                  <h1 className="bntitle">{this.props.title}</h1>
                  <div className="badge job-tags">
                    {category}
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
export default PageDetailHeading;
