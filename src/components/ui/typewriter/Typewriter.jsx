import './Typewriter.css'
import { useState, useEffect } from 'react';

const Typewriter = () => {
      const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ['Developer', 'Designer', 'Freelancer'];
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setDisplayText(currentWord.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Move to next word after deleting
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentWordIndex]);
  return (
    <>
          <h4 className="text-4xl mt-6 min-h-[3rem] home_headline">
            I'm a{' '}
            <span className="font-medium typewriter-text">
              {displayText}
            </span>
            <span className="typewriter-cursor">|</span>
          </h4>
    
    </>
  )
}

export default Typewriter