import React from "react";

const Cartes = ({ tableau }) => {
  //console.log(tableau);
  return (
    <li className="carte">
      <img src={tableau.Image} alt={tableau.Titre} />
      <div className="infos">
        <h3>{tableau.Titre}</h3>
        <h4>{"Auteur : " + tableau.Auteur}</h4>
        <p>{tableau.Dimension}</p>
        <p>{tableau.Techniques}</p>
        <p>{tableau.Style}</p>
        <p>{tableau.Tarif}</p>
      </div>
    </li>
  );
};

export default Cartes;
