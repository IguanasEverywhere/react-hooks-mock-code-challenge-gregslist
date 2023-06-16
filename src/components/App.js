import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Form from './Form';

function App() {

  const [allListings, setAllListings] = useState([]);
  const [listingsToDisplay, setListingsToDisplay] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  function removeItemFromListing(id) {
    const listingsAfterDelete = listingsToDisplay.filter((listing) => listing.id !== id);
    setListingsToDisplay(listingsAfterDelete);
    setAllListings(allListings.filter((listing) => listing.id !== id));
  }

  function filterSearchResults(searchQuery) {
    const searchResults = allListings.filter(listing => listing.description.includes(searchQuery));
    setListingsToDisplay(searchResults);
  }

  function sortListings() {
    setIsSorted(!isSorted);
  }

  function addItem(newItem) {
    fetch('http://localhost:6001/listings/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(r => r.json())
    .then(newPost => {
      setAllListings([...allListings, newPost])
      setListingsToDisplay([...listingsToDisplay, newPost])
    })
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(listings => {
        setListingsToDisplay(listings);
        setAllListings(listings);
      }
      )
  }, [])

  return (
    <div className="app">
      <Header
        filterSearchResults={filterSearchResults}
        sortListings={sortListings}
        isSorted={isSorted}
      />
      <ListingsContainer
        listingsToDisplay={listingsToDisplay}
        removeItemFromListing={removeItemFromListing}
        isSorted={isSorted}
      />
      <Form addItem={addItem}/>
    </div>
  );
}

export default App;
