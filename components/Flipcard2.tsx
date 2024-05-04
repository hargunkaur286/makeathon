import React from "react";

type FlipCardProps = {
  frontTitle: string;
  frontContent: string;
  title: string;
  description: string;
  description2:string
  subtitle: string;
};

const FlipCard: React.FC<FlipCardProps> = ({ frontTitle, frontContent, title, description, description2 ,subtitle }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title">{frontTitle}</p>
          <p>{frontContent}</p>
        </div>
        <div className="flip-card-back mt-0">
          <div>
            <h2 className="title mt-7">{title}</h2>
            <p className="text-sm mt-2">{description}</p>
            <p className="text-sm mt-2">{description2}</p>
            <p className="text-sm">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

