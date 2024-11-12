import React from 'react';
import "./navbar.css"
import c4 from "../img/4cc.png"

const Navbar = () => {

  const scroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

    return (
        <>
            <div className="nav">
        <div className="presentation">
            <img
              src={c4}
              alt=""
            />
            <div className="titels">
            <h4>CENTRE DE CARRIÈRES ET DE CERTIFICATION DES COMPÉTENCES</h4>
              <h4>INSTITUT SUPÉRIEUR DE GESTION DE BIZERTE</h4>
              
            </div>
        </div>

        <div className="navbar">
          <ul className="navbarlist">
            <li className='menu__link' onClick={()=>scroll("events")}>Événement</li>
            <li className='menu__link' onClick={()=>scroll("parts")}>Partenaires</li>
            <li className='menu__link' onClick={()=>scroll("clubs")}>Clubs</li>
            <li className='menu__link' onClick={()=>scroll("propos")}>À propos</li>
          </ul>
        </div>
      </div>
        </>
    );
}

export default Navbar;
