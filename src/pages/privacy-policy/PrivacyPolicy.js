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
        <HtmlHeader title="Privacy Policy" description="Privacy Policy" />
        <Header />
        <PageHeading headingmain="Privacy Policy" />
        <div className="section3 mb-3 mt-3 pt-5 pb-5">
          <div className="container padding-left-right">
            <div className="row ">
                <div class="col-md-12">
                    <p>(a) This Privacy Policy (“Policy”) outlines TheCareerHub’s (“TheCareerHub”, “we”, or “us”) practice in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access our website <a href="https://www.thecareerhub.com">thecareerhub.com</a>, or personal data that we may have access to in relation to your use of Platform and access to our range of financial products and services (collectively, “Services”).</p>
                    <p>(b) At TheCareerHub, we are committed to protecting your personal data and respecting your privacy. Please read the following terms of the Policy carefully to understand our practices regarding your personal data and how we will treat it. This policy sets out the basis on which any personal data we collect from you or about you, or that you provide to us, will be processed by us.</p>
                    <p>(c) Capitalised words in the Policy shall have the same meaning ascribed to them in the Terms of Service (“Terms”), available at [<a href="https://www.thecareerhub.com/terms-and-services">link</a>] Please read this Policy in consonance with the Terms.</p>
                    <p>(d) By using the Platform, you consent to the collection, storage, use, and disclosure of your personal data, in accordance with, and are agreeing to be bound by this Policy. We will not collect any information from you, except where it is knowingly and explicitly provided by you.</p>
                    <p>(e) This Policy together with any terms of the arrangement we have with you applies to your use of the Services.</p>
                </div>
                <div class="col-md-12">
                    <p>1.&nbsp;<strong>THE DATA WE COLLECT ABOUT YOU</strong></p>
                    <p>(a) Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed – for example, anonymous data.</p>

                    <p>(b) We may collect, use, store and transfer different kinds of personal data about you to provide you with or in connection with the Services, that you may choose to provide to us. Such personal data includes:</p>

                    <p>(i) Data pertaining to your identity and related data, such as your first and last name, username or similar identifiers, gender, title, passwords, purchases or orders of or through our Services, feedback, survey responses, etc.;</p>

                    <p>(ii) Contact data, including email addresses, phone numbers, delivery addresses, business addresses, social media information, etc.;</p>

                    <p>(iii) Transaction data, including details about payments to and from you and details of the services you have purchased;</p>

                    <p>(iv) Financial data, including the details of the financial products you have availed via the Platform, bank account information, payment methods, and card details;</p>
                    <p>(v) Device data, including but not limited to:</p>

                    <ul>
                        <li> SMS – SMSs containing financial transaction data;</li>
                        <li>  Location – location data recorded on your device;</li>
                        <li> Device Information – including hardware model, operating system and version, IMEI and serial numbers; user profile information, IP addresses, browser types and versions, time zone settings, Wi-Fi and mobile networks;</li>
                        <li> Contacts – contact information stored on your device; and</li>
                        <li>Accounts – list of accounts logged into from your device.</li>
                    </ul>

                    <p>(vi) Usage data, including information about how you use our Services; and</p>

                    <p>(vii) Marketing and communications data, including your preferences in receiving marketing from us and our third parties and your communication preferences.</p>

                    <p>(c) We also collect, use, and share aggregated data such as statistical data, financial or credit information for any purpose. Aggregated data could be derived from your personal data but is not considered personal data under applicable laws. For example, we may aggregate your usage data to calculate the percentage of users accessing a specific feature of the Services. However, if we combine or connect aggregated data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this Policy.</p>

                    <p>(d) Where we need to collect personal data by law, or under the terms of the arrangement we have with you, and if you fail to provide that data as and when requested by us, we may not be able to perform our obligations under the arrangement we have with you or are trying to enter into with you (for example, to provide you with features of the Services). In this case, we may have to cancel or limit your access to the Services, but we will notify you if this is the case at the time.</p>

                    <p>2.&nbsp;<strong>HOW YOUR PERSONAL DATA IS COLLECTED</strong></p>

                    <p>(a) We use different methods to collect and process data about you.</p>

                    <p>(i) Information you give us–This is the information (including identity, contact, and marketing and communications data) you consent to giving us about you when you use our Services or by corresponding with us (for example, by email or chat). It includes information you provide when you register to use the Services, use an in-Platform feature, or share data through the Services, through other activities commonly carried out in connection with the Services, and when you report a problem with the Platform and our Services. If you contact us, we will keep a record of the information shared during the correspondence.</p>

                    <p>(ii) Information we collect about you and your device – Each time you visit our Platform or use one of our Services, we will automatically collect personal data including device and usage data. We collect this data using cookies and other similar technologies.</p>

                    <p>(iii) Information we receive from other sources including third parties and publicly available sources – We will receive personal data about you from various third parties and public sources as set out below:</p>

                    <ul>
                        <li> Analytics providers such as Google and Facebook;</li>
                        <li>Advertising networks;</li>
                        <li>Search information providers;</li>
                        <li>Identity and contact data from data brokers, aggregators or social networks; and</li>
                        <li> Identity and contact data from publicly available sources.</li>
                    </ul>
                    
                    <p>3.&nbsp;<strong>AUTHENTICITY OF INFORMATION</strong></p>

                    <p>(a)We have taken all reasonable steps to ensure that the information on the Platform is authentic.</p>

                    <p>(b) You agree that the information and personal data you provide us with are true, correct, and accurate. We shall not be liable for any incorrect or false information or personal data that you might provide.</p>

                    <p>(c) You may review the information and personal data that you have provided during your use of the Platform and choose to correct or modify the same. You may do so by writing to us or our Grievance Officer at the address provided in Section 12 of this Policy.</p>

                    <p>4.&nbsp;<strong>HOW WE USE YOUR PERSONAL DATA AND FOR WHAT PURPOSES</strong></p>

                    <p>(a) We will only use your personal data as the law allows us to. Most commonly, we will use your personal data to provide you with the Services, or where we need to comply with a legal obligation.</p>

                    <p>(b) You understand that when you consent to providing us with your personal data, you also consent to us sharing such data with third parties. You are aware that by using our Services on the Platform, you authorise us, our associate partners, and affiliates to contact you via email, phone, or otherwise. This is to ensure that you are aware of all the features of the Services.</p>

        
                    <p>(c) You are aware that any and all information pertaining to you, whether or not you directly provide it to us (via the Services or otherwise), including but not limited to personal correspondence such as emails, instructions from you etc., may be collected, compiled, and shared by us in order to provide the Services to you and you expressly authorise us to do so. This may include but not be limited to storage providers, marketing partners, data analytics providers, consultants, lawyers, and auditors. We may also share this information with our subsidiaries, affiliates, or any of their holding companies.</p>

        
                    <p>(d) You agree and acknowledge that we may share data without your consent, when it is required by law or by any court or government agency or authority to disclose such information. Such disclosures are made in good faith and belief that it is reasonably necessary to do so for enforcing this Policy or the terms of the arrangement we have with you, or in order to comply with any applicable laws and regulations.</p>

                    <p>(e) In general, we will not disclose personal data except in accordance with the following purpose/activity:</p>

                    <p>(i) to install the Platform and register you as a user;</p>

                    <p>(ii) to deliver Services and prepare quarterly statements for account maintenance;</p>

                    <p>(iii)to manage our relationship with you including notifying you of changes to any Services;</p>

                    <p>(iv) to administer and protect our business and the Services including troubleshooting, data analysis and system testing;</p>

                    <p>(v) to deliver content and advertisements to you;</p>

                    <p>(vi) to make recommendations to you about products, services, rewards, discounts or other benefits which may interest you;</p>

                    <p>(vii)to measure and analyse the effectiveness of the advertising we serve you through means which include surveys, contests and promotions;</p>

                    <p>(viii) to monitor trends so we can improve the Services;</p>
                    
                    <p>(ix)to perform our obligations that arise out of the arrangement we are about to enter or have entered with you;</p>

                    <p>(x)to enforce the terms of the arrangements we have with you;</p>

                    <p>(xi) where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; and</p>

                    <p>(xii) to comply with a legal or regulatory obligation.</p>

                    <p>(f) You authorise us to send you electronic alerts and messages for details pertaining to registration on the Platform, requirements arising out of the provision of Services, and advertising.</p>

                    <p>(g) Further, you agree to receive promotional and other emails and other forms of communication from us. Through such communication you will receive information about the latest developments on the Services. You may unsubscribe from our mailing list at any time, via the unsubscribe option we offer.</p>

                    <p>5.&nbsp;<strong>TRANSFER OF PERSONAL DATA</strong></p>

                    <p>(a) As a part of your use of the Services, the information and personal data you provide to us may be transferred to and stored at countries other than India (subject to applicable laws). This may happen if any of our servers are from time to time located in a country other than India, or one of our service providers is located in a country other than India. We may also share information with entities of countries other than India. These countries shall be subject to data laws of their respective countries.</p>

                    <p>(b) If you use the Services while you are outside India, your information may be transferred, subject to applicable law, to a country other than India in order to provide you with the Services.</p>

                    <p>(c) By submitting your information and personal data to us, you agree to the transfer, storage, and/or processing of such information and personal data outside India in the manner described above.</p>

                    <p>6.&nbsp;<strong>THIRD PARTY SERVICES</strong></p>

                    <p>(a) Our Services may, from time to time, contain services provided by or links to and from the websites of our partner networks, advertisers and affiliates (“Third Party Services”). Please note that the Third Party Services that may be accessible through our Services have their own privacy policies. We do not accept any responsibility or liability for the policies or for any personal data that may be collected through the Third Party Services. Please check their policies before you submit any personal data to such websites or use their services.</p>

                    <p>(b) We use third-party user experience improvement services (including but not limited to those provided by Google Inc. and/or its affiliates) and applications to better understand your behaviour on the Services.</p>

                    <p>(c) Your relationship with these third parties and their services and tools is independent of your relationship with us. These third parties may allow you to permit/restrict the information that is collected. It may be in your interest to individually restrict or enable such data collections.</p>

                    <p>(d) The place of processing information depends on each third-party service provider and you may wish to check the privacy policy of each of the service providers to identify the data shared and its purpose. You will be subject to a third party’s privacy policy if you opt in to receive communications from third parties. We will not be responsible for the privacy standards and practices of third parties.</p>

                    <p>(e) We may share your personal information with our parent company, subsidiaries, joint ventures, or other companies under a common control (“Affiliates”) that we may have now or in the future, in which case we will require them to honor this Policy.</p>

                    <p>7.&nbsp;<strong>COOKIES</strong></p>

                    <p>(a) We use cookies and/or other tracking technologies to distinguish you from other users of the Services and to remember your preferences. This helps us to provide you with a good experience when you use our Services and also allows us to improve the Services.</p>

                    <p>(b) We collect data by way of ‘cookies’. Cookies are small data files which are sent to your browser from the Platform and are stored on your computer or device (hard drive). The cookies shall not provide access to data in your computer or device such as email addresses or any other data that can be traced to you personally. The data collected by way of cookies will allow us to administer the Services and provide you with a tailored and user-friendly service. The cookies shall enable you to access certain features of the Services. Most web browsers and devices can be set to notify when you receive a cookie or prevent cookies from being sent. If you do prevent cookies from being sent, it may limit the functionality that we can provide when you visit the Platform or try to access some of the Services.</p>

                    <p>(c) Additionally, you may encounter cookies or other similar devices on certain pages of the Services that are placed by third parties. We do not control the use of cookies by third parties. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities in relation to the Services, we may collect such information into a file specific to you.</p>

                    <p>8.&nbsp;<strong>DATA SECURITY</strong></p>

                    <p>(a) We implement certain security measures including encryption and firewalls to protect your personal information from unauthorised access and such security measures are in compliance with the security practices and procedures as prescribed under the Information Technology Act, 2000 and the applicable rules (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information Rules, 2011). However, you agree and acknowledge that the above-mentioned measures do not guarantee absolute protection to the personal information and by accessing the Services, you agree to assume all risks associated with disclosure of personal information arising due to breach of firewalls and secure server software.</p>

                    <p>(b) Where we have given you (or where you have chosen) a password that enables you to access certain parts of the Services, you are responsible for keeping this password confidential. We ask you not to share the password with anyone.</p>

                    <p>(c) We will comply with the requirements under the Information Technology Act, 2000 and the rules made thereunder in the event of a data or security risk.</p>

                    <p>9.&nbsp;<strong>DATA RETENTION</strong></p>

                    <p>You are aware that your personal data will continue to be stored and retained by us for a reasonable period after termination of your use of our Services on the Platform.</p>

                    <p>9.&nbsp;<strong>BUSINESS TRANSITIONS</strong></p>

                    <p>You are aware that in the event we go through a business transition, such as a merger, acquisition by another organisation, or sale of all or a portion of our assets, your personal data might be among the assets transferred.</p>

                    <p>10.&nbsp;<strong>BUSINESS TRANSITIONS</strong></p>

                    <p>You are aware that in the event we go through a business transition, such as a merger, acquisition by another organisation, or sale of all or a portion of our assets, your personal data might be among the assets transferred.</p>

                    <p>11.&nbsp;<strong>CHANGE IN PRIVACY POLICY</strong></p>

                    <p>(a) We keep our Policy under regular review and may amend this Policy from time to time, at our sole discretion.</p>

                    <p>(b) The terms of this Policy may change and if it does, these changes will be posted on this page and, where appropriate, notified to you by email. The new Policy may be displayed on-screen and you may be required to read and accept the changes to continue your use of the Services.</p>

                    <p>12.&nbsp;<strong>GRIEVANCE OFFICER</strong></p>

                    <p>You may contact us at <a href="mailto:support@thecareerhub.com">support@thecareerhub.com</a>. with any enquiry relating to this Policy or an enquiry relating to your personal information (including reviewing or updating). You can also do so by writing to our Grievance Officer, established in accordance with the Information Technology Act, 2000 and rules made thereunder, at the address provided below:</p>
                    <p>Name: [_Manish Naidu_]</p>
                    <p>Address: [_TheCareerHub Head office: A 101, Suchita Enclave, Jai Maharashtra Nagar, Off Chandavarkar Road, Borivali West, Mumbai, Maharashtra (400092)</p>
                    <p>Email Address: [_<a href="mailto:support@thecareerhub.com">support@thecareerhub.com</a>_]</p>
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
