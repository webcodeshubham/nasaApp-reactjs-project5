import React, { useState, useEffect } from "react";
import "../assets/css/style.css";

const Card = (props) => {
  function truncate(str, n) {
    // substr is a method here,which takes inital and last index of the string.
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      {props.articles.map((article) => {
        return (
          <>
            <div className="blog-card" key={article[0]}>
              <div className="blog-img">
                <img src={article[10]} alt="tech-1" />
              </div>
              <div className="blog-detail">
                <h2>{article[2]}</h2>
                <p>{truncate(article[3], 250)}</p>
                <div className="btns">
                  <button id="read-btn">Read More</button>
                  <button id="wish-btn">+ Add to Wishlist</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
