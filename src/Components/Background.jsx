import React from "react";
import ParticleBackground from "react-particle-backgrounds";

const Background = () => {
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#0C37FA",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 0.7,
      maxSpeed: 1.5,
    },
    opacity: {
      minOpacity: 0.2,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };

  return <ParticleBackground settings={settings} />;
};

export default Background;
