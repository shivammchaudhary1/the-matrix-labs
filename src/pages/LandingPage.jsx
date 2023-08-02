import React from "react";
import "./LandingPage.css";
import SideBar from "../components/sidebar/SideBar";
import Button from "../components/button/Button";
import SearchBar from "../components/search/SearchBar";

const LandingPage = () => {
  return (
    <>
      <div className="LandingPage-container">
        <SideBar />
        <div className="LandingPage-child-container">
          <SearchBar />
          <Button />
        </div>
        <div className="searchResults"></div>
      </div>
    </>
  );
};

export default LandingPage;
