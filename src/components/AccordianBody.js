import React from 'react'

const AccordianBody = ({items}) => {
    console.log(items)
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {items.map((item) => (
            <div
            style={{
                width: "9   0%",
                margin:'10px',
                boxShadow: "1px 1px 5px #000",
                borderRadius: "10px",
                padding: "5px",
                float: "left",
            }}
            key={item.card.info.id}
            >
            <span style={{ }}>{item.card.info.name}</span>
            <p style={{ }}>
                Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p>{item.card.info.description}</p>
            </div>
        ))}
    </div>
  )
}

export default AccordianBody