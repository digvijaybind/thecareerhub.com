import Link from "next/link";
import React from "react";
import Loader from "../../components/common/Loader";
import PageHeading from "../../components/common/PageHeading";
import HtmlHeader from '../../components/common/HtmlHeader';



class BlogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inApiCall: false };
  }

  render() {
    if (this.state.inApiCall) return <Loader />;
    return (
      <>
      <HtmlHeader title={"Terms and Conditions - The Career Hub"} description={"Terms and Conditions - The Career Hub"} 
       keywords={"Terms and Conditions - The Career Hub"}
      />
        <PageHeading headingmain="Terms and Conditions" />
        <div className="section3 mb-3 mt-3 pt-5 pb-5">
          <div className="container padding-left-right">
            <div className="row ">
              <div className="col-md-12">
                <p>
                  By accessing any part of this website you agree to be bound by
                  the following terms and conditions which you should read
                  carefully.{" "}
                  <Link target="_blank" href="https://www.thecareerhub.com">
                    https://www.thecareerhub.com
                  </Link>{" "}
                  may change these conditions at any time without any prior
                  notice. By your continued access and use of this website, you
                  agree to be bound by the latest version of the site terms and
                  conditions. Please check these periodically for any changes
                  that may have been made.
                </p>
                <ol className="ol-class">
                  <li>
                    <strong>Disclaimer</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      {" "}
                      We use our reasonable endeavors to ensure the accuracy of
                      the information provided on the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service.
                    </li>
                    <li>
                      We do not warrant or guarantee the accuracy, reliability
                      or legality of any of the information contained in the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>
                      .
                    </li>
                    <li>
                      We make no warranty that the contents of this site are
                      free from infection by viruses or anything else which has
                      contaminating or destructive properties.
                    </li>
                    <li>
                      We reserve the right, at its discretion, from time to time
                      to make changes to the information provided on the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service, or to alter the nature of the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service.
                    </li>
                    <li>
                      Will not be liable to you / user under any circumstances
                      whatsoever for any direct, indirect, consequential,
                      punitive or special damages arising from your use of the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service.
                    </li>
                    <li>
                      It will not guarantee the availability of the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service during the maintenance of the website. Will not be
                      responsible for the site content provided by advertisers
                      including product/service performance claims,
                      advertisement and/or sales promotions is the sole
                      responsibility of such advertisers and they alone shall be
                      liable for all disputes and liabilities arising therefrom
                      and{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      will in no way be responsible for it.{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      and its affiliates, associates, agents or employees shall
                      not be liable, at any time for any damages (including,
                      damages for loss of profits or loss of business) arising
                      in contract, or otherwise from the use of or inability to
                      use the Site or any of its contents, or from any act(s) or
                      omission(s) a result of using the Site or any such
                      contents or for any failure of performance, error,
                      omission, interruption, deletion, defect, delay in
                      operation or transmission, computer virus, communications
                      line failure, theft or destruction or unauthorized access
                      to, alteration of, or use of the information contained on
                      the site.
                    </li>
                    <li>
                      Has compiled data from a variety of sources on this
                      website and reserves the right, in its sole discretion, to
                      correct any errors or omissions in any portion of the
                      site.{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      may make any other changes to the site, the materials, and
                      the products, programs, services or prices (if any)
                      described in the site at any time without notice.
                    </li>
                    <li>
                      You are therefore advised to check the information
                      provided to you through the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service as any reliance that you place on the accuracy of
                      that information is at your own risk. While users are
                      offered free access to{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service,{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      reserves the right to discontinue these free promotions at
                      any time and with no notice given.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>
                      Restriction on use of the TheCareerHub and{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      Service
                    </strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      {" "}
                      Users are permitted to read, print or download text, data
                      and/or graphics from the site, for their personal and
                      non-commercial use only. Any copies of these pages saved
                      to disk or to any other storage medium be only used for
                      subsequent viewing purposes or to print extracts for
                      personal use.
                    </li>
                    <li>
                      You may not integrate the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service into another internet/extranet except through our
                      permission in writing from our customer relations
                      department. Unauthorized access, redistribution,
                      transmission and/or dealing with any information contained
                      in this site, re- production in any other manner, either
                      in whole or in part, is strictly prohibited, failing which
                      strict legal action will be initiated against such users.
                      You may not use automated scripts, software, spiders or
                      any other automated means to perform searches on{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>
                      . Any attempt to extract or download significant amounts
                      of data from{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      or to compile a database from data obtained from{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      is strictly forbidden. Please call our customer relations
                      department on <Link target="_blank" href="tel:+919987422220">9987422220</Link>{" "}
                      or e-mail:{" "}
                      <Link target="_blank" href="mailto:support@thecareerhub.com">
                        support@thecareerhub.com
                      </Link>{" "}
                      for more information about such access. You are only
                      entitled to use the information provided on the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service in responsible ways and this information may not
                      be used in any malicious, illegal or anti-social activity.
                      We reserve the right to suspend any accounts where a user
                      has supplied{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      with false information.
                    </li>
                  </ul>{" "}
                  &nbsp;
                  <li>
                    <strong>Intellectual Property</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      The data and information contained on the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service, the software used to operate it and the trade
                      marks, logos and other intellectual property used in
                      connection with it are the property of{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>
                      . No license of any such intellectual property rights is
                      granted to you as a result of your use of the{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      service. All the information on the website{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      like careers data, colleges data, assessment tests,
                      assessment reports etc are proprietary of{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      (TheCareerHub) and hence any infringement of copyright
                      would be liable for civil action.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>
                      The Rights of{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>
                    </strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      Please send your emails relating to your registration,
                      purchase and account, including site upgrades. Keep a log
                      file of all searches, which can be made available to data
                      subjects and/or the law enforcement authorities.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>Cookies</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      By accessing our Site, you permit us to put our cookies on
                      your hard disc subject. You may, if you please, refuse
                      cookies sent by us.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>HyperText Links to Third Party Sites</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      may provide, through this Site, links to Web sites
                      operated by others. If you decide to visit any linked
                      site, you will be doing so at your sole risk and it is
                      your responsibility to take all protective measures to
                      guard against viruses or other destructive elements.{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      makes no warranty or representation regarding, and does
                      not endorse, any linked Web sites or the information
                      appearing thereon or any of the products or services
                      described thereon. Links do not imply that{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      or this Site sponsors, endorses, is affiliated or
                      associated with, or is legally authorized to use any
                      trademark, trade name, logo or copyright symbol displayed
                      in or accessible through the links, or that any linked
                      site is authorized to use any trademark, trade name, logo
                      or copyright symbol of{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>
                      .
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>Information Provided By Users</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      You agree that any material, information, and ideas that
                      you transmit to this site shall become the property of{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      No Transmissions shall be treated as confidential and
                      proprietary and{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      shall be under no obligation with regard to such
                      information and shall be free to use, disclose, reproduce
                      or distribute it to others without restriction.{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      shall also be free to use any ideas, concepts, know-how,
                      or techniques contained in such information for any
                      purpose whatsoever. You further agree that{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      may use information about your demographics and use of
                      this site in any manner. You agree, and are hereby put on
                      notice, that you are prohibited from posting or
                      transmitting to or from this Site any unlawful,
                      threatening, libelous, defamatory, inflammatory,
                      pornographic, or profane material or any other material
                      that could give rise to any civil or criminal liability
                      under the law. You are solely responsible for the content
                      of any comments you make.{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      does not solicit information from you for hosting on the
                      website. Any information you send is sent so by you
                      voluntarily and so{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      is not liable to pay you any consideration for hosting the
                      information sent.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>Indemnity</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      In consideration of posting the information sent by users
                      on our website or obtained through the means of a cookie
                      or sent by users; Users undertake to indemnify{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      and keep it indemnified against all proceedings, claims,
                      expenses and liabilities whatsoever which may be taken or
                      made against or incurred by{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      or by reasons of the premises.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>Endorsements</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      All Product and Services marks contained herein that are
                      not{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      or{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      marks are the trademarks of their respective owners.
                      References that we make to any names, marks, products or
                      services of third parties or information do not, unless
                      otherwise indicated, constitute or imply our endorsement,
                      sponsorship or recommendation of the third party,
                      information, product or service.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>Jurisdiction as per Indian Laws</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      These conditions shall be governed by and construed in
                      accordance with Indian laws. All disputes are subject to
                      jurisdiction of the courts of Mumbai, India. This website
                      can be accessed from any place around the world. However,
                      by accessing this website you agree that the laws of
                      India, without regard to rules relating to conflict of
                      laws, will apply to all matters relating to your use of
                      this website. Users of this website accessing it from
                      places outside of India acknowledge that they do so
                      voluntarily and are responsible for complying with local
                      laws.{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>{" "}
                      reserves the right at all times to disclose any
                      information as necessary to satisfy any applicable law,
                      regulation, legal process or governmental request, or to
                      edit, refuse to post or to remove any information or
                      materials, in whole or in part, at the sole discretion of{" "}
                      <Link target="_blank" href="https://www.thecareerhub.com">
                        thecareerhub.com
                      </Link>
                      .
                    </li>
                    <li>
                      These Site Terms and conditions constitute the entire
                      agreement between the parties with respect to the subject
                      matter hereof and this supersedes and replaces all
                      previous or coexisting understandings/agreements,
                      written/oral, with respect to the subject matter. If any
                      of these conditions is determined by a court of competent
                      jurisdiction to be illegal, invalid or otherwise
                      unenforceable, that provision shall be severed from these
                      conditions and the remaining provisions shall continue in
                      full force and effect.
                    </li>
                  </ul>
                  &nbsp;
                  <li>
                    <strong>For any issue or query</strong>
                  </li>
                  <ul className="ul-class">
                    <li>
                      In case the customer has any issue/query he/she will
                      contact on <Link target="_blank" href="tel:+919987422220">9987422220</Link>{" "}
                      number Or send mail on email id{" "}
                      <Link target="_blank" href="mailto:support@thecareerhub.com">
                        support@thecareerhub.com
                      </Link>{" "}
                      and will be resolved on basis of severability of the
                      complaint.
                    </li>
                  </ul>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default BlogList;
