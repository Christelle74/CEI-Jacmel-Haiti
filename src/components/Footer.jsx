import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className='socialLinks'>
        <ul>
            <li>
                <a href="https://www.facebook.com/grash.haitisolidaridad2.0/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/gsolidaridadeh1?s=08" target="_blank" rel="noopener noreferrer">
                    <i className='fab fa-twitter'></i>
                </a>
            </li>
            <li>
                <a href="https://gsolidaridadehaiti.wixsite.com/grash?fbclid=IwAR07Kejueo4gPGbRtdVt3A4Po_ukHItBqOFWiMDgaSlXhMoU-MYGNI6KtgQ" target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-globe'></i>
                </a>
            </li>
        </ul>
      </div>
      
      <p className="copyright">Créé par Christelle Philippe - © 2022</p>
    </div>
  );
};

export default Footer;
