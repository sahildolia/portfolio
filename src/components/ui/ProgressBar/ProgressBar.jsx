// src/components/ui/ProgressBar/ProgressBar.jsx
import { useEffect, useRef } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ skill, percentage }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    // Set width after component mounts to ensure proper animation
    if (progressRef.current) {
      progressRef.current.style.width = `${percentage}%`;
    }
  }, [percentage]);

  return (
    <div className="skill-item mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <div 
          ref={progressRef}
          className="progress-bar-fill" 
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;