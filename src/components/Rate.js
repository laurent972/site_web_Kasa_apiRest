import React from 'react';
import redStar from '../assets/red-star.png';
import greyStar from '../assets/grey-star.png';

const Rate = (props) => {

  const stars = Array.from({length:props.rate},()=><img key={Math.random()} src={redStar} alt='' />)
  const disabledStar = Array.from({length: 5 - props.rate},()=><img  key={Math.random()} src={greyStar} alt='' />)

  return (
    <>
      {stars}{disabledStar}
    </>
  );
};

export default Rate;