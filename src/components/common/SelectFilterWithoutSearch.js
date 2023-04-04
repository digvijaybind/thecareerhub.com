import React from 'react';

class SelectFilterWithoutSearch extends React.Component {
  
  constructor(props) {
    super(props);
    const data = props.model && props.type && props.model[props.type] ? props.model[props.type] : [];
    data.map(item => item.type = props.type);
    this.state = { data };
  }

  onCheck = (id, checked) => {
    const education = this.state.data.find(education => education.id === id);
    if(checked) {
      this.props.onAddFilter(education);
    } else {
      this.props.onRemoveFilter(education);
    }
  }

  categories = () => {
    return this.state.data.map((education, i) => {
      const checked = this.props.filters.find(filter => filter.type  === this.props.type
        && filter.id === education.id);
      return <div key={`filter_education_${i}`} className="form-check">
        { checked &&
        <>
          <input className="form-check-input" type="checkbox" checked id={education.name+'_'+i}
            onChange={ event => this.onCheck(education.id, event.target.checked) } />
            <span className="checkmark"></span>
            </>
        }
        { !checked &&
        <>
          <input className="form-check-input" type="checkbox" id={education.name+'_'+i}
            onChange={ event => this.onCheck(education.id, event.target.checked) } />
            <span className="checkmark"></span>
            </>
        }
        <label className={ checked ? 'form-check-label activefilter' : 'form-check-label'} 
        htmlFor={education.name+'_'+i}>{education.name}&nbsp;
          {/* {education.size ? `(${education.size})` : null} */}
          ({this.filtercount(education)})
        </label>
      </div>
    });
  }

  filtercount = (edu) => {
    if(this.props.page && this.props.page === 'career'){return edu.career} 
    if(this.props.page && this.props.page === 'course'){return edu.course}
    if(this.props.page && this.props.page === 'college'){return edu.college}
    if(this.props.page && this.props.page === 'industry'){return edu.industry}
    if(this.props.page && this.props.page === 'exam'){return edu.exam}
    if(this.props.page && this.props.page === 'blog'){return edu.blog}
  }

  render() {
    const educations = this.categories();
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="accordion">
            <div className="card">
                <div className="card-header" data-toggle="collapse"
                  data-target={`#collapse_${this.props.type}`} aria-expanded="true">     
                  <span className="title">{this.props.title}</span>
                  <span className="accicon"><i className="fa fa-angle-down rotate-icon"></i></span>
                </div>
                <div id={`collapse_${this.props.type}`} className="collapse show">
                  <div className="detail-accordian">
                    <div className="cate-sec">
                      <div className="checkbox-sec">
                        {educations}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SelectFilterWithoutSearch;