import React from "react";
import Layout from "@theme/Layout";

const Hello = () => {
  return (
    <Layout title="Hello World">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          <code>Page Title</code>
        </p>
      </div>
    </Layout>
  );
};

export default Hello;