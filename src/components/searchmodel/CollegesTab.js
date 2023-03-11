import React from "react";
import Link from "next/link";

class DoctarateTab extends React.Component {
  render() {
    const search = this.props.data && this.props.data.map((item,i) => <Link href={"/college/"+item.sef_url}><li key={i}>{item.name}</li></Link>);
    return (
      <>
        <div className="tab-pane fade" id="tab3">
          <div className="row">
              <div className="col-md-12">
              <div className="Search-model-content">
                    <ul>
                       {search}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
    </>
    );
  }
}
export default DoctarateTab;