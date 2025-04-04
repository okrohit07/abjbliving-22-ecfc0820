
import { useEffect, useState } from 'react';

const SlidingText = () => {
  const phrases = ["No es alquilar un apartamento, es alquilar un estilo de vida"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentChar < phrases[currentIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev + phrases[currentIndex][currentChar]);
          setCurrentChar(prev => prev + 1);
        }, 80); // Typing speed
      } else {
        // Pause at the end of the phrase
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      if (currentChar > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentChar(prev => prev - 1);
        }, 40); // Erasing speed (faster than typing)
      } else {
        // Move to next phrase
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [currentChar, currentIndex, isTyping, phrases]);

  return (
    <div className="py-12 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-serif text-center">
            {displayText}
            <span className="animate-pulse ml-0.5">|</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
