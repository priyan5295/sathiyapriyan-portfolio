import {motion} from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedText({ text, startDelay = 1000, endDelay = 2000, typeSpeed = 100, loop = true } ) {
    const [words, setWords] = useState([]);
    useEffect(() => {
        const timeoutIds = [];
        const wordsArray = text.split(' ');

        setWords([]);

        const animateText = () => {
            wordsArray.forEach((word, index) => {
                const timeoutId = setTimeout(() => {
                    setWords(prevWords => [...prevWords, word]);
                }, startDelay + index * typeSpeed);
                timeoutIds.push(timeoutId);
            });

            if (loop) {
                const timeoutId = setTimeout(() => {
                    setWords([]);
                    animateText();
                }, startDelay + wordsArray.length * typeSpeed + endDelay);
                timeoutIds.push(timeoutId);
            }
        };

        animateText();

        return () => {
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, [text, startDelay, endDelay, typeSpeed, loop]);

    return <p className='text-2xl mt-2'>
         <span className="static-word">I'm a </span>{' '}
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -50 }} // Initial animation values
                    animate={{ opacity: 1, y: 0 }} // Animation values when component is rendered
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation delay based on word index
                >
                    {word}{' '}
                </motion.span>
            ))}
        </p>
}