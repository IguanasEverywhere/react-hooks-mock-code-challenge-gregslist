import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsToDisplay, removeItemFromListing }) {

  const listingsAsCards = listingsToDisplay.map((listing) =>
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
