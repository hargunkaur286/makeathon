"use client"
import React, { useRef, useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "framer-motion";

const NumberCounter = ({ value }) => {
  const props = useSpring({
    number: value,
    from: { number: 0 },
    config: { duration: 3000 },
  });
  return (
    <animated.span>
      {props.number.to((val) => Math.floor(val))}
    </animated.span>
  );
};

export default function Projects() {
  const [projects, setProjects] = useState(1000);
  const [colorsAvailable, setColorsAvailable] = useState(7);
  const [satisfiedBuyers, setSatisfiedBuyers] = useState(100);
  const ref = useRef();
  const isInView = useInView(ref, { once: false, margin: "-20px 0px 0px 0px" });
  console.log(isInView);

  useEffect(() => {
    if (isInView) {
      setProjects(1000);
    } else {
      setProjects(0);
    }
  }, [isInView]);

  return (

    <section className="flex flex-col items-center gap-6 justify-between" id="previous-projects">
      {/* NUMBER BAR */}
      <div data-aos="fade-up" className="w-full p-4 my-12 z-10" ref={ref}>
        <div className="flex justify-center gap-6 md:gap-12 text-center p-4 px-8 rounded-full bg-gradient-to-b from-blue-600 to-blue-800 text-white w-full max-w-7xl relative mx-auto overflow-hidden">
          <div>
            <p
              key={isInView ? "number-bar-show" : "number-bar-stop"}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold"
            >
              <NumberCounter value={projects} /> +
            </p>
            <p className="text-sm md:text-md">PROJECTS</p>
          </div>
          <span className="w-[1px] rounded-lg bg-gradient-to-b from-transparent via-white to-transparent" />
          <div>
            <p
              key={isInView ? "number-bar-show" : "number-bar-stop"}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold"
            >
              <NumberCounter value={colorsAvailable} /> +
            </p>
            <p className="text-sm md:text-md">COLORS AVAILABLE</p>
          </div>
          <span className="w-[1px] rounded-lg bg-gradient-to-b from-transparent via-white to-transparent" />
          <div>
            <p
              key={isInView ? "number-bar-show" : "number-bar-stop"}
              className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold"
            >
              <NumberCounter value={satisfiedBuyers} /> +
            </p>
            <p className="text-sm md:text-md">SATISFIED BUYERS</p>
          </div>
          
        </div>
      </div>
    </section>
  
  );
}

