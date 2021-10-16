import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./TotalCost.css";

const TotalCost = ({ selectedActors }) => {
  let totalCost = 0;

  for (const actor of selectedActors) {
    totalCost = totalCost + actor.salary;
  }

  return (
    <>
      <div className="total__cost">
        <h1>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          Players Added: {selectedActors.length}
        </h1>
        <h4>Total Cost: {totalCost} ৳</h4>
      </div>
      <div className="selected__actors">
        {
          // map selected actors
          selectedActors.map((actor, index) => (
            <div key={index} className="single__actor">
              <img src={actor.photo} alt={actor.name} />
              <h5>{actor.name}</h5>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default TotalCost;
