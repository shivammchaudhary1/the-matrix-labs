import React from "react";
import "./SingleCard.css";

const SingleCard = ({ baseToken, quoteToken, priceNative, priceUsd }) => {
  console.log("basetoken", baseToken);
  return (
    <div className="singleCard-container">
      <div className="baisc-info">
        <h3>Basic Info</h3>
      </div>
      <div className="base-token">
        <h3>Base Token</h3>
      </div>
      <div className="quote-token">
        <h3>Quote Token</h3>
      </div>
      <div className="price">
        <h3>Price</h3>
      </div>
    </div>
  );
};

export default SingleCard;
