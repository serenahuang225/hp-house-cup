import React from "react";
import House from "./House";

export default function HouseCylinders({ houses }) {
  const colors = {
    Gryffindor: "red",
    Slytherin: "green",
    Ravenclaw: "blue",
    Hufflepuff: "yellow",
  };

  return (
    <div className="flex justify-around mb-6">
      {Object.keys(houses).map((house, index) => (
        <div 
          key={house} 
          className="animate-float"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <House
            name={house}
            color={colors[house]}
            points={houses[house].points || 0}
            members={houses[house].members || []}
          />
        </div>
      ))}
    </div>
  );
}
