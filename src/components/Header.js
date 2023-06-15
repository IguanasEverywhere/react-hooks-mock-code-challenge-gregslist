import React from "react";
import Search from "./Search";

function Header({ filterSearchResults }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterSearchResults={filterSearchResults} />
    </header>
  );
}

export default Header;
