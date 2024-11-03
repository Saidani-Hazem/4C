import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <>
            <div className="nav">
        <div className="presentation">
            <img
              src="https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-1/308988342_470425058462138_4000791325766634078_n.png?stp=dst-png_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=xOxqZVL94m0Q7kNvgFzxPHW&_nc_zt=24&_nc_ht=scontent.ftun10-2.fna&_nc_gid=Aegut_eElDrGtqgIlVlTP_n&oh=00_AYA3UHYC8xY9oTZSkkpKi-CLWYHFU8fc39Oh9Oo7X-_Cnw&oe=672D5A57"
              alt=""
            />
            <div className="titels">
            <h4>CENTRE DE CARRIÈRES ET DE CERTIFICATION DES COMPÉTENCES</h4>
              <h4>INSTITUT SUPÉRIEUR DE GESTION DE BIZERTE</h4>
              
            </div>
        </div>

        <div className="navbar">
          <ul className="navbarlist">
            <li>Événement</li>
            <li>Partenaires</li>
            <li>Clubs</li>
            <li>À propos</li>
          </ul>
        </div>
      </div>
        </>
    );
}

export default Navbar;
