
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';


const Fiche = () => {
  const {id} = useParams();
  const [LogementData, setLogementData] = useState([]);

  useEffect(()=> {
    axios
    .get("../data/logements.json")
    .then((data) => setLogementData(data.data))
  },[])

  return (
    <section className="container-lg fiche">
      {LogementData
      .filter(logement => logement.id.includes(id))
      .map((logement)=>(
        <Detail key={logement.id} logement={logement}/> 
       ))}
       
    </section>
  );
};

export default Fiche;