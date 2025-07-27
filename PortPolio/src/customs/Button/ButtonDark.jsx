import React, { useState } from "react";
import { Lightbulb, Star } from "lucide-react";

// Custom Lightbulb icon with gradient stroke
const LightbulbGradient = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="lightbulb-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fcff9e" />
        <stop offset="1" stopColor="#c67700" />
      </linearGradient>
    </defs>
    <Lightbulb stroke="url(#lightbulb-gradient)" />
  </svg>
);

// Custom Star icon with gradient stroke
const StarGradient = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="star-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#30cfd0" />
        <stop offset="1" stopColor="#330867" />
      </linearGradient>
    </defs>
    <Star stroke="url(#star-gradient)" />
  </svg>
);

const ButtonDark = ({ darkMode, toggleDarkMode }) => {
    const [isHover, setIsHover] = useState(false);
    const gradientBg = "radial-gradient(circle,rgba(232,230,230,1) 45%,rgba(237,237,223,1) 62%,rgba(220,222,95,1) 100%)";
    return (
        <button
            onClick={toggleDarkMode}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`p-2 rounded-md border transition-all border-gray-400 ${!darkMode ? "hover:bg-gray-800" : ""}`}
            style={darkMode && isHover ? { background: gradientBg } : undefined}
        >
            {darkMode ? <LightbulbGradient /> : <StarGradient />}
        </button>
    );
};

export default ButtonDark;
