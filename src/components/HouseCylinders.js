import React from "react";
import House from "./House";
import HouseBanner from "./HouseBanner"

export default function HouseCylinders({ houses }) {
  const banners = {
    Gryffindor: {
      crest: "/gryffindor.png",
      mainColor: "#740001",
      accentColor: "#D3A625",
    },
    Slytherin: {
      crest: "/slytherin.png",
      mainColor: "#1A472A",
      accentColor: "#9da89d",
    },
    Ravenclaw: {
      crest: "/ravenclaw.png",
      mainColor: "#0E1A40",
      accentColor: "#9d9ea8",
    },
    Hufflepuff: {
      crest: "/hufflepuff.png",
      mainColor: "#FFDB00",
      accentColor: "#36260b",
    },
  };

  const [topHouseName, topHouseData] = Object.entries(houses).reduce(
    (max, curr) => (curr[1].points > max[1].points ? curr : max)
  );

  return (
    <div className="flex justify-center mb-6">

      <HouseBanner
        houseName={topHouseName}
        mainColor={banners[topHouseName].mainColor}
        accentColor={banners[topHouseName].accentColor}
      />
    
      {Object.keys(houses).map((house, index) => (
        <div 
          key={house} 
          className="animate-float"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <House
            name={house}
            points={houses[house].points || 0}
            members={houses[house].members || []}
          />
        </div>
      ))}

      <HouseBanner
        houseName={topHouseName}
        mainColor={banners[topHouseName].mainColor}
        accentColor={banners[topHouseName].accentColor}
      />
      
    </div>
  );
}
