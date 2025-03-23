import React from "react";
import { CDN_url } from "../utils/data";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const AccordianBody = ({ items }) => {

  const dispatch = useDispatch()

  const handleAdd = (item) => {
    // dispatch / update a action
    dispatch(addItem(item))
  }

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
              <button className="rounded-md mx-5 font-bold px-5 py-1 text-green-500 bg-white" onClick={() => handleAdd(item)}>
                ADD
              </button>
            </div>
          </div>
          <div style={{width:'80%'}}>
            <h4 className="font-bold">{item.card.info.name}</h4>
            <p className="text-green-500 font-bold">
              Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <br/>
            <p>{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordianBody;
