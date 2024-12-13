import { useState, useEffect } from 'react';

const TypewriterText = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return (
        <span className="typewriter">
            {displayText}
        </span>
    );
};

export default TypewriterText; 