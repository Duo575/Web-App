import React from "react";

const FrameworksSectionSimple: React.FC = () => {
  return (
    <section
      style={{ padding: "50px", backgroundColor: "#101010", color: "white" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Powering your favorite frameworks and tools
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "96px",
            height: "96px",
            backgroundColor: "#181818",
            border: "1px solid rgba(38, 38, 38, 0.7)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Test 1
        </div>
        <div
          style={{
            width: "96px",
            height: "96px",
            backgroundColor: "#181818",
            border: "1px solid rgba(38, 38, 38, 0.7)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Test 2
        </div>
      </div>
    </section>
  );
};

export default FrameworksSectionSimple;
