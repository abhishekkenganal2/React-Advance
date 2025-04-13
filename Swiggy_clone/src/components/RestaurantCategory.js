import React, { useState } from "react";
import AccordianBody from "./AccordianBody";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordian Header */}
      <div
        style={{
          width: "70%",
          alignItems: "center",
          background: "rgb(249 249 249)",
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
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <span style={{ fontWeight: "bold", fontSize: "large" }}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian Body */}
        {showItem && <AccordianBody items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
