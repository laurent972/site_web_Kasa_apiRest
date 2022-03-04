import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';



const Logement = () => {

  const [LogementsData, setLogementsData] = useState([]);

  useEffect(()=> {
    axios
    .get("./data/logements.json")
    .then((data) => setLogementsData(data.data))
  },[])

  return (
    <div className="row">
      {LogementsData.map((logement) => (
         <Card key={logement.id} logement={logement} />
       )
      )}
    </div>
  );
};

export default Logement;