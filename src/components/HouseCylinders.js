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
      {Object.keys(houses).map((house) => (
        <House
          key={house}
          name={house}
          color={colors[house]}
          points={houses[house].points || 0}
          members={houses[house].members || []}
        />
      ))}
    </div>
  );
}
