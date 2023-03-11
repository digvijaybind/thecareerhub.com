import React from "react";
import Link from "next/link";

class OthersTab extends React.Component {
  render() {
   const search = this.props.data && this.props.data.map((item,i) => <Link href={"/industry/"+item.sef_url}><li key={i}>{item.name}</li></Link>);
    return (
      <>
        <div className="tab-pane fade" id="tab5">
          <div className="row">
              <div className="col-md-12">
                 <div className="Search-model-content">
                    <ul>
                     <li>{search}</li>
                       {/* <li>Engineering College Tuwa - [ECT], Godhra, India</li>
                       <li>Engineering Institute For Junior Executives, Howrah, India</li>
                       <li>Engineering Staff College Of India, Hyderabad, India</li> */}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
    </>
    );
  }
}
export default OthersTab;