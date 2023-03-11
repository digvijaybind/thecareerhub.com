import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class RangeFilter extends React.Component {
  
  static MIN = 0;
  static MAX = 500000;
    
  constructor(props) {
    super(props);
    const model = props.model;
    // console.log(model[props.type]);
    this.Min = model && props.type && model[props.type] ? model[props.type].min : RangeFilter.MIN;
    this.Max = model && props.type && model[props.type] ? model[props.type].max : RangeFilter.MAX;
    this.state = { min: this.Min, max: this.Max };
  }

  onRangeValueChange = range => {
    this.setState({ ...this.state, ...range })
    this.props.rangeFilter(this.props.type, range.min, range.max);
  }

  textChange = (field, value) => {
    const val = { ...this.state };
    val[field] = value;

    if(val.min > val.max) val.min = val.max;
    if(val.min > this.Max) val.min = this.Max;
    if(val.max < val.min) val.max = val.min;
    if(val.max < this.Min) val.min = this.Min;    
    this.setState({ ...this.state, ...val });
    this.props.rangeFilter(this.props.type, val.min, val.max);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div
              className="card-header collapsed"
              data-toggle="collapse"
              data-target={`#${this.props.title.replace(' ', '_')}`}
              aria-expanded="false"
              style={{margin: "12px 0"}}
            >
              <span className="title">{this.props.title}</span>
              <span className="accicon">
                <i className="fa fa-angle-down rotate-icon"></i>
              </span>
            </div>
            <div id={this.props.title.replace(' ', '_')} className="collapse show">
              <div className="detail-accordian">
                <div className="cate-sec">
                  <div className="checkbox-sec">
                    <div className="container">
                      <div className="row">
                        <div className="secf">
                          <p className="Selected-Salary-Rang">
                            Selected {this.props.title.toLowerCase()} Range in <i className="fa fa-inr"></i>
                          </p>
                          <div id="slider-range"></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <InputRange minValue={this.Min} maxValue={this.Max} value={this.state}
                            onChange={this.onRangeValueChange} />
                          <br />
                        </div>
                      </div>
                      <div className="row row-range">
                        {/* <div className="row-range-12">
                          <form className="row-range"> */}
                            <input type="number" className="col-md-5 d-flex justify-content-start"
                              min={this.Min} max={this.Max} value={this.state.min}
                              onChange={event => this.textChange("min", parseInt(event.target.value))} />
                            <input type="number" className="col-md-5 d-flex justify-content-end"
                              min={this.Min} max={this.Max} value={this.state.max}
                              onChange={event => this.textChange("max", parseInt(event.target.value))} />
                          {/* </form>
                        </div> */}
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
export default RangeFilter;
