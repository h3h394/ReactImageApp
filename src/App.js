import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const newImages = (direction) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
      fetchNewData();
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      fetchNewData();
    }
  };

  const fetchNewData = () => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        setCurrentPage(currentPage + 1);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="App">
      <Hero
        images={images}
        isLoading={isLoading}
        setSearch={setSearch}
        newImages={newImages}
      />
    </div>
  );
};

export default App;
