import React, { useState } from "react";

function PlantCard({ plant }) {
    // Local state to track stock status 
  const [inStock, setInStock] = useState(true);

  return (
    <li className="card" data-testid="plant-item">
        {/* Plant image */}
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>
        {/* Toggle stock status */}
      {inStock ? (
        <button
          className="primary"
          onClick={() => setInStock(false)}
        >
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;