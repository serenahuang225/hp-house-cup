import React from "react";

export default function HouseBanner({ houseName, mainColor, accentColor }) {
  const clip = "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)";

  return (
    <div className="relative max-w-lg mx-auto text-center">
      <div
        className="relative flex flex-col items-center justify-center py-[72px] px-6"
        style={{
          backgroundColor: mainColor,
          clipPath: clip,
          WebkitClipPath: clip,
          border: `3px solid ${mainColor}`,
        }}
      >
        {/* Accent inset border */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: accentColor,
            clipPath: clip,
            WebkitClipPath: clip,
            transform: "scale(0.985)",
            zIndex: 1,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: mainColor,
            clipPath: clip,
            WebkitClipPath: clip,
            transform: "scale(0.93)",
            zIndex: 2,
          }}
        />

        {/* Main content (crest) */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={`/houses/${houseName.toLowerCase()}.png`}
            alt={`${houseName} crest`}
            className="w-28 h-28 mb-4 object-contain drop-shadow-lg" // bigger crest
          />
        </div>
      </div>
    </div>
  );
}