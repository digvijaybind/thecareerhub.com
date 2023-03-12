import React from "react";
import Link from "next/link";
import Const from "../../util/Constants";
import HomeTestimonial from '../home/HomeTestimonial';

class HomeContent extends React.Component {
  render() {
    const testlink = Const.testlink;
    return (
      <>
      <section className="home-alternate-bg">
        <div className="container mtb">
          <div className="row">
            <div className="col-md-7">
              <h5 className="section-main-red-txt">Presenting, the best of careers to you</h5>
              <h1 className="section-main-heading">Do you want a sneak peak of what your professional future will look like?</h1>
              <h5 className="section-main-subtxt">It can be difficult to know your future, but it is not impossible! Get acquainted with with</h5>
              <ul className="ordering">
                  <li><span></span> Key areas you will be incharge of</li>
                  <li><span></span> How your day at work will look like</li>
                  <li><span></span> Which talents of yours you will be using</li>
                  <li><span></span> What your career will offer you (along with a good income, of course), and </li>
                  <li><span></span> Most importantly- your growth chart</li>
              </ul>
              <Link target="_blank" className="btn btn-take-test" href="/career">Your Career Hub</Link>
            </div>
            <div className="col-md-5">
              <img src="images/home/career-screen.png" alt="img" className="img-fluid" />
            </div>
          </div>          
        </div>
      </section>
      
      <div className="container mtb">
        <div className="row">
          <div className="col-md-7">
            <h5 className="section-main-red-txt">Your map to a successful career</h5>
            <h1 className="section-main-heading">You can see the goal, now let&apos;s race to it</h1>
            <h5 className="section-main-subtxt">Now that you realise that your career is waiting for you at the end of the finish line, one should gear up for the race. And while nothing comes easy, doesn&apos;t mean that it can be enjoyable. That&apos;s why, the career pathways will assist you by:</h5>
            <ul className="ordering">
                <li><span></span> Putting forward the various subject and course combinations available</li>
                <li><span></span> Briefing you on any entrance exams, or qualifications required</li>
                <li><span></span> Comparing the overview of various tracks that can be followed</li>
                <li><span></span> Setting a timeline to the required preparation </li>
                <li><span></span> Aligning the pros and cons of each possible course of action</li>
            </ul>
          </div>
          <div className="col-md-5">
            <img src="images/home/pathways.png" alt="img" className="img-fluid" />
          </div>
        </div>          
      </div>
      
      <section className="home-alternate-bg">
        <div className="container mtb">
          <div className="row">
            <div className="col-md-7">
              <h5 className="section-main-red-txt"> Navigating to your destination</h5>
              <h1 className="section-main-heading"> Prepare to prosper</h1>
              <h5 className="section-main-subtxt"> Considering that we spend most of our childhood, teenage, and even young adulthood years preparing for a career that will support you for the rest of your life, let&apos;s explore the best academic pursuits, and vocational training options knocking at your door</h5>
              <ul className="ordering">
                  <li><span></span> Explore all levels of education</li>
                  <li><span></span> Get to know the exams, eligibility, and qualifying parameters</li>
                  <li><span></span> Understand the course materials and syllabus</li>
                  <li><span></span> Learn about fees, duration, mode, and features of study </li>
                  <li><span></span> Identify the prospects the course will open up for you</li>
              </ul>
              <Link target="_blank" className="btn btn-take-test" href="/course">Find Courses</Link>
            </div>
            <div className="col-md-5">
              <img src="images/home/career-screen.png" alt="img" className="img-fluid" />
            </div>
          </div>          
        </div>
      </section>
      
      <div className="container mtb">
        <div className="row">
          <div className="col-md-7">
            <h5 className="section-main-red-txt"> Major landmarks of your career story</h5>
            <h1 className="section-main-heading"> Only the best, for the best your educational environment matters</h1>
            <h5 className="section-main-subtxt"> Guess what, even the top academic institutes are competing within themselves to get you.  You also get to know about the college&apos;s</h5>
            <ul className="ordering">
                <li><span></span> Admission Requirements</li>
                <li><span></span> Location</li>
                <li><span></span> Performance </li>
                <li><span></span>  Educational Fees</li>
                <li><span></span> Affiliation Status</li>
                <li><span></span> Exposure Provided</li>
                <li><span></span> Prospects Offered</li>
            </ul>
            <Link target="_blank" className="btn btn-take-test" href="/college">Find Colleges</Link>
          </div>
          <div className="col-md-5">
            <img src="images/home/college-screen.png" alt="img" className="img-fluid" />
          </div>
        </div>          
      </div>

      <section className="home-alternate-bg">
        <div className="container mtb">
        <div className="row">
          <div className="col-md-7">
            <h5 className="section-main-red-txt"> Your excellence can be limitless</h5>
            <h1 className="section-main-heading"> For a career as bright as your ambition</h1>
            <h5 className="section-main-subtxt"> Learning is eternal, and ever useful. So why stop at good, when you deserve the best? In fact, we have summarised the key trends in the global economy and current job markets to amplify the opportunities available to you, by collating the facts, figures, and fundamentals of major</h5>
            <ul className="ordering">
                <li><span></span> Industries </li>
                <li><span></span> Internships</li>
                <li><span></span> Improvements</li>
                <li><span></span> Inertia </li>
                <li><span></span> Innovations</li>
            </ul>
            <Link target="_blank" className="btn btn-take-test" href="/industry">Find Industries</Link>
          </div>
          <div className="col-md-5">
            <img src="images/home/industry-screen.png" alt="img" className="img-fluid" />
          </div>
        </div>          
      </div>
      </section>

      <div className="container mtb">
        <div className="row">
          <div className="col-md-7">
            <h5 className="section-main-red-txt"> You can succeed, let&apos;s show you how</h5>
            <h1 className="section-main-heading"> Let&apos;s start with the most important factor- You</h1>
            <h5 className="section-main-subtxt"> In this fast-paced world, what remains a constant is YOU. So let&apos;s find out what your strengths, interests, and traits are- our standardised tests will help the best suited career come to you. And here is how</h5>
            <ul className="ordering">
                <li><span></span> Take the precise, effective online test</li>
                <li><span></span> Match it with top careers </li>
                <li><span></span> Understand how to enhance your abilities</li>
                <li><span></span>  Explore the best of your options</li>
            </ul>
            <Link target="_blank" href={testlink}>
              <button type="button" className="btn btn-take-test">Take a free test now</button>
              </Link>
          </div>
          <div className="col-md-5">
            <img src="images/home/test-screen.png" alt="img" className="img-fluid" />
          </div>
        </div>          
      </div>
      <HomeTestimonial />
      </>
    );
  }
}
export default HomeContent;