import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState } from "react";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
      {technologies.map((technology) => (
        <div 
          className='w-28 h-28' 
          key={technology.name}
          onMouseEnter={() => setHoveredTech(technology.name)}
          onMouseLeave={() => setHoveredTech(null)}>
          <BallCanvas icon={technology.icon} />
          {hoveredTech === technology.name && (
            <p className="flex justify-center text-sm font-semibold">
              {technology.name}
            </p>
          )}
          {/* <p className="flex justify-center text-sm">{technology.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
