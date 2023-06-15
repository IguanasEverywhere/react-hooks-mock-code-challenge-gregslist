import React from "react";
import Search from "./Search";

function Header({ filterSearchResults, sortListings, isSorted }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterSearchResults={filterSearchResults} />
      <button onClick={sortListings}>{isSorted ? 'Unsort' : 'Sort By Location'}</button>
    </header>
  );
}

export default Header;
