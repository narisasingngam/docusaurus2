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
          Edit <code>pages/hello.js</code> and save to reload.
        <div className="item shadow--tl">Tall Elevation</div>
        </p>
      </div>
    </Layout>
  );
};

export default Hello;
