import "./styles.css";
import { useState, useEffect } from "react";
import Card from "../src/Card/Card";
import Searchbar from "./Searchbar/Searchbar";
function App() {
  const [giffy, setGiffy] = useState([]);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setGiffy(data);
  };

  useEffect(() => {
    console.log("helloooo");
    fetchData(
      "https://api.giphy.com/v1/gifs/trending?api_key=WIYcL1vlShmpWUXHkF6fvvi15Xp9T9xk&limit=30"
    );
  }, []);
  console.log(giffy);

  function handleClick(text) {
    const searchUrl = `https://api.giphy.com/v1/gifs/search?q=${text}&api_key=WIYcL1vlShmpWUXHkF6fvvi15Xp9T9xk&limit=5`;
    fetchData(searchUrl);
  }

  return (
    <div>
      <h1>Find that Gif</h1>
      <Searchbar handleClick={handleClick} />

      <ul>
        {giffy.data?.length > 0 &&
          giffy.data.map((gif) => {
            return <Card gif={gif.images.original.url} />;
          })}
      </ul>
    </div>
  );
}

export default App;
