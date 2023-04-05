//import React, { useState } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navigation() {
  const [showLinks, setShowLinks]=useState(false)

  const handleShowLinks =()=> {
    setShowLinks(!showLinks)
  }
console.log(showLinks)
  return (
    <nav className={`navigation ${showLinks ? "showNavigation" : "hiddenNavigation"}`}>
      <Logo/>
      <ul className="navLink">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/team"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Notre Equipe</li>
        </NavLink>
        <NavLink
          to="/galleries"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Galeries</li>
        </NavLink>
        <NavLink
          to="/activities"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Activités</li>
        </NavLink>
        <NavLink
          to="/events"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Evénements</li>
        </NavLink>
        <NavLink
          to="/donation"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Dons</li>
        </NavLink>
      </ul>
      <button className="navBurger" onClick={handleShowLinks}>
        <span className="burger"></span>
      </button>
    </nav>
  )
}

export default Navigation;
