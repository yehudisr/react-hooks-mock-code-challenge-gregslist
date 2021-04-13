import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm"
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

  function handleSort(){
    setCheck(checked => !checked)
  }
  
  const sortListing = () => {
    if(checked) {
    return [...filterListing].sort((a,b) => a.location.localeCompare(b.location))
    } else {
     return  [...filterListing]
    }
  }

  function handleAddListing(newListing){
    setListings([...listings, newListing])
  }

console.log(sortListing())
  return (
    <div className="app">
      <Header checked={checked} handleSort={handleSort} search={search} handleSearch={handleSearch} />
      <NewListingForm onAddListing={handleAddListing}/>
      <ListingsContainer handleDelete={handleDelete} listings={sortListing()} />
    </div>
  );
}

export default App;
