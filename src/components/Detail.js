import React, { useState } from 'react';
import Slider from './Slider';

import Rate from './Rate';

const Detail = (props) => {
  const [show, setShow] = useState(false);
  const [showE, setShowE] = useState(false);
  const {logement} = props;

  return (
    <>
 
      <Slider pictures={logement.pictures}/>
      
      <div className="row">
        <div className="col col-md-6 detail-title">
            <h2 className='fiche-titre'>{logement.title}</h2>
            <div className='location mb-3'>{logement.location}</div>
            <div className="tag-fiche">
            {logement.tags.map((tag)=>(
                <p className="tag" key={tag}>{tag}</p>
            ))}
            </div>
          </div>
        <div className="col col-md-6 host">
           <span>{logement.host.name}</span>
           <img src={logement.host.picture} alt="" className='portrait'/>
      
          <div className='rating mb-4 mt-3'>
            <Rate rate={logement.rating} />       
          </div>
          </div>  
      </div>
     
     <div className="row">
            <div className='col description' >
              <div  className={show ? 'collap-Elem title true' : 'collap-Elem title false'} onClick={()=>setShow(!show)}>Description</div>   
              <div className={show ? 'collap collap-show' : 'collap collap-hide'}>{logement.description}</div>
            </div>
            <div className='col eq' >
            <div  className={showE ? 'collap-Elem title true' : 'collap-Elem title false'} onClick={()=>setShowE(!showE)}>Equipments</div>  
            <div className={showE ? 'collap collap-show' : 'collap collap-hide'}> 
              <ul>
              {logement.equipments.map((data,index)=>(
                  <li key={index} >{data}</li>
              ))}
              </ul>
            </div> 
          </div>
    </div>
       
    </>
  );
};

export default Detail;