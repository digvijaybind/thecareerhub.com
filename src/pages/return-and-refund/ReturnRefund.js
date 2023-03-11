import React from "react";
import HtmlHeader from "../components/common/HtmlHeader";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import PageHeading from "../components/common/PageHeading";



class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inApiCall: false };
  }

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
        <HtmlHeader title="Refund and Cancellation Policy" description="Refund and Cancellation Policy" />
        <Header />
        <PageHeading headingmain="Refund and Cancellation Policy" />
        <div className="section3 mb-3 mt-3 pt-5 pb-5">
          <div className="container padding-left-right">
            <div className="row ">
                <div class="col-md-12">
                    <p>Due to the nature of the services, TheCareerHub services are non-returnable.</p>
                    <p>TheCareerHub does not process refunds on availed services. In case the client has paid a certain amount and NOT availed the service, the TheCareerHub customer service team will refund the amount in the client’s registered bank account within 7 working days.</p>
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
