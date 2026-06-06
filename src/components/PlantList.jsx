import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  return (
    <ul className="cards">
       {/* Loop through plants and render each PlantCard */}
      {plants.map((plant) => (
        <PlantCard key={plant.id}  plant={plant}/>
      ))}
    </ul>
  );
}

export default PlantList;