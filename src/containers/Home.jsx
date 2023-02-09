import React, { useState, useEffect } from "react";
import "../assets/css/style.css";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    getData()
    
  }, [search]);
  // console.log();


  async function getData (){
    await axios
    .get(
      `https://api.nasa.gov/techtransfer/patent/?engine&api_key=vyOzUpQ1WCREoCppLkqibA8zRj83t2oksG4ZT6Ck&s=${search}`
    )
    .then((res) => {
      setArticles(res.data.results);
    });
  }

  const addArticleHandler = async (article) => {
    setArticles([...articles, article ]);
  };

  return (
    <>
      <div className="container">
        <Header />
        <Search articles={articles} addArticleHandler={addArticleHandler} setSearch={setSearch}/>
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
