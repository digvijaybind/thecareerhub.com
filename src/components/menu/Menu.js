import Link from "next/link";
import React from "react";
import Const from "../../util/Constants";

class Menu extends React.Component {
    
  render() {
    const testlink = Const.testlink;
   const {open,setOpen}=this.props;
    return (
      <div className="collapse navbar-collapse col-md-5" id="navbarScroll"

      >
       <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
          <li className="nav-item dropdown">
             <Link target="_blank"  href='#' className="nav-link dropdown-toggle" id="navbarScrollingDropdown" 
             onClick={(e)=>{
                e.preventDefault();
                e.stopPropagation();
                setOpen(true);
              }}
             role="button" data-bs-toggle="dropdown" aria-expanded="false">
             
             Explore
             </Link>
             <ul className={`dropdown-menu ${open && "show"}`} aria-labelledby="navbarScrollingDropdown">
                <div className="row rowcareer submenu-col">
                    <div className="col-md-12 explore-menu-title">
                        <h5><Link target="_blank"  href='/career'><img src="/images/g3.png" alt="img" className="img-fluid" /> &nbsp; Careers</Link></h5>
                    </div>
                        <div className="col-md-2">
                        <h6 className="explore-menu-subtitle"><span>Top Categories</span></h6>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?category=${encodeURIComponent('Engineering & technology')}`} className="dropdown-item">Engineering & tech</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?category=Aviation' className="dropdown-item">Aviation</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?category=${encodeURIComponent('Medicine & Allied Healthcare')}`} className="dropdown-item">Medicine & Healthcare</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?category=${encodeURIComponent('Computer & IT')}`} className="dropdown-item">Computer & IT</Link></p>
                        </div>
                        <div className="col-md-2">
                        <h6 className="explore-menu-subtitle"><span>Top Education</span></h6>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?course_level=1`} className="dropdown-item">Diploma</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?course_level=2`} className="dropdown-item">Degree</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?course_level=3`} className="dropdown-item">Masters</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?course_level=4`} className="dropdown-item">Doctorate</Link></p>
                        
                        </div>
                        <div className="col-md-2">
                        <h6 className="explore-menu-subtitle"><span>Streams</span></h6>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?stream=3`} className="dropdown-item">Arts</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?stream=1`} className="dropdown-item">Science</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?stream=2`} className="dropdown-item">Commerce</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href={`/career?stream=6`} className="dropdown-item">Other</Link></p>
                        
                        </div>
                        <div className="col-md-2">
                        <h6 className="explore-menu-subtitle"><span>Fees</span></h6>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?fees=40000' className="dropdown-item"><i className="fa fa-inr"></i>40,000</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?fees=60000' className="dropdown-item"><i className="fa fa-inr"></i>60,000</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?fees=80000' className="dropdown-item"><i className="fa fa-inr"></i>80,000</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?fees=100000' className="dropdown-item"><i className="fa fa-inr"></i>1,00,000</Link></p>
                        
                        </div>
                        <div className="col-md-2">
                        <h6 className="explore-menu-subtitle"><span>Salary</span></h6>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?salary=40000' className="dropdown-item"><i className="fa fa-inr"></i>4,00,000</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?salary=60000' className="dropdown-item"><i className="fa fa-inr"></i>6,00,000</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?salary=80000' className="dropdown-item"><i className="fa fa-inr"></i>8,00,000</Link></p>
                            <p className="explore-menu-links"><Link target="_blank"  href='/career?salary=100000' className="dropdown-item"><i className="fa fa-inr"></i>10,00,000</Link></p>
                        
                        </div>
                        <div className="col-md-2">
                            <h4><Link target="_blank"  href='/exam' style={{color: "#f24890"}}><img src="/images/career-test-icon.png" alt="img" className="img-fluid" /> &nbsp; Exam</Link></h4>
                            <h4><Link target="_blank"  href='/industry' style={{color: "rgb(243 113 40)"}}><img src="/images/pathways-icon.png" alt="img" className="img-fluid" /> &nbsp; Industry</Link></h4>
                        </div>
                </div> 
                <div className="row rowcourse submenu-col">
                    <div className="col-md-12 explore-menu-title">
                        <h5><Link target="_blank"  href='/course'><img src="/images/career-stream.svg" alt="img" className="img-fluid" /> &nbsp; Courses</Link></h5>
                    </div>
                    <div className="col-md-2">
                       <h6 className="explore-menu-subtitle"><span>Top Categories</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/course?category=${encodeURIComponent('Engineering & technology')}`} className="dropdown-item">Engineering</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?category=Aviation' className="dropdown-item">Aviation</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?category=Civil Services' className="dropdown-item">Civil Services</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/course?category=${encodeURIComponent('Computer & IT')}`} className="dropdown-item">Computer & IT</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Top Education</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?course_level=1' className="dropdown-item">Diploma</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?course_level=2' className="dropdown-item">Degree</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?course_level=3' className="dropdown-item">Masters</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?course_level=4' className="dropdown-item">Doctorate</Link></p>
                    
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Study Mode</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?studyMode=1' className="dropdown-item">Full Time</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?studyMode=2' className="dropdown-item">Part Time</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?studyMode=3' className="dropdown-item">Online</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?studyMode=5' className="dropdown-item">Hybrid</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Fees</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?fees=40000' className="dropdown-item"><i className="fa fa-inr"></i>40,000</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?fees=60000' className="dropdown-item"><i className="fa fa-inr"></i>60,000</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?fees=80000' className="dropdown-item"><i className="fa fa-inr"></i>80,000</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/course?fees=100000' className="dropdown-item"><i className="fa fa-inr"></i>1,00,000</Link></p>
                    
                    </div>
                </div>
                <div className="row rowcollege submenu-col">
                    <div className="col-md-12 explore-menu-title">
                        <h5><Link target="_blank"  href='/college'><img src="/images/career-course.svg" alt="img" className="img-fluid" /> &nbsp; Colleges</Link></h5>
                    </div>
                    <div className="col-md-2">
                       <h6 className="explore-menu-subtitle"><span>Top Categories</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?category=1' className="dropdown-item">Engineering</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?category=6' className="dropdown-item">Management</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?category=8`} className="dropdown-item">Health & Medicine</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?category=9' className="dropdown-item">Commerce</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Top Streams</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?stream=3`} className="dropdown-item">Arts</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?stream=1`} className="dropdown-item">Science</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?stream=2`} className="dropdown-item">Commerce</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?stream=6`} className="dropdown-item">Others</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Top Cites</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?cities=mumbai' className="dropdown-item">Mumbai</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?cities=delhi' className="dropdown-item">Delhi</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?cities=pune' className="dropdown-item">Pune</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?cities=bengaluru' className="dropdown-item">Bengaluru</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Top States</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?states=MAHARASHTRA' className="dropdown-item">Maharashtra</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?states=UTTAR PRADESH' className="dropdown-item">Uttar Pradesh</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?states=TAMIL NADU' className="dropdown-item">Tamil Nadu</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='/college?states=KARNATAKA' className="dropdown-item">Karnataka</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Top Courses</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?course_level=1`} className="dropdown-item">Diploma</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?course_level=2`} className="dropdown-item">Degree</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?course_level=3`} className="dropdown-item">Master</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href={`/college?course_level=4`} className="dropdown-item">Others</Link></p>
                    </div>
                    <div className="col-md-2">
                    <h6 className="explore-menu-subtitle"><span>Exam</span></h6>
                        <p className="explore-menu-links"><Link target="_blank"  href='#' className="dropdown-item">GATE</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='#' className="dropdown-item">MH-CET</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='#' className="dropdown-item">IMU CET</Link></p>
                        <p className="explore-menu-links"><Link target="_blank"  href='#' className="dropdown-item">JEE</Link></p>
                    </div>
                </div>
             </ul>
          </li>
          <li className="nav-item"><Link target="_blank"  href = {testlink} className="nav-link">Career Test</Link></li>
          <li className="nav-item"><Link target="_blank"  href='/blog' className="nav-link">Blog</Link></li>
          <li className="nav-item"><Link target="_blank"  href='#' className="nav-link login-menu">Login</Link></li>
          <li className="nav-item">
            <Link target="_blank"  href={testlink}>
                <button type="button" className="btn hdbtn">Take A Free Test Now</button>
            </Link>
          </li>
       </ul>
    </div>
    );
  }
}
export default Menu;
