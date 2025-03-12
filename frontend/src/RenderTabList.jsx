import React from "react";

export default function RenderTabList ({viewCompleted, setViewCompleted}) {
    return (
      <div className='nav nav-tabs'>
        <span
          className={viewCompleted ? 'nav-link active' : 'nav-link'}
          onClick={() => setViewCompleted(true)}
        >
          Complete
        </span>
        <span
          className={viewCompleted ? 'nav-link' : 'nav-link active'}
          onClick={() => setViewCompleted(false)}
        >
          Incompleted
        </span>
      </div>
  );
}