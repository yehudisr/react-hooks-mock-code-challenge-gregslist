import React, {useState} from "react";

function ListingCard({listing: {id, image, description, location}, handleDelete}) {
  const [star, setStar] = useState(false);

  const handleStar = () => setStar(!star)

  const deleteOnClick = () => handleDelete(id)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button onClick={handleStar} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleStar} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={deleteOnClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
