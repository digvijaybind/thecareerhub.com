import React from "react";
import Link from "next/link";
import Util from "../../util/Util";
import Const from "../../util/Constants";
import Image from "next/image";

class RelatedCollegeItem extends React.Component {
  render() {
    
    const url = Const.OldUrl+"assets/imagelogo/logo/logo";

    const model = this.props.model;
    const college = this.props.college;
    // let category = Util.multiLabel(model, 'category', college.college_categories);
    // category = category && <div className="badge job-tags"><span>{category}</span></div>;
    // let location = Util.address(model, college.address);
    // location = location && <><Image width={20} height={20} src="/images/location.png" alt="img" className="img-fluid" /> <i className="fa fa-map-marker" aria-hidden="true"></i>{location} </>;
    // const nirf = this.props.college.nirf_rank[0] && this.props.college.nirf_rank[0].rank ? <><Image width={200} height={400} src="/images/rank.png" alt="rank" /> Nirf- {this.props.college.nirf_rank[0].rank}</> :''; 
    let category = Util.multiLabelDiv(model, 'category', this.props.college.college_categories);
    category = category && <div className="badge job-tags">{category}</div>;
    let location = Util.address(model, this.props.college.address);
    location = location && <><Image width={20} height={20} src="/images/location2.png" alt="location" /> &nbsp;{location} </>;
    const nirfrank = this.props.college.nirf_rank.filter(item => item.rank>0)?.map(item => 
        <>
        <Image width={20} height={20} src="/images/rank.png" alt="rank" /> &nbsp; NIRF Rank- {item.rank}
        </>
    );
    // const nirf = this.props.college.nirf_rank[0] && this.props.college.nirf_rank[0].rank ? <>
    // <Image width={20} height={20} src="/images/rank.png" alt="rank" /> &nbsp; NIRF Rank- {this.props.college.nirf_rank[0].rank}</> :''; 
    return (
    <div className="row">
        <div className="col-md-12">
            <div className="card main-card">
            <Link target="_blank" href={"/college/"+this.props.college.sef_url}>
                <div className="card-body card-one ">
                    <div className="row">
                        <div className="col-md-2">
                            <Image width={92} height={92} src= {url+college.logo} alt="img" className="img-fluid" />
                        </div>
                        <div className="col-md-10">
                            <h5 className="card-title">{college.name}</h5>
                            {category}
                            <div className="detail pt-2">
                                <span>{location}</span>
                                <span><i className="fa fa-university" aria-hidden="true"></i> {college.approved_by}</span>
                                <span>{nirfrank}</span>
                                {/* <Link target="_blank" href="#" className="viewbtnorange"> View More </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className="card-body career-card-two">
                    <div className=" row">
                    <div className="col-md-12">
                        <Link target="_blank" href={"/college/"+this.props.college.sef_url}>View Details</Link>
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