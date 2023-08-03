import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import SideBar from "../components/sidebar/SideBar";
import axios from "axios";
import SingleCard from "./SingleCard";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [token, setToken] = useState("");
  const [debouncedToken, setDebouncedToken] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setDebouncedToken(token);
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, [token]);

  useEffect(() => {
    if (debouncedToken.trim() !== "") {
      setLoading(true);
      fetchData(debouncedToken);
    } else {
      setData(null);
      setLoading(false);
    }
  }, [debouncedToken]);

  const handleInputChange = (e) => {
    setToken(e.target.value);
  };

  const fetchData = async (
    tkn = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
  ) => {
    try {
      const endpoint = `https://api.dexscreener.com/latest/dex/tokens/${tkn}`;
      const res = await axios.get(endpoint);
      setData(res.data.pairs);
      console.log(res.data.pairs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="LandingPage-container">
        <SideBar />
        <div className="LandingPage-child-container">
          <div className="searchbar_container">
            <input
              type="text"
              placeholder="Search"
              value={token}
              onChange={handleInputChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              {/* ... SVG path data ... */}
            </svg>
          </div>
          <div className="button_container">
            <button>Connect</button>
          </div>
        </div>

        <div className="searchResults">
          {loading ? (
            <div className="loader">Loading...</div>
          ) : (
            data && (
              <div className="cards-container">
                {data.map((e) => (
                  <SingleCard
                    key={e.id}
                    baseToken={e.baseToken}
                    quoteToken={e.quoteToken}
                    priceNative={e.priceNative}
                    priceUsd={e.priceUsd}
                    pairaddress={e.pairAddress}
                    dexId={e.dexId}
                  />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
