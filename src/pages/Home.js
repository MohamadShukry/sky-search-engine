import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SearchBar from "../components/SearchBar";


const Home = () => {
  

  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />

          <AccountCircleIcon />
        </div>
      </div>

      <div className="home__body">
          <div className="home__skyLogoRow">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/02/Sky-Logo.png"
              alt="Sky Logo"
              className="home__skyLogo"
            />
          </div>
        <SearchBar/>
       
      </div>
    </div>
  );
};

export default Home;
