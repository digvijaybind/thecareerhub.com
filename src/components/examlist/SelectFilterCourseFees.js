import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class SelectFilterWithoutSearch extends React.Component {
    static maxval = 500000;
    static minval = 0;
    
  constructor(props) {
    super(props);
    this.state = { min: 500, max: 200000 };
  }

  onCheck = (id, checked) => {
    const education = this.state.data.find((education) => education.id === id);
    if (checked) {
      this.props.onAddFilter(education);
    } else {
      this.props.onRemoveFilter(education);
    }
  };

  onValueChange = event => {
      const sfield = event.target.name;
      const value = parseInt(event.target.value);
      const val = { ...this.state };
      val[sfield] = value;
      if(val['min'] > val['max'])
        val['min'] = val['max'];

      if(val['min'] && val['min'] < SelectFilterWithoutSearch.minval)
        val['min'] = SelectFilterWithoutSearch.minval;

      if(val['max'] && val['max'] > SelectFilterWithoutSearch.maxval)
        val['max'] = SelectFilterWithoutSearch.maxval;
    
      this.setState({ ...this.state, ...val });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div
              className="card-header collapsed"
              data-toggle="collapse"
              data-target="#collapseFift"
              aria-expanded="false"
            >
              <span className="title">COURSE FEES</span>
              <span className="accicon">
                <i className="fa fa-angle-down rotate-icon"></i>
              </span>
            </div>
            <div id="collapseFift" className="collapse show">
              <div className="detail-accordian">
                <div className="cate-sec">
                  <div className="checkbox-sec">
                    <div className="container">
                      <div className="row">
                        <div className="secf">
                          <p className="Selected-Salary-Rang">
                            Selected Course Range (₹ 5K- ₹ 50L)
                          </p>
                          <div id="slider-range"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <InputRange
                            maxValue={SelectFilterWithoutSearch.maxval}
                            minValue={SelectFilterWithoutSearch.minval}
                            value={this.state}
                            onChange={value => this.setState({ ...this.state, ...value })}
                          />
                          <br />
                        </div>
                      </div>
                      <div className="row">
                        <div className="row-range-12">
                          <form className="row-range">
                            <input type="number" className="col-md-5" name="min" max={SelectFilterWithoutSearch.maxval} min={SelectFilterWithoutSearch.minval} value={this.state.min} onChange={this.onValueChange} />
                            <input type="number" className="col-md-5" name="max" max={SelectFilterWithoutSearch.maxval} min={SelectFilterWithoutSearch.minval} value={this.state.max} onChange={this.onValueChange} />
                          </form>
                        </div>
                      </div>
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
