import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import planeLogo from "../assets/icons/plane-logo.svg";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.nasa.gov/techtransfer/patent/?engine&api_key=vyOzUpQ1WCREoCppLkqibA8zRj83t2oksG4ZT6Ck";

const Search = ({ addArticleHandler, articles, setSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(searchTerm);

  articles.map((article) => {
    const articleTitle = article[2];
  });

  const searchArticles = async (articles) => {
    const response = await fetch(`${API_URL}&s=${articles[1][0]}`);
    const data = await response.json();
    console.log(data.results);
    addArticleHandler(data[0]);
  };

  // useEffect(() => {
  //   searchArticles("");
  // }, []);

  return (
    <>
      <section className="search">
        <p>PATENT PORTFOLIO</p>
        <div className="pat-desc flex justify-start align-cntr">
          <div className="plane-logo">
            <img src={planeLogo} alt="plane-logo" />
          </div>
          <div className="desc">
            <h2>AEROSPACE</h2>
            <span>
              The design, construction and operation of aircraft based on the
              scientific study or art of flight.
            </span>
          </div>
        </div>
        <div className="search-box flex justify-end align-cntr">
          <input
            type="text"
            name="tech-solution"
            id="tech-solution"
            placeholder="Enter Technology-Driven Solutions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <Link to="/"> */}
          <span onClick={() => setSearch(searchTerm)}>GO</span>
          {/* </Link> */}
        </div>
      </section>
    </>
  );
};

export default Search;

const object = {
  1: 2,
  3: 3,
  3: 3,
  6: 3,
  7: 3,
};
