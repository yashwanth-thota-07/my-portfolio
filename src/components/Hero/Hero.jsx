import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { useTypingEffect } from '../../hooks/useAnimations';
import profileImage from '../../assets/profile.jpg';
import './Hero.css';

const roles = ['Full Stack Developer', 'Problem Solver', 'MERN Stack Enthusiast', 'Lifelong Learner'];

export default function Hero() {
  const typedText = useTypingEffect(roles, 80, 40, 2000);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrame;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__gradient-orb hero__gradient-orb--1" />
      <div className="hero__gradient-orb hero__gradient-orb--2" />
      <div className="hero__gradient-orb hero__gradient-orb--3" />

      <div className="hero__container container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.p
              className="hero__greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Hello, I'm
            </motion.p>

            <h1 className="hero__name">
              <span className="hero__name-first">Yashwanth</span>
              <span className="hero__name-last gradient-text">Thota</span>
            </h1>

            <div className="hero__role">
              <span className="hero__role-prefix">I'm a </span>
              <span className="hero__role-typed">{typedText}</span>
              <span className="hero__role-cursor">|</span>
            </div>

            <p className="hero__description">
              Second Year B Tech IT student at Army Institute of Technology, Pune.
              Passionate about building Backend web applications and
              solving DSA problems through clean, efficient code.
            </p>

            <div className="hero__actions">
              <a href="#projects" className="hero__btn hero__btn--primary">
    
                  View Projects
              </a>

             
              <a href="/resume.pdf" download className="hero__btn hero__btn--secondary">
                <FiDownload size={18} />
                <span>Download Resume</span>
                  
              </a>
              
            </div>

            <div className="hero__socials">
              <a href="https://github.com/yashwanth-thota-07" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/yashwanth-thota-aba68a388" target="_blank" rel="noopener noreferrer" className="hero__social" aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:edukondalu1522@gmail.com" target="_blank" className="hero__social" aria-label="Email">
                <FiMail size={20} />
              </a>
              <a href="/resume.pdf" className="hero__social" aria-label="Download Resume">
                <FiDownload size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="hero__image-container">
              <div className="hero__image-ring hero__image-ring--1" />
              <div className="hero__image-ring hero__image-ring--2" />
              <img src={profileImage} alt="Yashwanth Thota" className="hero__image" />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <a href="#about" className="hero__scroll-btn" aria-label="Scroll down">
            <div className="hero__scroll-mouse">
              <div className="hero__scroll-wheel" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

