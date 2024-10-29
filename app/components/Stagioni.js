import React, { useState, useRef, useEffect } from "react";
import CardRicettaClient from "./CardRicettaClient";

export default function Stagioni({ricette}) {
  const [activeComponent, setActiveComponent] = useState("Primavera");
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; 


  const handlePrimaveraClick = () => setActiveComponent("Primavera");
  const handleEstateClick = () => setActiveComponent("Estate");
  const handleInvernoClick = () => setActiveComponent("Inverno");
  const handleAutunnoClick = () => setActiveComponent("Autunno");

  const moveSlide = (direction) => {
    let newSlide = currentSlide + direction;

    if (newSlide < 0) {
      newSlide = totalSlides - 1; // Vai all'ultimo slide se si va a sinistra dal primo
    } else if (newSlide >= totalSlides) {
      newSlide = 0; // Vai al primo slide se si va a destra dall'ultimo
    }

    setCurrentSlide(newSlide);
  };
 

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
  }, [currentSlide]);


  return (
    <div>

      {/* versione menu mobile */}
      <div
        className={`relative my-[5%] flex md:hidden overflow-hidden h-[60%] w-[100vw] items-center`}
       
      >
        <div
          className={`flex transition-transform duration-300 ease-in-out w-[400vw]`}
          ref={sliderRef}
          style={{  
          }}
        >
          <button
            onClick={handlePrimaveraClick}
            className={`text-center  w-[100vw]  py-2 px-4 ${activeComponent === "Primavera" ? "bg-active" : ""}`}
          >
            PRIMAVERA
          </button>
          <button
            onClick={handleEstateClick}
            className={` text-center  w-[100vw] py-2 px-4 ${activeComponent === "Estate" ? "bg-active" : ""}`}
          >
            ESTATE
          </button>
          <button
            onClick={handleAutunnoClick}
            className={` text-center  w-[100vw] py-2 px-4 ${activeComponent === "Autunno" ? "bg-active" : ""}`}
          >
            AUTUNNO
          </button>
          <button
            onClick={handleInvernoClick}
            className={` text-center  w-[100vw] py-2 px-4 ${activeComponent === "Inverno" ? "bg-active" : ""}`}
          >
            INVERNO
          </button>
        </div>

       
          <>
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellowLight text-yellowDark rounded-full py-2 px-4 z-10"
              onClick={() => moveSlide(-1)}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellowLight text-yellowDark rounded-full py-2 px-4 z-10"
              onClick={() => moveSlide(1)}
            >
              &#10095;
            </button>
          </>
        
      </div>

      {/* versione menu desktop */}
      <div
        className="hidden md:flex justify-center w-[100vw] items-center"
      >
        <div
          className="w-[100%] flex justify-center" 
        >
          <button
            onClick={handlePrimaveraClick}
            className={`text-center  py-2 px-4 ${activeComponent === "Primavera" ? "bg-active" : ""}`}
          >
            PRIMAVERA
          </button>
          <button
            onClick={handleEstateClick}
            className={` text-center  py-2 px-4 ${activeComponent === "Estate" ? "bg-active" : ""}`}
          >
            ESTATE
          </button>
          <button
            onClick={handleAutunnoClick}
            className={` text-center  py-2 px-4 ${activeComponent === "Autunno" ? "bg-active" : ""}`}
          >
            AUTUNNO
          </button>
          <button
            onClick={handleInvernoClick}
            className={` text-center py-2 px-4 ${activeComponent === "Inverno" ? "bg-active" : ""}`}
          >
            INVERNO
          </button>
        </div>

    
      </div>

      <div className="px-8 flex justify-center items-center">
        <CardRicettaClient ricette={ricette} stagione={activeComponent} className="w-full h-auto" />
      </div>
    </div>
  );
}