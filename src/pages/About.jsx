import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/aboutus.jpg"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">

            <span style={{color:'#0f6649', fontWeight:'bold'}}>Welcome to E-Cart, where innovation meets convenience! </span>
            Established with a passion for redefining the way you shop, E-Cart was born from the idea that online shopping should be seamless, enjoyable, and rewarding. Our journey started with a simple goal – to connect you with the best products while offering a user-friendly platform that caters to your unique needs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;