import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './MouseFollower.css';

export default function MouseFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', move);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="mouse-follower"
        animate={{ x: pos.x - 16, y: pos.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="mouse-follower__ring"
        animate={{ x: pos.x - 32, y: pos.y - 32 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
