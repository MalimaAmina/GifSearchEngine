import React, { useState } from "react";

const SearchBar = ({ handleClick }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="search"
        placeholder="Search product"
      />

      <div>
        <button onClick={() => handleClick(search)}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
