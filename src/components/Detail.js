import React from 'react';
import Collapse from './Collapse';
import Slider from './Slider';

const Detail = (props) => {

  const {logement} = props;
  console.log(props);

  return (
    <>
 
      <Slider pictures={logement.pictures}/>
      

       <h2 className="card-title">{logement.title}</h2>
      <h4>{logement.location}</h4>

      {logement.tags.map((tag)=>(
          <p className="tag" key={tag}>{tag}</p>
      ))}
      
      <div>
      {logement.rating} 
      </div>
      
     <span>{logement.host.name}</span>
     <span><img src={logement.host.picture} alt="" /></span>
     
      <div className='description'>
      <Collapse description={logement.description} />
      </div>

      <div>
      {logement.equipments.map(equipement => (
          <p key={equipement}>{equipement}</p>
      ))} 
      </div>

      <Collapse />

       
    </>
  );
};

export default Detail;