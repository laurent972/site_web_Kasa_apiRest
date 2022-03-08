import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';



const Logement = () => {

  const [LogementsData, setLogementsData] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(() => {
      
    axios
    .get("./data/logements.json")
    .then((res)=> {
      setLogementsData(res.data)
      setLoading(false)
    })
  
  }, [setLogementsData]);


  return (
    <div className="row">
      {loading &&
        <span className='loader mt-5'>
         <img src={require("../assets/Settings.gif")} alt="loading"  height={40} width={40} />
        </span>
      }

      {!loading && 
        <>
          {LogementsData.map((logement) => (
              <Card key={logement.id} logement={logement} />
            )
            )}
        </>
      }
    </div>
  );
};

export default Logement;