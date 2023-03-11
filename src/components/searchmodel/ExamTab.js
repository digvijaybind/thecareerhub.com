import React from "react";
import Link from "next/link";

class MasterTab extends React.Component {
  render() {
   const search = this.props.data && this.props.data.map((item,i) => <Link href={"/exam/"+item.sef_url}><li key={i}>{item.name}</li></Link>);
    return (
      <>
        <div className="tab-pane fade" id="tab4">
           <div className="row">
              <div className="col-md-12">
              <div className="Search-model-content">
                    <ul>
                     <li>{search}</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
    </>
    );
  }
}
export default MasterTab;