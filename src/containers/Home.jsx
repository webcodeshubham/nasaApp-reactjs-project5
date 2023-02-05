import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/techtransfer/patent/?engine&api_key=vyOzUpQ1WCREoCppLkqibA8zRj83t2oksG4ZT6Ck"
      )
      .then((res) => {
        setArticles(res.data.results);
      });
    return;
  }, []);
  console.log();

  const addArticleHandler = async (article) => {
    setArticles([...articles, article ]);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Search articles={articles} addArticleHandler={addArticleHandler}/>
        <hr style={{ color: "white", size: 20, borderStyle: "solid" }} />
        <main>
          <div className="main-box grid g-col">
            <Card articles={articles} />
          </div>
          <div className="pat-btn">
            <button id="patent-btn">View more patents</button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
