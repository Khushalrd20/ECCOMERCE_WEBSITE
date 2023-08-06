import React from "react";
import Layout from "../components/layouts/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          To make the shopping experience even more convenient, our app offers features such as fast and free shipping, easy returns, and 24/7 customer support. Customers can track their orders in real-time and receive notifications when their packages are shipped and delivered.
          our shopping app provides a convenient and personalized shopping experience for customers. With its user-friendly interface, fast and secure payment options, and exceptional customer service, it's an excellent option for people who want to shop from their mobile devices.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
