import React, { useState, useRef, useEffect } from "react";
import CardRicettaClient from "./CardRicettaClient";

export default function Portate({ricette}) {
  const [activeComponent, setActiveComponent] = useState("Insalata");
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 


  const handleInsalateClick = () => setActiveComponent("Insalata");
  const handlePrimiClick = () => setActiveComponent("Primo");
  const handleSecondiClick = () => setActiveComponent("Secondo");

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
            onClick={handleInsalateClick}
            className={`text-center  w-[100vw]  py-2 px-4 ${activeComponent === "Insalata" ? "bg-active" : ""}`}
          >
            INSALATE
          </button>
          <button
            onClick={handlePrimiClick}
            className={` text-center  w-[100vw] py-2 px-4 ${activeComponent === "Primo" ? "bg-active" : ""}`}
          >
            PRIMI
          </button>
          <button
            onClick={handleSecondiClick}
            className={` text-center  w-[100vw] py-2 px-4 ${activeComponent === "Secondo" ? "bg-active" : ""}`}
          >
            SECONDI
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
            onClick={handleInsalateClick}
            className={`text-center  py-2 px-4 ${activeComponent === "Insalata" ? "bg-active" : ""}`}
          >
            INSALATE
          </button>
          <button
            onClick={handlePrimiClick}
            className={` text-center  py-2 px-4 ${activeComponent === "Primo" ? "bg-active" : ""}`}
          >
            PRIMI
          </button>
          <button
            onClick={handleSecondiClick}
            className={` text-center  py-2 px-4 ${activeComponent === "Secondo" ? "bg-active" : ""}`}
          >
            SECONDI
          </button>
        </div>

    
      </div>

      <div className="px-8 flex justify-center items-center">
        <CardRicettaClient ricette={ricette} portata={activeComponent} className="w-full h-auto" />
      </div>
    </div>
  );
}