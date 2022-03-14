import React, { useState } from 'react';

const Collapse = (props) => {
  const [show, setShow] = useState(false);

  // const entries = Object.entries(props);
  const isArray = Array.isArray(props.content);


  return (
   <>
      <div className='mt-3 mb-3' >
          <div  className={show ? 'collap-Elem title true' : 'collap-Elem title false'} onClick={()=>setShow(!show)}>{props.titre}</div>   
          <div className={show ? 'collap collap-show' : 'collap collap-hide'}>
            {isArray && 
              <ul>
                {props.content.map((prop, index)=><li key={index}>{prop}</li>)}
              </ul>
            }
          </div>
      </div>
  </>
  );
};

export default Collapse;