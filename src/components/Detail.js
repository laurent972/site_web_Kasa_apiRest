import React from 'react';
import Collapse from './Collapse';
import Slider from './Slider';

import Rate from './Rate';

const Detail = (props) => {

  const {logement} = props;
  console.log(props);

  return (
    <>
 
      <Slider pictures={logement.pictures}/>
      
      <div className="row">
        <div className="col">
            <h2 className='fiche-titre'>{logement.title}</h2>
            <div className='location mb-3'>{logement.location}</div>

            <div className="tag-fiche">
            {logement.tags.map((tag)=>(
                <p className="tag" key={tag}>{tag}</p>
            ))}
            </div>
          
          </div>
        <div className="col host">
      
           <span>{logement.host.name}</span>
           <img src={logement.host.picture} alt="" />
      
          <div className='rating'>
            
            <Rate rate={logement.rating} />       
           
          </div>
          </div>  
      </div>
     
     <div className="row">
    
          <Collapse Description ={logement.description} />
      
          <Collapse Equipements={logement.equipments} />
      
    </div>
       
    </>
  );
};

export default Detail;