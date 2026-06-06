import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State to store all plants fetched from backend
  const [plants, setPlants] = useState([]);
  //state to store search input value
  const [search, setSearch] = useState("");
//fetch plants from backend when component first loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data)); // save fetched plants into state
  }, []);

  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
        {/* Form for adding a new plant */}
      <NewPlantForm plants={plants} setPlants={setPlants} />
        {/* Search input for filtering plants */}
      <Search search={search} setSearch={setSearch} />
      {/* List of plants filtered / full list */}
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;