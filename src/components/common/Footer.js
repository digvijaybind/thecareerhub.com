import React from "react";
import Const from "../../util/Constants";
import Link from "next/link";
import Image from "next/image";


class Footer extends React.Component {
  render() {
    const testlink = Const.testlink;
    return (

      <div className="footer">
         <div className="container-fluid paddinglr107">
            <div className="row frow">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-3">
                    <ul className="footer-ul">
                      <li><Link href={testlink}> Career Test </Link></li>
                      <li><Link href="/career"> Careers </Link></li>
                      <li><Link href="/college"> Colleges </Link></li>
                      <li><Link href="/course"> Courses </Link></li>
                      <li><Link href="/exam"> Exam </Link></li>
                      <li><Link href="/industry"> Industries </Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="footer-ul">
                      <li><Link href="#"> About us </Link></li>
                      <li><Link href="#"> Work with us </Link></li>
                      <li><Link href="/blog"> Blogs </Link></li>
                      <li><Link href="/contact-us"> Contact  </Link></li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <ul className="footer-ul">
                      <li><Link href="/terms-and-services"> Terms & Services </Link></li>
                      <li><Link href="/return-and-refund"> Return & Refund </Link></li>
                      <li><Link href="/privacy-policy"> Privacy Policy </Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 logo-fcol">
                <div><Image width={172} height={25} src="/images/footer-logo.png" alt="img" /></div>
                <p className="txt-14">The ultimate career guidance platform that will give your success story the boost it needs.</p>
                <div className="contact-info-footer">
                  <p><span><i className="fa fa-phone" aria-hidden="true"></i></span><Link href="tel:022 4016 3399"> 022 4016 3399 </Link> </p>
                  <p><span><i className="fa fa-envelope" aria-hidden="true"></i></span><Link href="mailto:support@thecareerhub.com"> support@thecareerhub.com </Link></p>
                  <p className="social-img">
                  <span>Follow us</span>
                  <Link href="https://www.facebook.com/The-Career-Hub-110040528233534/"><Image width={25} height={25} src="/images/social/fb.png" alt="img" /></Link> 
                  <Link href="https://www.instagram.com/thecareerhubindia/"><Image width={25} height={25} src="/images/social/ig.png" alt="img" /></Link> 
                  <Link href="https://www.linkedin.com/in/thecareerhub/"><Image width={25} height={25} src="/images/social/li.png" alt="img" /></Link> 
                  <Link href="https://in.pinterest.com/thecareerhubcom"><Image width={25} height={25} src="/images/social/pt.png" alt="img" /></Link> 
                  <Link href="https://twitter.com/TheCareerH"><Image width={25} height={25} src="/images/social/tw.png" alt="img" /></Link> 
                  <Link href="#"><Image width={25} height={25} src="/images/social/yt.png" alt="img" /></Link> 
                  </p>
                </div>
              </div> 
            </div>
         </div>

         <hr />

         <div className="container-fluid paddinglr107 padding48">
            <div className="row">
              <div className="col-md-12">
                <p className="small-heading"><Link href="/careers">Careers</Link></p>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-3 col-xs-6">
                    <h6 className="txt12 mt24">Top Categories</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href={`/career?category=${encodeURIComponent('Engineering & technology')}`} className="dropdown-item">Engineering & technology</Link></li>
                      <li className="explore-menu-links"><Link href='/career?category=Aviation' className="dropdown-item">Aviation</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?category=${encodeURIComponent('Medicine & Allied Healthcare')}`} className="dropdown-item">Medicine & Allied Healthcare</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?category=${encodeURIComponent('Computer & IT')}`} className="dropdown-item">Computer & IT</Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-xs-6">
                    <h6 className="txt12 mt24">Top Education</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href={`/career?course_level=1`} className="dropdown-item">Diploma</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?course_level=2`} className="dropdown-item">Degree</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?course_level=3`} className="dropdown-item">Masters</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?course_level=4`} className="dropdown-item">Doctorate</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-lg-2 col-xs-6">
                    <h6 className="txt12 mt24">Streams</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href={`/career?stream=3`} className="dropdown-item">Arts</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?stream=1`} className="dropdown-item">Science</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?stream=2`} className="dropdown-item">Commerce</Link></li>
                      <li className="explore-menu-links"><Link href={`/career?stream=6`} className="dropdown-item">Other</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-lg-2 col-xs-6">
                    <h6 className="txt12 mt24">Fees</h6>
                    <ul className="footer-ul catrowtxt mt20">
                    <li className="explore-menu-links"><Link href='/career?fees=40000' className="dropdown-item"><i className="fa fa-inr"></i>40,000</Link></li>
                      <li className="explore-menu-links"><Link href='/career?fees=60000' className="dropdown-item"><i className="fa fa-inr"></i>60,000</Link></li>
                      <li className="explore-menu-links"><Link href='/career?fees=80000' className="dropdown-item"><i className="fa fa-inr"></i>80,000</Link></li>
                      <li className="explore-menu-links"><Link href='/career?fees=100000' className="dropdown-item"><i className="fa fa-inr"></i>1,00,000</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-lg-2 col-xs-6">
                    <h6 className="txt12 mt24">Salary</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/career?salary=40000' className="dropdown-item"><i className="fa fa-inr"></i>4,00,000</Link></li>
                      <li className="explore-menu-links"><Link href='/career?salary=60000' className="dropdown-item"><i className="fa fa-inr"></i>6,00,000</Link></li>
                      <li className="explore-menu-links"><Link href='/career?salary=80000' className="dropdown-item"><i className="fa fa-inr"></i>8,00,000</Link></li>
                      <li className="explore-menu-links"><Link href='/career?salary=100000' className="dropdown-item"><i className="fa fa-inr"></i>10,00,000</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
         </div>

         <div className="container-fluid paddinglr107 padding48">
            <div className="row">
              <div className="col-md-12">
                <p className="small-heading"><Link href="/course">Courses</Link></p>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Top Categories</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href={`/course?category=${encodeURIComponent('Engineering & technology')}`} className="dropdown-item">Engineering</Link></li>
                      <li className="explore-menu-links"><Link href='/course?category=Aviation' className="dropdown-item">Aviation</Link></li>
                      <li className="explore-menu-links"><Link href='/course?category=Civil Services' className="dropdown-item">Civil Services</Link></li>
                      <li className="explore-menu-links"><Link href={`/course?category=${encodeURIComponent('Computer & IT')}`} className="dropdown-item">Computer & IT</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Top Education</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/course?course_level=1' className="dropdown-item">Diploma</Link></li>
                      <li className="explore-menu-links"><Link href='/course?course_level=2' className="dropdown-item">Degree</Link></li>
                      <li className="explore-menu-links"><Link href='/course?course_level=3' className="dropdown-item">Masters</Link></li>
                      <li className="explore-menu-links"><Link href='/course?course_level=4' className="dropdown-item">Doctorate</Link></li>
                    
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Study Mode</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/course?studyMode=1' className="dropdown-item">Full Time</Link></li>
                      <li className="explore-menu-links"><Link href='/course?studyMode=2' className="dropdown-item">Part Time</Link></li>
                      <li className="explore-menu-links"><Link href='/course?studyMode=3' className="dropdown-item">Online</Link></li>
                      <li className="explore-menu-links"><Link href='/course?studyMode=5' className="dropdown-item">Hybrid</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Fees</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/course?fees=40000' className="dropdown-item"><i className="fa fa-inr"></i>40,000</Link></li>
                      <li className="explore-menu-links"><Link href='/course?fees=60000' className="dropdown-item"><i className="fa fa-inr"></i>60,000</Link></li>
                      <li className="explore-menu-links"><Link href='/course?fees=80000' className="dropdown-item"><i className="fa fa-inr"></i>80,000</Link></li>
                      <li className="explore-menu-links"><Link href='/course?fees=100000' className="dropdown-item"><i className="fa fa-inr"></i>1,00,000</Link></li>
                    
                    </ul>
                  </div>
                </div>
              </div>
            </div>
         </div>

         <div className="container-fluid paddinglr107 padding48">
            <div className="row">
              <div className="col-md-12">
                <p className="small-heading"><Link href="/college">Colleges</Link></p>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3">
                    <h6 className="txt12 mt24">Top Categories</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/college?category=1' className="dropdown-item">Engineering</Link></li>
                      <li className="explore-menu-links"><Link href='/college?category=6' className="dropdown-item">Management</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?category=8`} className="dropdown-item">Health & Medicine</Link></li>
                      <li className="explore-menu-links"><Link href='/college?category=9' className="dropdown-item">Commerce</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h6 className="txt12 mt24">Top Streams</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href={`/college?stream=3`} className="dropdown-item">Arts</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?stream=1`} className="dropdown-item">Science</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?stream=2`} className="dropdown-item">Commerce</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?stream=6`} className="dropdown-item">Others</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Top Cities</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/college?cities=mumbai' className="dropdown-item">Mumbai</Link></li>
                      <li className="explore-menu-links"><Link href='/college?cities=delhi' className="dropdown-item">Delhi</Link></li>
                      <li className="explore-menu-links"><Link href='/college?cities=pune' className="dropdown-item">Pune</Link></li>
                      <li className="explore-menu-links"><Link href='/college?cities=bengaluru' className="dropdown-item">Bengaluru</Link></li>
                  
                    </ul>
                  </div>
                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Top States</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href='/college?states=MAHARASHTRA' className="dropdown-item">Maharashtra</Link></li>
                      <li className="explore-menu-links"><Link href='/college?states=UTTAR PRADESH' className="dropdown-item">Uttar Pradesh</Link></li>
                      <li className="explore-menu-links"><Link href='/college?states=TAMIL NADU' className="dropdown-item">Tamil Nadu</Link></li>
                      <li className="explore-menu-links"><Link href='/college?states=KARNATAKA' className="dropdown-item">Karnataka</Link></li>
                    
                    </ul>
                  </div>

                  <div className="col-md-2">
                    <h6 className="txt12 mt24">Top Courses</h6>
                    <ul className="footer-ul catrowtxt mt20">
                      <li className="explore-menu-links"><Link href={`/college?course_level=1`} className="dropdown-item">Diploma</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?course_level=2`} className="dropdown-item">Degree</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?course_level=3`} className="dropdown-item">Master</Link></li>
                      <li className="explore-menu-links"><Link href={`/college?course_level=4`} className="dropdown-item">Others</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
         </div>

         <hr />

         <div className="container-fluid paddinglr107 padding12">
            <div className="row">
              <div className="col-md-12">
                <li className="copyrighttxt">© 2020  Thecareerhub.All Rights Reserved</li>
              </div>
            </div>
         </div>
      </div>
    );
  }
}
export default Footer;
