import React from "react";
import { CDN_url } from "../utils/data";

const AccordianBody = ({ items }) => {
  console.log(items);
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", fontFamily:'sans-serif' }}>
      {items.map((item) => (
        <div
          style={{
            margin: "10px",
            borderBottom:'2px solid grey',
            padding: "5px",
            float: "left",
          }}
          key={item.card.info.id}
        >
          <div style={{ float: "right" }}>
            <img
              src={CDN_url + item.card.info.imageId}
              style={{ width: "150px",height:'130px',borderRadius:'20px' }}
            />
            <div style={{margin:'-20px 0px 0 20px'}}>
              <button
                style={{
                  height: "30px",
                  width: "100px",
                  borderRadius: "10px",
                  border: "none",
                  fontWeight:'600',
                  color: "Green",
                  margin: "0 0 0 0px",
                  cursor:'pointer'
                }}
              >
                ADD
              </button>
            </div>
          </div>
          <div>
            <span style={{ fontWeight: "600" }}>{item.card.info.name}</span>
            <p style={{ fontWeight: "600" }}>
              Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p>{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianBody;
