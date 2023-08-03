import React from "react";
import "./SingleCard.css";
import Circle from "../components/Circle";

const SingleCard = ({
  baseToken,
  quoteToken,
  priceNative,
  pairaddress,
  dexId,
  priceUsd,
}) => {
  console.log("Quotetoken", quoteToken, priceNative, priceUsd);
  return (
    <div className="singleCard-container">
      <div className="baisc-info">
        <h3>Basic Info</h3>

        <div className="baisc-info-child">
          <p>Pair Created at</p> <p>Etherium</p>
          <p>Symbol</p>
          <p>ETH</p>
          <p>Dex ID</p> <p>{dexId}</p>
          <p>Pair Address</p> <p>{pairaddress.slice(0, 4)}</p>
        </div>
      </div>
      <div className="base-token">
        <h3>Base Token</h3>
        <div className="base-token-child">
          <p>Name</p>
          <p>{baseToken.name}</p>
          <p>Symbol</p>
          <p>{baseToken.symbol}</p>
          <p>Address</p>
          <p>{baseToken.address.slice(0, 4)}</p>
        </div>
      </div>
      <div className="quote-token">
        <h3>Quote Token</h3>
        <div className="quote-token-child">
          <p>Name</p>
          <p>{quoteToken.name}</p>
          <p>Symbol</p>
          <p>{quoteToken.symbol}</p>
          <p>Address</p>
          <p>{quoteToken.address.slice(0, 4)}</p>
        </div>
      </div>
      <div className="price">
        <h3>Price</h3>
        <div className="price-child">
          <p>Price Native</p>
          <p>{priceNative}</p>
          <p>Price USD</p>
          <p>{priceUsd}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
