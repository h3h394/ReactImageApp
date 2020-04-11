import React, { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${search}&image_type=photo&per_page=195&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="App">
      <Hero images={images} isLoading={isLoading} setSearch={setSearch} />
    </div>
  );
};

export default App;
