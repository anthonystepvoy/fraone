import { socialMedia } from "../constants";
import { useState, useEffect } from "react";

const SocialsIsland = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll);
    return () => 
       window.removeEventListener("scroll", listenToScroll); 
  }, [])
  
  const listenToScroll = () => {
    let heightToHideFrom = 4600; // Adjust this value as needed
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > heightToHideFrom) {  
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }  
  };

  return (
    <div
      className={`social-island fixed top-80 right-0 w-6 h-60 grid-cols-2 justify-end px-[100px] cursor-pointer z-40 transition-all ${isVisible ? '' : 'hidden'}`}
    >
      {socialMedia.map((icon) => (
        <div
          className="flex justify-center items-center mt-4 w-12 h-12 bg-gray-300 hover:bg-main-purple rounded-full shadow-xl"
          key={icon.alt}
        >
          <img src={icon.src} alt={icon.alt} width={24} height={24} />
        </div>
      ))}
    </div>
  );
};

export default SocialsIsland;
