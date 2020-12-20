import React from 'react'

export const SpinnerLazy = () => {
  return (
    <div className="center-box mt-5">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
