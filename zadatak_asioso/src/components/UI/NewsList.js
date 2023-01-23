import React, { useEffect, useState } from "react";
import Axios from "axios";
import Newsitem from "./Newsitem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/everything?q=it&from=2023-01-20&pageSize=3&sortBy=publishedAt&apiKey=7c43e3361aa641148eafae53e57d376b"
      );

      setArticles(res.data.articles);
      console.log(res);
    };

    getArticles();
  }, []);

  return (
    <div className="NewsSection">
      {
        articles.map(({ title, description, url, urlToImage }) => (
          <Newsitem
            key={Math.random()}
            title={title}
            description={description}
            url={url}
            urlToImage={urlToImage}
          />
        ))
      }
    </div >
  );
};

export default NewsList;