import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise IMg sont accessibles dans public */}
      <img src="./CEI-logo.jpg" alt="logo CEI" />

      <h3>Centre d'éducation intégré Jacmel/Haïti</h3>
    </div>
  );
};

export default Logo;
