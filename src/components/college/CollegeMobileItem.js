import React from 'react';
import Link from "next/link";
import Util from '../../util/Util';
import Const from "../../util/Constants";

class CollegeMobileItem extends React.Component {
  render() {
    const url = Const.oldUrl+"assets/imagelogo/logo/logo";
    const model = this.props.model;
    let category = Util.multiLabel(model, 'category', this.props.college.college_categories);
    category = category && <div className="badge job-tags"><span>{category}</span></div>;
    let location = Util.address(model, this.props.college.address);
    location = location && <><img src="/images/college-location.svg" alt="location" /> &nbsp;{location} </>;
    const nirf = this.props.college.nirf_rank[0] && this.props.college.nirf_rank[0].rank ? <>
    <img src="/images/college-rank.svg" alt="rank" /> &nbsp; Nirf- {this.props.college.nirf_rank[0].rank}</> :''; 
    return (

        <div className="row">
            <div class="col-md-12">
            <div class="card main-card">
                <Link href={"/college/"+this.props.college.sef_url}>
                <div class="card-body card-one lightbluemain">
                    <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                        <div class="col maxw-30">
                            <img src={url+this.props.college.logo} alt="img" class="img-fluid"/>
                        </div>
                        <div class="col maxw-70 p-0">
                            <h5 class="card-title">{this.props.college.name} </h5>
                            {category}
                        </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="detail pt-2">
                        <span>{location}</span>
                        <span>
                        {this.props.college.approved_by ? <>
                            <img src="/images/college-approval.svg" alt="approval" /> &nbsp; 
                        {this.props.college.approved_by}
                        </> : ""}
                        </span>
                        <span>  {nirf ? nirf : ''}</span>
                        </div>
                    </div>
                    </div>
                </div>
                </Link>
                <div class="card-body card-two">
                <div class="boxwcolor row">
                    <div class="col-md-12">
                    <Link href={"/course"}>
                        <div className="btn-detail lightbluemain">{this.props.college.courseCount} Courses Options</div>
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
export default CollegeMobileItem;