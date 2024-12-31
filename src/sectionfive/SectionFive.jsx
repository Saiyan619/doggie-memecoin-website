import React, { useEffect, useRef } from 'react';
import './sectionfive.css';

const Roadmap = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    };

    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const timelineItems = timelineRef.current.querySelectorAll('.content-box');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

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
      <span className="roadmap-title">Our Roadmap</span>
      <div className="timeline-container" ref={timelineRef}>
        <div className="center-line" />
        {phases.map((phase, index) => (
          <div key={index} className={`timeline-item ${phase.side}`}>
            <div className="timeline-dot" />
            <div className="content-box">
              <span className="phase-title">{phase.phase}</span>
              <span className="phase-subtitle">{phase.title}</span>
              <div className="phase-list">
                {phase.items.map((item, i) => (
                  <li key={i} className="phase-list-item">{item}</li>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;