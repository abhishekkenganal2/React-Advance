import React from "react";
import AccordianBody from "./AccordianBody";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {/* Accordian Header */}
      <div
        style={{
          width: "70%",
          alignItems: "center",
          background: "#e7e7e7",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          margin: "10px auto",
          borderRadius: "10px",
          boxShadow: "1px 1px 5px #000",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "large" }}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        <AccordianBody items={data.itemCards} />
      </div>
      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
