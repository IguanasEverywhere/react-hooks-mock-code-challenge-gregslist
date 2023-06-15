import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsToDisplay, removeItemFromListing, isSorted }) {

  function sortByLocation(a, b) {
    if (a.location.toLowerCase() > b.location.toLowerCase()) {
      return 1;
    }
    if (a.location.toLowerCase() < b.location.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  const sortedListings = [...listingsToDisplay];
  sortedListings.sort(sortByLocation);

  let dataToDisplay = isSorted ? sortedListings : listingsToDisplay;

  const listingsAsCards = dataToDisplay.map((listing) =>
    <ListingCard
      key={listing.id}
      id={listing.id}
      description={listing.description}
      image={listing.image}
      location={listing.location}
      removeItemFromListing={removeItemFromListing}
    />)
  return (
    <main>
      <ul className="cards">
        {listingsAsCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
