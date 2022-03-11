import React, { useState } from 'react';

const Collapse = (props) => {
  const [show, setShow] = useState(false);

  // const entries = Object.entries(props);

  console.log(props);

  return (

   <>

      <div className='mt-3 mb-3' >
          <div  className={show ? 'collap-Elem title true' : 'collap-Elem title false'} onClick={()=>setShow(!show)}>{props.titre}</div>   
          <div className={show ? 'collap collap-show' : 'collap collap-hide'}>{props.content}</div>
      </div>
 
  </>
  

  );
};

export default Collapse;