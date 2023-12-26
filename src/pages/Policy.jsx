import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/policy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><span style={{color:'red'}}>* Personal Information:</span> We collect information you provide when you register, make a purchase, or interact with our app. This may include your name, contact details, shipping address, and payment information.</p>
          <p><span style={{color:'red'}}>* Usage Information:</span> We gather data on how you navigate and interact with our app, including device information, IP addresses, and browsing patterns.</p>
          <p><span style={{color:'red'}}>* Cookies: </span>We use cookies and similar technologies to analyze trends, administer the app, and track users' movements around the app.</p>
          <p><span style={{color:'red'}}>* Third Party Services: </span>We may engage third-party services to enhance our app's functionality. These services may have their own privacy policies, and we encourage you to review them.</p>
          <p>Thank you for trusting Us. Your privacy matters, and we are committed to maintaining the trust and confidence you place in us. Happy shopping! </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;