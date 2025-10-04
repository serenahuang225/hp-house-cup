import React from "react";
import MembersHouse from "./MembersHouse";

export default function House({ name, color, points, members }) {
  // Hourglass height scaling (max 1000 points = full bottom bulb height)
  const maxPoints = 1000;
  const heightPercent = Math.min(80, (points / maxPoints) * 80); // 80% max for bottom bulb

  // Map house names to gem types and colors
  const houseGemTypes = {
    Gryffindor: "gem-ruby",
    Slytherin: "gem-emerald", 
    Ravenclaw: "gem-sapphire",
    Hufflepuff: "gem-diamond"
  };

  const houseColorClasses = {
    Gryffindor: "bg-gryffindor-500",
    Slytherin: "bg-slytherin-500", 
    Ravenclaw: "bg-ravenclaw-500",
    Hufflepuff: "bg-hufflepuff-500"
  };

  // Generate random gems for the storage area
  const generateGems = () => {
    const gems = [];
    const gemCount = 50 + Math.floor(Math.random() * 25); // 50-75 gems
    
    for (let i = 0; i < gemCount; i++) {
      gems.push({
        id: i,
        size: 4 + Math.random() * 6, // 4-10px
        left: Math.random() * 80 + 10, // 10-90%
        top: Math.random() * 80 + 10, // 10-90%
        delay: Math.random() * 3 // 0-3s animation delay
      });
    }
    return gems;
  };

  const gems = generateGems();

  return (
    <div>
      <div className="flex flex-col items-center mx-2">
        {/* Brass base */}
        <div className="brass-base w-20 h-2 -mb-1 z-10"></div>
        
        {/* Main hourglass glass tube container */}
        <div className="glass-tube">
          {/* Brass support rings for hourglass shape */}
          <div className="brass-ring w-20 h-1 top-2 -left-2 z-10"></div>
          <div className="brass-ring w-20 h-1 top-20 -left-2 z-10"></div>
          <div className="brass-ring w-20 h-1 top-60 -left-2 z-10"></div>

          {/* Gem storage area (top 20% - top bulb) */}
          <div className="gem-storage">
            {gems.map((gem) => (
              <div
                key={gem.id}
                className={`gem ${houseGemTypes[name] || 'gem-ruby'}`}
                style={{
                  width: `${gem.size}px`,
                  height: `${gem.size}px`,
                  left: `${gem.left}%`,
                  top: `${gem.top}%`,
                  animationDelay: `${gem.delay}s`
                }}
              />
            ))}
          </div>

          {/* Points display area (bottom 80% - bottom bulb) */}
          <div
            className={`points-area ${houseColorClasses[name] || 'bg-gray-500'}`}
            style={{ height: `${heightPercent}%` }}
          />
        </div>
        <div className="brass-base w-20 h-2 top-[254px]"></div>


        {/* Brass support legs */}
        <div className="flex justify-between w-20 mt-1">
          <div className="brass-support w-2 h-4"></div>
          <div className="brass-support w-2 h-4"></div>
          <div className="brass-support w-2 h-4"></div>
        </div>

        {/* House name and points */}
        <p className="sorts-mill-goudy-regular text-lg text-ink-secondary">{points}</p>
        {/* <h3 className="pirata-one-regular text-xl mt-2 text-ink-primary">{name}</h3> */}

      </div>

      {members && members.length > 0 && (
        <MembersHouse houseName={name} members={members} />
      )}
    </div>
  );
}