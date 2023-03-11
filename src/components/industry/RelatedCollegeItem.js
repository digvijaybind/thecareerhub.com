import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";

class RelatedCollegeItem extends React.Component {
  render() {
    const url = Const.OldUrl+"assets/imagelogo/logo/logo";
    const model = this.props.model;
    const college = this.props.college;
    // let category = Util.multiLabel(model, 'category', college.college_categories);
    // category = category && <div className="badge job-tags"><span>{category}</span></div>;
    // let location = Util.address(model, college.address);
    // location = location && <><img src="/images/location.png" alt="img" className="img-fluid" /> <i className="fa fa-map-marker" aria-hidden="true"></i>{location} </>;
    // const nirf = this.props.college.nirf_rank[0] && this.props.college.nirf_rank[0].rank ? <><img src="/images/rank.png" alt="rank" /> Nirf- {this.props.college.nirf_rank[0].rank}</> :''; 
    let category = Util.multiLabel(model, 'category', this.props.college.college_categories);
    category = category && <div className="badge job-tags"><span>{category}</span></div>;
    let location = Util.address(model, this.props.college.address);
    location = location && <><img src="/images/location2.png" alt="location" /> &nbsp;{location} </>;
    const nirf = this.props.college.nirf_rank[0] && this.props.college.nirf_rank[0].rank ? <>
    <img src="/images/rank.png" alt="rank" /> &nbsp; Nirf- {this.props.college.nirf_rank[0].rank}</> :''; 
    return (
    <div className="row">
        <div className="col-md-12">
            <div className="card main-card">
            <Link href={"/college/"+this.props.college.sef_url}>
                <div className="card-body card-one ">
                    <div className="row">
                        <div className="col-md-2">
                            <img src= {url+college.logo} alt="img" className="img-fluid" />
                        </div>
                        <div className="col-md-10">
                            <h5 className="card-title">{college.name}</h5>
                            {category}
                            <div className="detail pt-2">
                                <span>{location}</span>
                                <span><i className="fa fa-university" aria-hidden="true"></i> {college.approved_by}</span>
                                <span>{nirf}</span>
                                {/* <Link href="#" className="viewbtnorange"> View More </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className="card-body career-card-two">
                    <div className=" row">
                    <div className="col-md-12">
                        <Link href={"/college/"+this.props.college.sef_url}>View Details</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default RelatedCollegeItem;