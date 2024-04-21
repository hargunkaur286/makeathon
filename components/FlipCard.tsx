"use client";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Flipcard = () => {
  // State for each card
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  // Function to flip each card
  const flipCard1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const flipCard2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const flipCard3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
      {/* First Card */}
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped1}>
        <div className="card" onClick={flipCard1}>
          <h1>Front</h1>
        </div>
        <div className="card card-back" onClick={flipCard1}>
          <h1>Back</h1>
        </div>
      </ReactCardFlip>

      {/* Second Card */}
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped2}>
        <div className="card" onClick={flipCard2}>
          <h1>Front</h1>
        </div>
        <div className="card card-back" onClick={flipCard2}>
          <h1>Back</h1>
        </div>
      </ReactCardFlip>

      {/* Third Card */}
      <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped3}>
        <div className="card" onClick={flipCard3}>
          <h1>Front</h1>
        </div>
        <div className="card card-back" onClick={flipCard3}>
          <h1>Back</h1>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Flipcard;


