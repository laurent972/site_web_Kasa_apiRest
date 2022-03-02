import React from 'react';

const card = (props) => {

  const {logement} = props;

  return (
    <div className="col-sm-4">
      <div className="card bg-dark text-white">
        <img className="card-img" src={logement.cover} alt={logement.title} />
        <div class="card-img-overlay">
         <h4 class="card-title">{logement.title}</h4>
        </div>
      </div>
    </div>

  );
};

export default card;