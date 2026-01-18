import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import videoSource from '../assets/p1.mp4';

interface IntroVideoProps {
    onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Prevent scrolling while video plays
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleVideoEnd = () => {
        setIsVisible(false);
        setTimeout(onComplete, 1000); // Wait for fade out
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                >
                    <video
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                    >
                        <source src={videoSource} type="video/mp4" />
                    </video>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroVideo;
