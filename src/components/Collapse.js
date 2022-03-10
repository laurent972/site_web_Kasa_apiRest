import React, { useState } from 'react';

const Collapse = (props) => {
  const [show, setShow] = useState(false);

  const entries = Object.entries(props);



  return (

   <>
   {entries.map((data)=>(
     <>  
      <div className='col' >
          <div  className={show ? 'collap-Elem title true' : 'collap-Elem title false'} onClick={()=>setShow(!show)}>{data[0]}</div>   
          <div className={show ? 'collap collap-show' : 'collap collap-hide'}>{data[1]}</div>
      </div>
     </>
    ))}
   
  </>
  

  );
};

export default Collapse;