import React from 'react';
import Link from "next/link";
import Util from '../../util/Util';
import Const from "../../util/Constants";
import Image from 'next/image';

class CourseItem extends React.Component {
  render() {
    const url = Const.OldUrl+"assets/imagelogo/logo/logo";
    const model = this.props.model;
    let category = Util.multiLabelDiv(model, 'category', this.props.college.college_categories);
    category = category && <div className="badge job-tags">{category}</div>;
    let location = Util.address(model, this.props.college.address);
    location = location && <><Image width={20} height={20} src="/images/college-location.svg" alt="location" /> &nbsp;{location} </>;
    const nirf = this.props.college.nirf_rank[0] && this.props.college.nirf_rank[0].rank ? <>
    <Image width={20} height={20} src="/images/college-rank.svg" alt="rank" /> &nbsp; Nirf- {this.props.college.nirf_rank[0].rank}</> :''; 
    return (
      <div className="row">
        <div className="col-md-12">
            <div className="card main-card">
                <Link target="_blank" href={"/college/"+this.props.college.sef_url}>
                <div className="card-body card-one lightbluemain">
                    <div className="row">
                        <div className="col-md-2">
                          <Image width={210} height={118} src= {url+this.props.college.logo} alt="img" className="img-fluid" />
                        </div>
                        <div className="col-md-10">
                          <h5 className="card-title">{this.props.college.name}</h5>
                          {category}
                          <div className="detail pt-2">
                              <span>{location}</span>
                              <span>
                                {this.props.college.approved_by ? <>
                                  <Image width={20} height={20} src="/images/college-approval.svg" alt="approval" /> &nbsp; 
                                {this.props.college.approved_by}
                                </> : ""}
                              </span>
                              <span>  {nirf ? nirf : ''}</span>
                          </div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className="card-body card-two">
                    <div className="boxwcolor row">
                        <div className="col-md-12">
                            <Link target="_blank" href={"/course"}>
                              <div className="btn-detail lightbluemain">{this.props.college.courseCount} Courses Options</div>
                            </Link> 
                            <Link target="_blank" href={"/college/"+this.props.college.sef_url}>
                            <div className="btn-detail bttn-yellow-detail">
                              View Details
                            </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default CourseItem;