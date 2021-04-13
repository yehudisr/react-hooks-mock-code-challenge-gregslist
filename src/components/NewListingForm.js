import React, {useState} from "react";

function NewListingForm({onAddListing}) {
 const[formData, setFormData]= useState(
  { description: "",
   image:"",
   location: ""}
 )

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event){
     event.preventDefault()

    const newListing = {
      ...formData,
    }

    fetch("http://localhost:6001/listings", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newListing)
    })
    .then(res => res.json())
    .then(onAddListing)
    

  }

  return (
    <div className="new-listing-form">
      <h2>New Listing</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Description" value={formData.description}  onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image}  onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location}  onChange={handleChange} />
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
}

export default NewListingForm;