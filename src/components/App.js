import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import {url} from '../config'

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('');
  const [checked, setCheck] = useState(false)

  useEffect(() => {
    fetch(`${url}/listings`)
    .then(r => r.json())
    .then(setListings)
  }, [])

  const handleDelete = (listingToDeleteID) => {

    fetch(`${url}/listings/${listingToDeleteID}`, {
      method: 'DELETE',
      header: { 
        "Content-Type": "application/json"
      }
    }).then(r => r.json())
      .then(listingDelete => {
        const updatedListings = listings.filter(listing => listing.id !== listingToDeleteID)
        
        return setListings(updatedListings)
      })
  }

  const handleSearch = (e) => setSearch(e)

  const filterListing = listings.filter(listing =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  )

  const handleSort = (e) => setCheck(e.target.value)
  
  const sortListing = [...filterListing].sort((a,b) => a.location.localeCompare(b.location))
    


  return (
    <div className="app">
      <Header checked={checked} handleSort={handleSort} search={search} handleSearch={handleSearch} />
      <ListingsContainer handleDelete={handleDelete} listings={sortListing} />
    </div>
  );
}

export default App;
