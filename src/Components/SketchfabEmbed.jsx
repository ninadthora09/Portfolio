// SketchfabEmbed.jsx
import React from "react";

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper w-full h-full">
      <iframe
        title="Kitchen Robot - Crispin"
        frameBorder="0"
        allowFullScreen
        mozAllowFullScreen="true"
        webkitAllowFullScreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/caf7f6162d614294a9189a243e112a09/embed"
        className="w-full h-full"
      ></iframe>
      <p style={{ fontSize: 13, fontWeight: "normal", margin: 5, color: "#4A4A4A" }}>
        <a
          href="https://sketchfab.com/3d-models/kitchen-robot-crispin-caf7f6162d614294a9189a243e112a09?utm_medium=embed&utm_campaign=share-popup&utm_content=caf7f6162d614294a9189a243e112a09"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Kitchen Robot - Crispin
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/neatpolygons?utm_medium=embed&utm_campaign=share-popup&utm_content=caf7f6162d614294a9189a243e112a09"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          neatpolygons
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=caf7f6162d614294a9189a243e112a09"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;
