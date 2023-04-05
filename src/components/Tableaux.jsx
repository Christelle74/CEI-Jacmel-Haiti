import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartes from "./Cartes";

const Tableaux = () => {
  //setData pour modifier les datas stockées et useState (composant react) récupère un tableau
  const [data, setData] = useState([]);
  // le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios.get("./tableaux.json").then((res) => setData(res.data));
  }, []); // [] est un callback

  return (
    <div className="tableaux">
      <h1>Tableaux solidaires</h1>
      <ul>
        {data.map((tableau, index) => (
          <Cartes key={index} tableau={tableau} />
        ))}
      </ul>
    </div>
  );
};

export default Tableaux;
