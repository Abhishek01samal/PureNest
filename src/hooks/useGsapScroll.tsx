import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapScroll = () => {
  useEffect(() => {
    // Enable smooth scrolling behavior
    gsap.config({
      nullTargetWarn: false,
    });

    // Set up smooth scroll defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
      markers: false,
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};
