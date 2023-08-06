import React from "react";
import Layout from "../components/layouts/Layout";

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
          <p>
          Santra Shopy is committed to protecting the privacy and security of its customers' personal information. The company's privacy policy explains how it collects, uses, and protects customers' information.
          Santra Shopy privacy policy is thorough and transparent, providing customers with a clear understanding of how their personal information is collected, used, and shared.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
