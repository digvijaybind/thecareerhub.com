import React from 'react';
import Link from "next/link";

class Qac extends React.Component {
  render() {
    return (
      <>
      <div className="qac">
        <div className="form-1-conatiner">
          <div className="row ">
            <div className="col-md-12">
              <img src="images/brainw.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="form-container step1">
          <div className="row ">
            <div className="col-md-12 headingwacform">
              <h3>Give us your feedback</h3>
              <p className="m-0">By completing this form, you will validate your experiences of the Dermatoglyphics Multiple Intelligence Test</p>
              <p>(DMIT) analysis and counselling based on the ridges and patterns of all of your child's fingerprints.</p>
            </div>
          </div>
          <hr />
          <div className="row qac-form-row">
            <div className="col-md-12 mrtp16">
              <form>
                <div className="form-row">
                  <div className="col-md-5 mb-3 qac-formtwo-row">
                    <label>Full Name (Parent)*</label>
                    <input type="text" className="form-control" placeholder="Kiran Parent"  />
                  </div>
                  <div className="col-md-5 mb-3 qac-formtwo-row">
                    <label>Full Name (Child)*</label>
                    <input type="text" className="form-control" placeholder="Kiran Child" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-5 mb-3 qac-formtwo-row">
                    <label>Contact Number*</label>
                    <input type="text" className="form-control" placeholder="Enter the Contact Number"  />
                  </div>
                  <div className="col-md-5 mb-3 qac-formtwo-row">
                    <label>Email ID*</label>
                    <input type="text" className="form-control" placeholder="Enter the Email ID" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-md-5 mb-3 qac-formtwo-row">
                    <label>Town/City*</label>
                    <input type="text" className="form-control" placeholder="Enter the Town/City"  />
                  </div>
                  <div className="col-md-5 mb-3 qac-formtwo-row">
                    <label>Age Of Child (at the time of DMIT)*</label>
                    <input type="text" className="form-control" placeholder="Enter the Child's age" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-12 text-center mb-3">
                    <button className="btn form-btnsubmit" type="submit">Submit form</button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>

        <div className="form-container step2 mt-5">
          <div className="row ">
            <div className="col-md-8 headingwacform nonemobile">
              <h3>Give us your feedback</h3>
              <p className="m-0">By completing this form, you will validate your experiences of the Dermatoglyphics Multiple Intelligence Test</p>
              <p>(DMIT) analysis and counselling based on the ridges and patterns of all of your child's fingerprints.</p>
            </div>
            <div className="col-md-4">
              <h5>Step 2</h5>
                <p className="steppfade"> Feedback</p>
              </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 mrtp16">
              <p className="italicw">Kindly mark your response to report your satisfaction with the <strong> reported analysis.</strong></p>
            </div>
          </div>
          <div className="row qac-form-row">
            <div className="col-md-12 mrtp16">
              <div className="step2content justify-content-center">
                <p className="textcount"> 1 / 5</p>
                <h5 className="textcounth5">How satisfied are you with the overall analysis of your child?</h5>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">1</Link><span className="textli nonemobile">Lowest</span></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">2</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">3</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">4</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">5</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">6</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">7</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">8</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">9</Link></li>
                    <li className="page-item"><Link target="_blank"  href="#" className="page-link">10</Link><span className="textli">Highest</span></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container step3 mt-5">
          <div className="row ">
            <div className="col-md-8 headingwacform nonemobile">
              <h3>Give us your feedback</h3>
              <p className="m-0">By completing this form, you will validate your experiences of the Dermatoglyphics Multiple Intelligence Test</p>
              <p>(DMIT) analysis and counselling based on the ridges and patterns of all of your child's fingerprints.</p>
            </div>
            <div className="col-md-4">
             <h5>Step 3</h5>
                <p className="steppfade"> Consent</p></div>
          </div>
          <hr />
          <div className="row qac-form-row">
            <div className="col-md-12 mrtp16">
              <div className="step3content justify-content-center">
                <p className="textstep3h5">Do you agree to share your responses for our further research into enhancing the qualitative benefits of DMIT & Counselling?</p>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label" for="defaultCheck1">
                    Yes, I agree
                  </label>
                </div>
                <div className="form-group mt-4">
                  <label for="comment">Client's Signature:</label>
                  <textarea className="form-control" rows="5" id="comment"></textarea>
                </div>
                <div className="form-group">
                  <div className="text-center mb-3">
                    <button className="btn form-btnsubmitstep3" type="submit">Submit Response</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container thankyoudiv mt-5">
          <div className="row qac-form-row">
            <div className="col-md-12 mrtp16">
              <div className="stepthankyou justify-content-center">
                <img src="images/ty.png" alt="img" />
                <div className="ty-textdiv">
                  <h2>Thank You ! </h2>
                  <p>We value your feedback and strive to improve your experience.</p>
                </div>
              </div>
              <div className="justify-content-center"><p className="tyendtxt">Want to know more about careers, cources ,colleges? Visit <Link target="_blank"  href="#"> The Career Hub </Link></p>
              </div>
            </div>
          </div>
        </div>

      </div>
      </>
    );
  }
}
export default Qac;
