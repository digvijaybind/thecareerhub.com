import React from "react";
import Util from "../../util/Util";
import Const from "../../util/Constants";
import Image from "next/image";

class CareerImage extends React.Component {
  render() {
    const url = Const.OldUrl;
    const career = this.props.career;
    return (
      <>
      <div id="overview">
        <div className="row">
            <div className="col-md-12">
                <Image width={734} height={413} src={url+career.media_path} alt="img" className="img-fluid" />
            </div>
        </div>
        <div className="row pt-4 pb-5">
            <div className="col-md-12 secg">
                <div className="growth">
                  <span>Growth</span>
                  <div className="ng"><Image width={20} height={20} src="/images/level.png" alt="img" />{career.growth}%</div>
                </div>
                <div className="growth growth2">
                  <span>Salary</span>
                  <div className="ng"><Image width={20} height={20} src="/images/salary.png" alt="img" />₹ 
                    {career.min_salary && Util.convertToMoney(career.min_salary)}-{career.max_salary && Util.convertToMoney(career.max_salary)}
                  </div>
                </div>
            </div>
        </div>
        </div>
    </>
    );
  }
}
export default CareerImage;