import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, size = 100, strokeWidth = 10, color = 'green'}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress-bar">
      <svg width={size} height={size}>
        <circle
          className="background-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ stroke: color }}
        />
      </svg>
      <div className="progress-text" style={{ color: color }}>{`${progress}%`}</div>
    </div>
  );
};

export default ProgressBar;
