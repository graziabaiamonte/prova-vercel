"use client";
import { useEffect, useState } from 'react';

const CustomCursor = ({ scrollToId, containerId }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const container = document.getElementById(containerId);

      if (container) {
        const containerRect = container.getBoundingClientRect();
        
        // Controlla se il cursore è all'interno del box
        const isCursorInsideContainer = (
          e.clientX >= containerRect.left &&
          e.clientX <= containerRect.right &&
          e.clientY >= containerRect.top &&
          e.clientY <= containerRect.bottom
        );

        setIsVisible(isCursorInsideContainer);
      }
    };

    // Aggiungi l'event listener per il movimento del mouse
    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [containerId]);

  const handleClick = () => {
    const element = document.getElementById(scrollToId); // Trova l'elemento per ID
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scrolla fino all'elemento
    } else {
      console.log('Element not found'); // Se l'elemento non viene trovato
    }
  };

  if (!isVisible) {
    return null; // Nascondi il componente quando non è visibile
  }

  return (
    <div className='w-full h-[110vh] z-[998]' onClick={handleClick} style={{ userSelect: 'none', cursor: 'none' }}>
      <div
        className="fixed w-20 h-20 rounded-full font-medium bg-opacity-30 text-white text-center flex items-center justify-center text-xs transition-transform ease-out z-50"
        style={{
          left: `${position.x - 40}px`,
          top: `${position.y - 40}px`,
          backdropFilter: 'blur(10px)', // Effetto vetro
        }}
      >
        SCROLL DOWN
      </div>
    </div>
  );
};

export default CustomCursor;
