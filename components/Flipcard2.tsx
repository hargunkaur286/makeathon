import React from "react";

const FlipCard: React.FC = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">FLIP CARD</p>
          <p>Hover Me</p>
        </div>
        <div className="flip-card-back mt-0">
          <h2 className="title mt-10">  Financial Mindset:</h2>
          <p className="text-sm mt-5">"Money Mindfulness": Being mindful of your spending is like yoga for your wallet - breathe in financial stability, breathe out unnecessary expenses</p>
          <p className="text-sm">"Gratitude Attitude": Counting your financial blessings is like sprinkling glitter on your budget - it makes everything sparkle!</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
