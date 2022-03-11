import React from 'react';

const Banner = (props) => {

  return (
    <div className="banner" style={{backgroundImage:`url(${props.link})`}} role="banner" aria-label='banner'>
     <p>{props.text}</p>
    </div>
  );
};

export default Banner;