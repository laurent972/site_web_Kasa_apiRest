import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import aproposBanner from '../assets/MaskGroup.png';
import Collapse from '../components/Collapse';
import axios from 'axios';

const Apropos = () => {

  const [content, setContent] = useState([]);

   useEffect(() => {
      
    axios
    .get("./data/a-propos.json")
    .then((res)=> {
      setContent(res.data)
    })
  
  }, [setContent]);

  console.log(content);


  return (
    <section className="container-lg a-propos">
      <Banner link={aproposBanner} text={''}/>

      <div className='content'>
      {content.map((content,index)=>(
        <Collapse key={index} titre={content.title} content={content.text}/>
      ))}
        
      
      </div>
    </section>
  );
};

export default Apropos;