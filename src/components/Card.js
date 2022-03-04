import React from 'react';
import { Link } from 'react-router-dom';


const card = (props) => {

  const {logement} = props;

  return (
    <article className="col-sm-4">
      <div className="card bg-dark text-white">
        <img className="card-img" src={logement.cover} alt={logement.title} />
        <div className="card-img-overlay">
         <h4 className="card-title">{logement.title}</h4>
         <Link to={`fiche-logement/${logement.id}`}>
           Link
         </Link>
        </div>
      </div>
    </article>

  );
};

export default card;