import React from "react";
import MemberCard from "../components/MemberCard";
import Raymond from "../assets/img/raymond.jpeg";
import Lesly from "../assets/img/lesly.jpeg";
import Laura from "../assets/img/laura.jpeg";

const Team = () => {
  return (
    <div  className="container">
      <h1>Notre Equipe</h1>
      <ul className="memberCard">
        <MemberCard image={Raymond} name='Jean Julien Raymond' role='Président Association Grash-Espagne'/>
        <MemberCard image={Laura} name='Laura Moreno Seguria' role='Secrétaire Association Grash-Espagne'/>
        <MemberCard image={Lesly} name='Lesly Lamothe' role='?'/>
      </ul>
    </div>
  );
};

export default Team;
