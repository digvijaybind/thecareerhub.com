import React from 'react';

class SelectFilterWithoutSearch extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { data: [
        { id: 1, name: 'Degree (39)', type: 'education' },
        { id: 2, name: 'Diploma(21)', type: 'education' },
        { id: 3, name: 'Masters (121)', type: 'education' },
        { id: 4, name: 'Doctorate (45)', type: 'education' },
        { id: 5, name: 'Certification & Licences (83)', type: 'education' },
        { id: 6, name: 'Other (17)', type: 'education' },
      ], search: ""
    };
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
      const checked = this.props.filters.find(filter => filter.type === 'education'
        && filter.id === education.id);
      return <div key={`filter_education_${i}`} className="form-check">
        { checked &&
        <>
          <input className="form-check-input" type="checkbox" checked 
            onChange={ event => this.onCheck(education.id, event.target.checked) } />
            <span className="checkmark"></span>
            </>
        }
        { !checked &&
        <>
          <input className="form-check-input" type="checkbox"
            onChange={ event => this.onCheck(education.id, event.target.checked) } />
            <span className="checkmark"></span>
            </>
        }
        <label className="form-check-label">{education.name}</label>
      </div>
    });
  }

  render() {
    const educations = this.categories();
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="accordion">
            <div className="card">
                <div className="card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true">     
                  <span className="title">REQUIRED EDUCATION</span>
                  <span className="accicon"><i className="fa fa-angle-down rotate-icon"></i></span>
                </div>
                <div id="collapseOne" className="collapse show">
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