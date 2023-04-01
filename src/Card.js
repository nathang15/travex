import React from 'react';

function Card({ children, noPadding }) {
  let classes = 'bg-white shadow-lg rounded-md p-3'
  if (noPadding) {
    classes = 'bg-white shadow-lg rounded-md'
  }
  return (
    <div
      className="card-wrapper"
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className={classes} style={{ width: '100%' }}>
        {children}
      </div>
    </div>
  );
}

export default Card;
