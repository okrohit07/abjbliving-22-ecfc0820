
import React from 'react';

const features = [
  "Co-working Spaces",
  "Wellness Centers", 
  "Rooftop Gardens",
  "Smart Home Technology",
  "Communal Kitchens",
  "Flexible Leases",
  "Networking Events",
  "Shared Transportation",
  "Sustainable Living",
  "Community Management"
];

const SlidingText = () => {
  return (
    <div className="py-6 bg-primary text-white overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {features.concat(features).map((feature, index) => (
          <div key={index} className="mx-8 text-lg font-medium">
            {feature} <span className="mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingText;
