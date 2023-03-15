import Image from "next/image";
import Link from "next/link";
import React from "react";

class CollegeContactInfo extends React.Component {
  
  render() {
    const college = this.props.college;
    return (
      <>
      <div className="row pt-5 pb-5" id="contact">
        <div className="col-md-6">
          <h4 className="info-head">Communication Details</h4>
          <div className="div-info"><Image width={20} height={20} src="/images/location.png" alt="img" className="img-fluid" /> <span className="small-info-heading">Address</span> 
          <p className="txt-info"> {college.address && college.address.street + ', ' + college.address.location + ', ' + college.address.city + ', ' + college.address.state}</p></div>

            <div className="div-info"><Image width={20} height={20} src="/images/website.png" alt="img" className="img-fluid" /> <span className="small-info-heading">Website</span> 
            <p className="txt-info"> <Link target="_blank" href={"/"} > {college.social && college.social.website}</Link></p></div>
{/* college.social.website */}
            <div className="div-info"><Image width={20} height={20} src="/images/number.png" alt="img" className="img-fluid" /> <span className="small-info-heading2">Contact Number</span> 
              <p className="txt-info"> <Link target="_blank" href={`tel:${college.contact}`} > {college.contact}</Link></p></div>

            <div className="div-info"><Image width={20} height={20} src="/images/email.png" alt="img" className="img-fluid" /> <span className="small-info-heading2">Email ID</span> 
              <p className="txt-info"> <Link target="_blank" href={`mailto:${college.email}`} >{college.email}</Link></p></div>

            <div className="social-div">
              { college.social &&college.social.facebook && college.social.facebook.length > 5 ?  
              <Link target="_blank" href={college.social.facebook}><Image width={20} height={20} src="/images/fb.png" alt="img" className="img-fluid" /></Link>
              : null}
              { college.social &&college.social.instagram && college.social.instagram.length > 5 ? 
              <Link target="_blank" href={college.social.instagram}><Image width={20} height={20} src="/images/instagram.png" alt="img" className="img-fluid" /></Link>
              : null}
              { college.social &&college.social.wikipedia && college.social.wikipedia.length > 5 ? 
              <Link target="_blank" href={college.social.wikipedia}><Image width={20} height={20} src="/images/wikipedia.png" alt="img" className="img-fluid" /></Link>
              : null}
              { college.social &&college.social.google && college.social.google.length > 5 ? 
              <Link target="_blank" href={college.social.google}><Image width={20} height={20} src="/images/google.png" alt="img" className="img-fluid" /></Link>
              : null}
              { college.social &&college.social.youtube && college.social.youtube.length > 5 ? 
              <Link target="_blank" href={college.social.youtube}><Image width={20} height={20} src="/images/yt.png" alt="img" className="img-fluid" /></Link>
              : null}
            </div>
          </div> 
        <div className="col-md-6">
          <iframe title={college.address} src={`https://maps.google.it/maps?q=${college.address && college.address.street + ', ' + college.address.location}&output=embed`} 
           width="100%" height="350" style={{border: 'none'}}>
          </iframe>
        </div>
      </div>
      </>
    );
  }
}
export default CollegeContactInfo;