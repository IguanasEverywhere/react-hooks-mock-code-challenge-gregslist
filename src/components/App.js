import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsToDisplay, setListingsToDisplay] = useState([]);

  console.log('listingsToDisplay is', listingsToDisplay)

  const allListings = listingsToDisplay;

  function removeItemFromListing(id) {
    const listingsAfterDelete = listingsToDisplay.filter((listing) => listing.id !== id);
    setListingsToDisplay(listingsAfterDelete);
  }

  function filterSearchResults(searchQuery) {
    const searchResults = allListings.filter(listing => listing.description.includes(searchQuery));
    setListingsToDisplay(searchResults);
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(listings => setListingsToDisplay(listings))
  }, [])

  return (
    <div className="app">
      <Header filterSearchResults={filterSearchResults}/>
      <ListingsContainer
        listingsToDisplay={listingsToDisplay}
        removeItemFromListing={removeItemFromListing}
      />
    </div>
  );
}

export default App;
