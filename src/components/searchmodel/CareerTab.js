import React from "react";
import Link from "next/link";


class DegreeTab extends React.Component {
  render() {
    const search = this.props.data && this.props.data.map((item,i) => <Link target="_blank"  href={"/career/"+item.sef_url}><li key={i}>{item.name}</li></Link> );
    return (
      <>
        <div className="tab-pane fade show active" id="tab1">
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
export default DegreeTab;