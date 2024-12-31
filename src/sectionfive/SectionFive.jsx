import React from 'react';
import './sectionfive.css';

const SectionFive = () => {
  const phases = [
    {
      phase: "Q1 2024",
      title: "Launch Phase",
      items: ["Token Launch", "Community Building", "Social Media Campaign"],
      side: "left"
    },
    {
      phase: "Q2 2024",
      title: "Growth Phase",
      items: ["Exchange Listings", "NFT Collection", "Marketing Push"],
      side: "right"
    },
    {
      phase: "Q3 2024",
      title: "Expansion Phase",
      items: ["Staking Platform", "Mobile App", "Partnerships"],
      side: "left"
    },
    {
      phase: "Q4 2024",
      title: "Ecosystem Phase",
      items: ["Governance", "DeFi Integration", "Global Marketing"],
      side: "right"
    }
  ];

  return (
    <div className="roadmap-container">
      <h6 className="roadmap-title">Our Roadmap</h6>
      <div className="timeline-container">
        <div className="center-line" />
        {phases.map((phase, index) => (
          <div key={index} className={`timeline-item ${phase.side}`}>
            <div className="timeline-dot" />
            <div className="content-box">
              <h2 className="phase-title">{phase.phase}</h2>
              <h3 className="phase-subtitle">{phase.title}</h3>
              <ul className="phase-list">
                {phase.items.map((item, i) => (
                  <li key={i} className="phase-list-item">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFive;