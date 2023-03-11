import React from "react";
import HtmlHeader from "../components/common/HtmlHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import PageHeading from "../components/common/PageHeading";
import Const from '../util/Constants';


class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inApiCall: false };
  }

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
        <HtmlHeader title="Contact" description="Privacy Policy" />
        <Header />
        <PageHeading headingmain="Contact" />
        <div className="section3 mb-3 mt-3 pt-5 pb-5">
          <div className="container padding-left-right">
            <div className="row">
              <div className="col-md-8">
                <h3>We'd love to hear from you.</h3>
                <p>
                  In case of any questions, doubts or feedback, Please fill out
                  the form below and we will reach out back to you at the
                  earliest.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <form action={`${Const.OldUrl}form/insertdata`}>
                  <div class="form-group">
                    <label for="email">Your Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter Name"
                      name="name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Your Mobile Number:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="contact"
                      placeholder="Enter Contact"
                      name="contact"
                    />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Your Email ID:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Your Message:</label>
                    <textarea class="form-control"
                      id="message"
                      placeholder="Enter your question/query/feedback here"
                      name="message">
                    </textarea>
                  </div>
                  <button type="submit" class="btn btn-default btn-primary">
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default BlogList;
