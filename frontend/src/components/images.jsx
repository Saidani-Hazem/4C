import React, { useState, useEffect } from "react";
import "./images.css";

import a from "../img/a.jpg";
import b from "../img/b.jpg";
import c from "../img/c.jpg";
import d from "../img/d.jpg";
import e from "../img/e.jpg";
import f from "../img/f.jpg";
import g from "../img/g.jpg";
import h from "../img/h.jpg";
import i from "../img/i.jpg";
import j from "../img/j.jpg";
import k from "../img/k.jpg";
import l from "../img/l.jpg";
import m from "../img/m.jpg";
import n from "../img/n.jpg";
import o from "../img/o.jpg";
import p from "../img/p.jpg";
import q from "../img/q.jpg";
import r from "../img/r.jpg";
import s from "../img/s.jpg";
import t from "../img/t.jpg";
import u from "../img/u.jpg";
import v from "../img/v.jpg";
import w from "../img/w.jpg";

const images = [
  a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,
];

const Images = () => {
  const [displayedImages, setDisplayedImages] = useState(getRandomImages());
  const [overlayVisible, setOverlayVisible] = useState([false, false, false]);
  const [changeBlock, setChangeBlock] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newOverlayVisible = [...overlayVisible];
      newOverlayVisible[changeBlock] = true;
      setOverlayVisible(newOverlayVisible);

      setTimeout(() => {
        setDisplayedImages((prevImages) => {
          const newImages = [...prevImages];

          if (changeBlock === 0) {
            newImages[1] = getRandomImage();
            newImages[3] = getRandomImage();
            newImages[5] = getRandomImage();
            setChangeBlock(1);
          } else {
            newImages[0] = getRandomImage();
            newImages[2] = getRandomImage();
            newImages[4] = getRandomImage();
            setChangeBlock(0);
          }

          return newImages;
        });
        setTimeout(() => {
          const updatedOverlayVisible = [...overlayVisible];
          updatedOverlayVisible[changeBlock] = false;
          setOverlayVisible(updatedOverlayVisible);
        }, 500);
      }, 1000);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  function getRandomImages() {
    const shuffled = [...images].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }

  function getRandomImage() {
    const availableImages = images.filter(
      (img) => !displayedImages.includes(img)
    );
    return availableImages[Math.floor(Math.random() * availableImages.length)];
  }

  return (
    <div className="grid-container">
      {displayedImages.map((src, index) => (
        <div className="image-container" key={index}>
          <img src={src} alt="" className="img" />
          {overlayVisible[0] && (index === 1 || index === 3 || index === 5) && (
            <div className="overlay"></div>
          )}
          {overlayVisible[1] && (index === 0 || index === 2 || index === 4) && (
            <div className="overlay"></div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Images;
