import React from 'react';

const Detail = (props) => {

  const {logement} = props;
  console.log(props);

  return (
    <div>
      <img src={logement.cover} alt={logement.title} />

      
      {logement.pictures.map((picture)=>(
          <img src={picture} alt="" key={picture}/>
      ))}

       <h2 className="card-title">{logement.title}</h2>
      <h4>{logement.location}</h4>

      {logement.tags.map((tag)=>(
          <p className="tag" key={tag}>{tag}</p>
      ))}
      
      <div>
      {logement.rating} 
      </div>
      
     <span>{logement.host.name}</span>
     <span><img src={logement.host.picture} alt="" /></span>
     
      <div>
      {logement.description} 
      </div>

      <div>
      {logement.equipments.map(equipement => (
          <p key={equipement}>{equipement}</p>
      ))} 
      </div>

       
    </div>
  );
};

export default Detail;