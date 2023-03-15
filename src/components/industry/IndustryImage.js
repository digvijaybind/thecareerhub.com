import Image from "next/image";
import React from "react";
import Const from "../../util/Constants";
class IndustryImage extends React.Component {
  render() {
    const url = Const.OldUrl;
    const industry = this.props.industry;
    return (
      <>
      <div id="overview">
        <div className="row">
            <div className="col-md-12">
                <Image width={734} height={411} src={url+industry.image_path} alt="img" className="img-fluid" />
            </div>
        </div>
        <div className="row pt-4 pb-5">
            <div className="col-md-12 secg">
                <p className="ptserif">
                    {industry.description}
                </p>
            </div>
        </div>
        </div>
    </>
    );
  }
}
export default IndustryImage;