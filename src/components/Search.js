import React from "react";

function Search({checked, handleSort, search, handleSearch}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        <span>sort by location</span>
        <input
          type="checkbox"
          id="checkbox"
          value={checked}
          onChange={(e) => handleSort(e)}
        />

      </div>
    </form>
  );
}

export default Search;
