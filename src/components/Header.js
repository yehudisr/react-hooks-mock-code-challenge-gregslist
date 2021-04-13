import React from "react";
import Search from "./Search";

function Header({checked, handleSort, search, handleSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search checked={checked} handleSort={handleSort} handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
