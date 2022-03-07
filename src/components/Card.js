import React from 'react';
import { Link } from 'react-router-dom';


const card = (props) => {

  const {logement} = props;

  return (
    <article className="col-sm-4">
      <div className="card bg-dark text-white mb-3 mt-3" style={{backgroundImage: `url(${logement.cover})` }}>
      <Link to={`fiche-logement/${logement.id}`}>
        <div className="card-img-overlay">
         <h4 className="card-title">{logement.title}</h4>
        </div>
        </Link>
      </div>
    </article>

  );
};

export default card;