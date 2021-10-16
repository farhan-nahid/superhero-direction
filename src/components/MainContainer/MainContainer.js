import React, { useEffect, useState } from "react";
import SingleActor from "../SingleActor/SingleActor";
import TotalCost from "../TotalCost/TotalCost";
import "./MainContainer.css";

const MainContainer = () => {
  const [actors, setActors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);

  const handleSelect = (actor) => {
    setSelectedActors([...selectedActors, actor]);
  };

  useEffect(() => {
    fetch("./bollywoodSuperStars.json")
      .then((res) => res.json())
      .then((data) => setActors(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="main__container container">
      <div className="actors__container">
        {
          // map actors data
          actors.map((actor) => (
            <SingleActor
              key={actor.id}
              actor={actor}
              handleSelect={handleSelect}
            />
          ))
        }
      </div>
      <aside>
        <TotalCost selectedActors={selectedActors} />
      </aside>
    </section>
  );
};

export default MainContainer;
